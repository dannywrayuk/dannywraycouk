import React, { Fragment } from 'react';

export default ({ value, localParams }) => {
  const paramRegex = '{{.*?}}';
  const parts = value.split(new RegExp(`(${paramRegex})`, 'g')).filter(part => !!part);

  if (parts.length === 1) {
    return value;
  }
  return parts.map((part) => {
    if (new RegExp(`^${paramRegex}$`).test(part)) {
      const param = part.replace(/{{|}}/g, '');

      if (!localParams[param]) {
        throw new Error(`parameter ${param} has not been provided for template string ${value}`);
      }
      return React.cloneElement(localParams[param], { key: param });
    }
    return (<Fragment key={part}>{part}</Fragment>);
  });
};
