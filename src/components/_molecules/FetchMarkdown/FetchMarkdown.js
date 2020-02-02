import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-async';
import ReactMarkdown from 'react-markdown/with-html';

const FetchMarkdown = ({ location, containerName }) => {
  const loadData = () => fetch(location).then(response => response.text());
  return (
    <Async promiseFn={loadData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return 'Loading...';
        if (data) {
          return (
            <ReactMarkdown
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
