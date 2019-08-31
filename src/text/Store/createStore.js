import { createContext } from 'react';
import getTextStore from './getTextStore';
import getWithText from './getWithText';

const create = (settings = {}) => {
  const { hocs = {} } = settings;

  const { Provider, Consumer } = createContext({});

  const TextStore = getTextStore({ Provider });

  const withText = getWithText({ Consumer, hocs });

  return { TextStore, withText };
};

export default create;
