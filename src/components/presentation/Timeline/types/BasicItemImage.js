import { BasicBottom, BasicItem, Image, ImageWrapper } from "./common";

export const BasicItemImage = ({ data }) => {
  if (!data.image)
    throw new Error("'image' timeline type requires image property");
  return (
    <BasicItem>
      <ImageWrapper>
        <Image src={data.image} />
      </ImageWrapper>
      <BasicBottom data={data} />
    </BasicItem>
  );
};
