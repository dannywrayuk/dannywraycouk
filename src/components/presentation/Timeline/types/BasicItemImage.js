import { Link, Image } from "@components/core";
import { BasicBottom, BasicItemWrapper, ImageWrapper } from "./common";

export const BasicItemImage = ({ data }) => {
  if (!data.image)
    throw new Error("'image' timeline type requires image property");
  return (
    <BasicItemWrapper>
      <Link href={data.route} variant="noStyle">
        <ImageWrapper>
          <Image
            src={data.image}
            layout="fill"
            sizes={{ md: "80w", max: "700px" }}
          />
        </ImageWrapper>
      </Link>
      <BasicBottom data={data} />
    </BasicItemWrapper>
  );
};
