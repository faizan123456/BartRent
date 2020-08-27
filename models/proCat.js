const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProCatSchema = new Schema({
    name: {
        type: String
    }
    
})

const productCat = mongoose.model("ProCat", ProCatSchema);
exports.ProCatSchema = ProCatSchema;
exports.productCat = productCat;

async function createCategorie(name){
    const cat = new productCat({
        name
    })
    const result=await cat.save();
    console.log(result);
}
 //createCategorie('Houses and Plottes');
