import _get from 'lodash.get';

const getProcessors = (map, ids, type) => ids.map((id) => {
  if (!map[id]) {
    throw new ReferenceError(`no ${type} with id "${id}" found`);
  }
  return map[id];
});

const concatPath = (...paths) => paths.filter(Boolean).join('.');

const checkValue = (path, value) => {
  if (value === undefined) {
    throw new ReferenceError(`no data exists at path "${path}"`);
  }
};

const getPathValue = ({ finalPath, storeValue }) => (finalPath === '' ? storeValue : _get(storeValue, finalPath));

const applyResolversToPath = ({
  resolvers,
  storeParams,
  localParams,
  storeValue,
  path,
}) => resolvers
  .reduce((pathSegment, resolver) => resolver({
    storeParams,
    localParams,
    storeValue,
    originalPath: path,
    path: pathSegment,
  }), path);

const applyTransformersToValue = ({
  transformers,
  storeParams,
  localParams,
  storeValue,
  path,
  finalPath,
  pathValue,
}) => transformers
  .reduce((currentValue, transformer) => transformer({
    storeParams,
    localParams,
    storeValue,
    originalPath: path,
    path: finalPath,
    value: currentValue,
  }), pathValue);

const extractText = ({
  storeParams,
  localParams,
  storeValue,
  basePath,
  localPath,
  resolverMap,
  transformerMap,
  resolverIds,
  transformerIds,
}) => {
  const path = concatPath(basePath, localPath);
  const resolvers = getProcessors(resolverMap, resolverIds, 'resolver');
  const transformers = getProcessors(transformerMap, transformerIds, 'transformer');

  const finalPath = applyResolversToPath({
    resolvers,
    storeParams,
    localParams,
    storeValue,
    path,
  });

  const pathValue = getPathValue({ finalPath, storeValue });

  checkValue(finalPath, pathValue);

  return applyTransformersToValue({
    transformers,
    storeParams,
    localParams,
    storeValue,
    path,
    finalPath,
    pathValue,
  });
};

export default extractText;
