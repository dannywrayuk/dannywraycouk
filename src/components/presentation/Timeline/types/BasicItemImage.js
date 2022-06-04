import { Link } from "@components/core";
import { BasicBottom, BasicItem, Image, ImageWrapper } from "./common";

export const BasicItemImage = ({ data }) => {
  if (!data.image)
    throw new Error("'image' timeline type requires image property");
  return (
    <Link href={data.route} underline="none">
      <BasicItem>
        <ImageWrapper>
          <Image src={data.image} />
        </ImageWrapper>
        <BasicBottom data={data} />
      </BasicItem>
    </Link>
  );
};
