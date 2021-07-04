const background = ['#f3fcff', '#f0f7ff', '#ddfbfa', '#f0fafb'];

const primary = ['#13e2dd', '#04d6e0', '#58e2ff', '#36c8f5', '#00baf4', '#03b6ce', '#f66436', '#e04747'];

const grayscale = [
  '#ffffff',
  '#dfdfdf',
  '#c1c1c1',
  '#a5a5a5',
  '#8b8b8b',
  '#6f6f6f',
  '#555555',
  '#3d3d3d',
  '#242424',
  '#0d0d0d',
];

const theme = {
  palette: {
    background,
    primary,
    grayscale,
    emptyImage: '#0292a5',
  },
  size: {
    mobile: '(max-width: 600px)',
    tablet: '(max-width: 900px)',
    laptop: '(max-width: 1200px)',
    desktop: '(min-width: 1800px)',
  },
};

export default theme;
