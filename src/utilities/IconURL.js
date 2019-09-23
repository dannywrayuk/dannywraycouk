import AppConstants from './AppConstants';

const IconURL = (icon, variant) => {
  const name = `${variant}/${icon}`;
  return AppConstants.IconURL.replace('$var$', name);
};

export default IconURL;
