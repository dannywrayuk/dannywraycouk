import PropTypes from 'prop-types';
import extractText from './extractText';


export default ({
  storeParams,
  storeValue,
  basePath,
  resolverMap,
  transformerMap,
}) => {
  const Text = (props = {}) => {
    const {
      path: localPath = '',
      params: localParams = {},
      resolvers: resolverIds = [],
      transfomers: transformerIds = [],
    } = props;
    return extractText({
      storeParams,
      localParams,
      storeValue,
      basePath,
      localPath,
      resolverMap,
      transformerMap,
      resolverIds,
      transformerIds,
    });
  };

  Text.propTypes = {
    path: PropTypes.string,
    params: PropTypes.shape({}),
    resolvers: PropTypes.arrayOf(PropTypes.string),
    transfomers: PropTypes.arrayOf(PropTypes.string),
  };

  return Text;
};
