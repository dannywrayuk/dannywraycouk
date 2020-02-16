import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-async';
import ReactMarkdown from 'react-markdown/with-html';
import MathJax from 'react-mathjax';

import RemarkMathPlugin from 'remark-math';

function MarkdownRender(props) {
  const newProps = {
    ...props,
    plugins: [RemarkMathPlugin],
    renderers: {
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      ...props.renderers,
      math: (p) => <MathJax.Node formula={p.value} />,
      inlineMath: (p) => <MathJax.Node inline formula={p.value} />,
    },
  };
  return (
    <MathJax.Provider input="tex">
      <ReactMarkdown {...newProps} />
    </MathJax.Provider>
  );
}


const FetchMarkdown = ({ location, containerName }) => {
  const loadData = () => fetch(location).then(response => response.text());
  return (
    <Async promiseFn={loadData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return 'Loading...';
        if (data) {
          return (
            <MarkdownRender
              className={containerName}
              source={data}
              escapeHtml={false}
            />
          );
        }
        return `Something went wrong: ${err.message}`;
      }}
    </Async>
  );
};

FetchMarkdown.propTypes = {
  location: PropTypes.string.isRequired,
  containerName: PropTypes.string.isRequired,
};

export default FetchMarkdown;
