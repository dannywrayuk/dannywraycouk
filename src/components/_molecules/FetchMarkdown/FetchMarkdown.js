import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-async';

import katex from 'rehype-katex';
import stringify from 'rehype-stringify';
import math from 'remark-math';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import unified from 'unified';

const escapeRegExp = (str) => str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');

const FetchMarkdown = ({ location, containerName, auxData }) => {
  const dataLinker = (data) => {
    let modifiedData = data;
    let match = 'nan';
    const reg = /\[data:([a-zA-Z\d_]+)\]/gm;
    while (match) {
      match = reg.exec(modifiedData) || 0;
      if (auxData[match[1]] !== undefined) {
        modifiedData = modifiedData.replace(new RegExp(escapeRegExp(match[0]), 'g'), auxData[match[1]]);
      } else if (match) {
        modifiedData = modifiedData.replace(new RegExp(escapeRegExp(match[0]), 'g'), '');
      }
    }
    return modifiedData;
  };
  const parseText = (data) => {
    let test;
    unified()
      .use(markdown)
      .use(math)
      .use(remark2rehype, { allowDangerousHTML: true })
      .use(katex)
      .use(stringify, { allowDangerousHTML: true })
      .process(data, (err, file) => { test = String(file); });
    return test;
  };
  const fetchData = () => fetch(location).then(response => response.text());
  const loadData = async () => parseText(dataLinker(await fetchData()));

  return (
    <Async promiseFn={loadData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return 'Loading...';
        if (data) {
          return (
            // eslint-disable-next-line react/no-danger
            <div className={containerName} dangerouslySetInnerHTML={{ __html: data }} />
          );
        }
        return `Something went wrong: ${err}`;
      }}
    </Async>
  );
};

FetchMarkdown.propTypes = {
  location: PropTypes.string.isRequired,
  containerName: PropTypes.string.isRequired,
  auxData: PropTypes.object,
};

FetchMarkdown.defaultProps = {
  auxData: {},
};

export default FetchMarkdown;
