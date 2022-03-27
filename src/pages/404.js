import { useEffect } from "react";
import constants from "@utils/constants";

const redirectList = constants.redirects;

const NotFound = () => {
  useEffect(() => {
    const key = document.location.pathname.substring(1);
    const redirect = redirectList[key];
    if (redirect) {
      document.location.replace(redirect);
    }
  }, []);
  return (
    <>
      <div>hello</div>
    </>
  );
};

export default NotFound;
