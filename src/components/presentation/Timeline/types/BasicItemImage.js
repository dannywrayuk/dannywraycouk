import { Link } from "@components/core";
import Image from "next/image";
import { BasicBottom, BasicItemWrapper, ImageWrapper } from "./common";

export const BasicItemImage = ({ data }) => {
  if (!data.image)
    throw new Error("'image' timeline type requires image property");
  return (
    <BasicItemWrapper>
      <Link href={data.route} variant="noStyle">
        <ImageWrapper>
          <Image src={data.image} layout="fill" />
        </ImageWrapper>
      </Link>
      <BasicBottom data={data} />
    </BasicItemWrapper>
  );
};
