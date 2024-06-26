const formatNumber = (number: number): string =>
  new Intl.NumberFormat('en-US').format(number);

export default formatNumber;
