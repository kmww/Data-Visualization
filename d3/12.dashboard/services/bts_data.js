export const getBtsWriteRatioData = async () => {
  const csv = await d3.csv('./data/BTS작사비율.csv');
  return csv.map((d) => {
    d.value = parseFloat(d.value);
    return d;
  });
};

export const getBtsComposeRatioData = async () => {
  const csv = await d3.csv('./data/BTS작곡비율.csv');
  return csv.map((d) => {
    d.value = parseFloat(d.value);
    return d;
  });
};
