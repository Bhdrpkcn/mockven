// ## IN PROGRESS ##

export const calculateCumulativeHeight = (element) => {
  let offset = 0;
  let prevElement = element.previousElementSibling;

  while (prevElement) {
    const { height } = prevElement.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(prevElement);

    const marginTop = parseFloat(computedStyle.marginTop);
    const marginBottom = parseFloat(computedStyle.marginBottom);
    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingBottom = parseFloat(computedStyle.paddingBottom);
    const borderTop = parseFloat(computedStyle.borderTopWidth);
    const borderBottom = parseFloat(computedStyle.borderBottomWidth);

    offset +=
      height +
      marginTop +
      marginBottom +
      paddingTop +
      paddingBottom +
      borderTop +
      borderBottom;
    prevElement = prevElement.previousElementSibling;
  }

  return offset;
};
