const styledConfig = {
  shouldForwardProp: (prop) => allowedProps.includes(prop),
};

const allowedProps = ["children"];

export default styledConfig;
