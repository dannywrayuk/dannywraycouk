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

const FetchMarkdown = ({
  location, containerName, auxData, styleData,
}) => {
  const dataLinker = (data) => {
    let modifiedData = data;
    let match = 'nan';
    const reg = /\[(data|style):([a-zA-Z\d_]+)\]/gm;
    while (match) {
      match = reg.exec(modifiedData) || 0;
      if (match !== 0) {
        if (match[1] === 'data') {
          if (auxData[match[2]] !== undefined) {
            modifiedData = modifiedData.replace(new RegExp(escapeRegExp(match[0]), 'g'), auxData[match[2]]);
          } else {
            modifiedData = modifiedData.replace(new RegExp(escapeRegExp(match[0]), 'g'), '');
          }
        }
        if (match[1] === 'style') {
          if (styleData[match[2]] !== undefined) {
            modifiedData = modifiedData.replace(new RegExp(escapeRegExp(match[0]), 'g'), styleData[match[2]]);
          } else {
            modifiedData = modifiedData.replace(new RegExp(escapeRegExp(match[0]), 'g'), '');
          }
        }
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
  styleData: PropTypes.object,
};

FetchMarkdown.defaultProps = {
  auxData: {},
  styleData: {},
};

export default FetchMarkdown;
