import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import Redirections from '../../../utilities/Redirections';

const { ROUTES } = AppConstants;

const Redirector = ({ match }) => {
  let redirect = ROUTES.ERROR;
  if (match !== undefined) {
    const { url } = match;
    if (url !== undefined) {
      redirect = Redirections[url.slice(1).toLowerCase()] || ROUTES.ERROR;
    }
  }
  window.location.replace(redirect);
  return null;
};

Redirector.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Redirector;
