import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";

const Image = ({ image, classes, width, height }) => {
  const {
    alternativeText,
    width: imageWidth,
    height: imageHeight,
  } = image.data.attributes;

  return (
    <NextImage
      className={classes || ""}
      width={`${width || imageWidth}px`}
      height={`${height || imageHeight}px`}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
