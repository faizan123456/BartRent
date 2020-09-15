"use strict";
jQuery.houzillo_init_profile_map = function (field_key, id, map_lat, map_lng) {

    var mapwrapper = jQuery('#'+id);

    if (typeof (scripts_vars) != "undefined" && scripts_vars !== null) {
        var dir_latitude        = scripts_vars.dir_latitude;
        var dir_longitude       = scripts_vars.dir_longitude;
        var dir_map_type        = scripts_vars.dir_map_type;
        var dir_zoom            = scripts_vars.dir_zoom;
        var dir_map_scroll      = scripts_vars.dir_map_scroll;
        var map_styles          = scripts_vars.map_styles;
        var dir_map_marker      = scripts_vars.dir_map_marker;
    } else {
        var dir_latitude = 51.5001524;
        var dir_longitude = -0.1262362;
        var dir_map_type = 'ROADMAP';
        var dir_zoom = 12;
        var dir_map_scroll = false;
        var map_styles      = 'none';
        var dir_map_marker  = 'https://maps.google.com/mapfiles/marker_grey.png';
    }

	if( map_lat && map_lng ){
		map_lat	= map_lat;
		map_lng	= map_lng;
	} else{
		map_lat	= dir_latitude;
		map_lng	= dir_longitude;
	}

    if (dir_map_type == 'ROADMAP') {
        var map_id = google.maps.MapTypeId.ROADMAP;
    } else if (dir_map_type == 'SATELLITE') {
        var map_id = google.maps.MapTypeId.SATELLITE;
    } else if (dir_map_type == 'HYBRID') {
        var map_id = google.maps.MapTypeId.HYBRID;
    } else if (dir_map_type == 'TERRAIN') {
        var map_id = google.maps.MapTypeId.TERRAIN;
    } else {
        var map_id = google.maps.MapTypeId.ROADMAP;
    }

    var scrollwheel = true;

    if (dir_map_scroll == 'false') {
        scrollwheel = false;
    }
	
    map_styles	= houzillo_get_map_styles(map_styles);
    mapwrapper.gmap3({
       
        panControl: true,
        scaleControl: true,
        navigationControl: true,
        draggable: true,
        scrollwheel: scrollwheel,
        streetViewControl: true,
        center: [map_lat, map_lng],
        zoom: parseInt(dir_zoom),
        mapTypeId: map_id,
        mapTypeControlOptions: {
            mapTypeIds: ["mapcustom_style"]
        },
      }).marker([
        {position:[map_lat, map_lng],icon: dir_map_marker,
            options: {
                draggable: true
            }
        }     
      ])
      .on('dragend', function (marker) {
        jQuery('#location-latitude-'+field_key).val(marker.getPosition().lat());
        jQuery('#location-longitude-'+field_key).val(marker.getPosition().lng());
      })
      .styledmaptype(
        "mapcustom_style",
         map_styles,
        { name: "Map Custom Style" },
    );
};

//Call To Add Map
jQuery.houzillo_profile_map_fallback = function (id,field_key) {
    var map_div = jQuery('#'+id).gmap3("get");
    var map_input = document.getElementById("location-address-"+field_key);
    jQuery("#location-address-"+field_key).bind("keypress", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });
	
	//autcomplete
    var autocomplete = new google.maps.places.Autocomplete(map_input);

    autocomplete.bindTo("bounds", map_div);

    google.maps.event.addListener(autocomplete, "place_changed", function () {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        if (place.geometry.viewport) {
            map_div.fitBounds(place.geometry.viewport);
        } else {
            map_div.setCenter(place.geometry.location);
        }
		
        var marker = jQuery('#'+id).gmap3({get: "marker"});
        marker.setPosition(place.geometry.location);
        jQuery("#location-latitude-"+field_key).val(marker.getPosition().lat());
        jQuery("#location-longitude-"+field_key).val(marker.getPosition().lng());
    });

}

/*********************************************
 * Geo Locate Map
 *******************************************/
jQuery(document).ready(function (e) {

    //Geo Locate
    jQuery(document).on("click", ".geolocate", function () {
		var _this	= jQuery(this);
        var _isfetch	= _this.data('key');
        jQuery('#location-pickr-map').gmap3({
            getgeoloc: {
                callback: function (latLng) {
                    if (latLng) {
                        var geocoder = new google.maps.Geocoder();
                        geocoder.geocode({"latLng": latLng}, function (data, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (data[0]) {
                                    jQuery('#location-pickr-map').gmap3({
                                        marker: {
                                            latLng: latLng
                                        },
                                        map: {
                                            options: {
                                                zoom: 11
                                            }
                                        }
                                    });
									
									if( _isfetch != null && _isfetch === 'fetch' ){
										var place = data[0];
									}

                                    jQuery("#location-address").val(data[0].formatted_address);
                                    jQuery("#location-latitude").val(latLng.lat());
                                    jQuery("#location-longitude").val(latLng.lng());
                                }
                            }
                        });
                    }
                }
            }
        });
        return false;
    });
});