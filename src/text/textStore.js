import createStore from './Store/createStore';
import withMarkdown from './Store/withMarkdown';
import withTemplate from './Store/withTemplate';
import withJsx from './Store/withJsx';

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
