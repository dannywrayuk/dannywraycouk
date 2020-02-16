import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-async';

import katex from 'rehype-katex';
import stringify from 'rehype-stringify';
import math from 'remark-math';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import unified from 'unified';

const FetchMarkdown = ({ location, containerName }) => {
  const parseText = (data) => {
    let test;
    unified()
      .use(markdown)
      .use(math)
      .use(remark2rehype)
      .use(katex)
      .use(stringify)
      .process(data, (err, file) => { test = String(file); });
    return test;
  };
  const fetchData = () => fetch(location).then(response => response.text());
  const loadData = async () => parseText(await fetchData());

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
};

export default FetchMarkdown;
