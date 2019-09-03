const mergeSelectors = (originalStyles, overrideStyles) => {
  const selectors = Object.keys(originalStyles).filter(key => key in overrideStyles);
  const mergedSelectors = {};

  for (let i = 0; i < selectors.length; i += 1) {
    const selector = selectors[i];
    mergedSelectors[selector] = [originalStyles[selector], overrideStyles[selector]].join(' ').trim();
  }
  return { ...originalStyles, ...overrideStyles, ...mergedSelectors };
};

const mergeModifiersArray = (modifierStyles) => {
  let accumulator = modifierStyles[0];

  for (let i = 1; i < modifierStyles.length; i += 1) {
    accumulator = mergeSelectors(accumulator, modifierStyles[i]);
  }

  return accumulator;
};

const mergeStyles = (originalStyles, modifierStyles) => {
  if (!modifierStyles) {
    return originalStyles;
  }

  const overrideStyles = modifierStyles instanceof Array
    ? mergeModifiersArray(modifierStyles) : modifierStyles;

  return { ...originalStyles, ...mergeSelectors(originalStyles, overrideStyles) };
};

export default mergeStyles;
