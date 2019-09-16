import createStore from './Store/createStore';
import withJsx from './Store/withJsx';
import withMarkdown from './Store/withMarkdown';
import withTemplate from './Store/withTemplate';

const {
  Text,
  withText,
  TextStore,
} = createStore({
  hocs: {
    TemplateText: withTemplate,
    MarkDownText: withMarkdown,
    JsxText: withJsx,
  },
});

export {
  Text,
  withText,
  TextStore,
};
