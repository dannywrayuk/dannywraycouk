import { Link } from "@components/core";
import { BasicBottom, BasicItemWrapper, Image, ImageWrapper } from "./common";

export const BasicItemImage = ({ data }) => {
  if (!data.image)
    throw new Error("'image' timeline type requires image property");
  return (
    <BasicItemWrapper>
      <Link href={data.route} underline="none">
        <ImageWrapper>
          <Image src={data.image} />
        </ImageWrapper>
      </Link>
      <BasicBottom data={data} />
    </BasicItemWrapper>
  );
};
