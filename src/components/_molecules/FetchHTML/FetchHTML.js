import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-async';

const FetchHTML = ({ location, containerName }) => {
  const loadData = () => fetch(location).then(response => response.text());
  return (
    <Async promiseFn={loadData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return 'Loading...';
        if (data) {
          return (
            <div
              className={containerName}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: data }}
            />
          );
        }
        return `Something went wrong: ${err.message}`;
      }}
    </Async>
  );
};

FetchHTML.propTypes = {
  location: PropTypes.string.isRequired,
  containerName: PropTypes.string.isRequired,
};

export default FetchHTML;
