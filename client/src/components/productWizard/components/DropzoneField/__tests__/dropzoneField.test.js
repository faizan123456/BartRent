import React from "react";
import { mountWrap } from "../../../test/utils";
import { createFile } from "../__mocks__/dropzoneField.mocks.js";
import DropzoneField from "../dropzoneField";

const handleOnDrop = jest.fn();
const onChange = jest.fn();
const initialProps = {
  handleOnDrop,
  input: { onChange },
  imagefile: [],
  meta: { error: "", touched: false }
};

const fakeImage = createFile("cats.gif", 1234, "image/gif");

const fakeImageFile = {
  file: fakeImage,
  name: fakeImage.name,
  preview: URL.createObjectURL(fakeImage),
  size: fakeImage.size
};

const wrapper = mountWrap(<DropzoneField {...initialProps} />);
describe("Upload Form", () => {
  afterAll(() => {
    wrapper.unmount();
  });

  it("renders without errors", () => {
    expect(wrapper.find(".preview-container")).toHaveLength(1);
  });

  it("renders a preview image with details", () => {
    const { name, preview, size } = fakeImageFile;
    const sizeText = (size / 1024000).toFixed(2);
    wrapper.setProps({ imagefile: [fakeImageFile] });

    const details = wrapper.find("div.details").text();
    expect(wrapper.find("img").prop("src")).toEqual(preview);
    expect(details).toContain(name);
    expect(details).toContain(sizeText);
  });
});
