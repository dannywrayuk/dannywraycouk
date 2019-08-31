import PropTypes from 'prop-types';

export default (originalComponent) => {
  const MarkDownText = ({ transformers = [], ...props }) => originalComponent({
    ...props,
    transformers: [
      'template',
      'markdown',
      ...transformers,
    ],
  });

  MarkDownText.propTypes = {
    transformers: PropTypes.arrayOf(PropTypes.string),
  };
  return MarkDownText;
};
