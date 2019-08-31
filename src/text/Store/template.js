export default ({ value, localParams }) => {
  const localParamsInValue = value.match(/\{\{\S+?\}\}/g) || [];

  const matchingParams = Object
    .keys(localParams)
    .filter(key => value.match(`{{${key}}}`));

  if (localParamsInValue.length !== matchingParams.length) {
    throw new Error(`Text contains raw template string: ${value}`);
  }

  return Object
    .entries(localParams)
    .reduce((acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue), value);
};
