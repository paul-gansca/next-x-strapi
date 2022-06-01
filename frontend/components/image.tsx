import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";

const Image = ({ image, classes }) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      className={classes || ""}
      width={`${width}px`}
      height={`${height}px`}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
