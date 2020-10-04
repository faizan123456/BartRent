import React from "react";
import { mountWrap } from "../../test/utils";
import { Provider } from "react-redux";
import store from "../../store/store";
import UploadForm from "../UploadForm";

const initialState = {
  imageFile: []
};

describe("Upload Form", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mountWrap(
      <Provider store={store}>
        <UploadForm />
      </Provider>,
      initialState
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders without errors", () => {
    expect(wrapper.find("div.app-container")).toHaveLength(1);
  });

  it("initally displays a placeholder", () => {
    expect(wrapper.find("div.placeholder-preview")).toHaveLength(1);
  });

  it("displays a Submit and Clear buttons", () => {
    expect(wrapper.find("button.submit")).toHaveLength(1);
    expect(wrapper.find("button.clear")).toHaveLength(1);
  });

  it("displays an error if Submit was clicked without selecting a file", () => {
    wrapper.find("form").simulate("submit");
    expect(wrapper.find("div.error")).toHaveLength(1);
  });
});
