import PropTypes from 'prop-types';

export default (originalComponent) => {
  const TemplateText = ({ transformers = [], ...props }) => originalComponent({
    ...props,
    transformers: [
      'template',
      ...transformers,
    ],
  });

  TemplateText.propTypes = {
    transformers: PropTypes.arrayOf(PropTypes.string),
  };
  return TemplateText;
};
