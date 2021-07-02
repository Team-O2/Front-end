const colorStyles = {
  'colors-bg-f-3-fcff-light-bg-1': '#f3fcff',
  'colors-bg-f-0-f-7-ff': '#f0f7ff',
  'colors-bg-f-3-ffff-light-bg-2': '#ddfbfa',
  'colors-bg-f-0-fafb': '#f0fafb',
  'colors-primary-13-e-2-dd-o-2-mint': '#13e2dd',
  'colors-primary-04-d-6-e-0': '#04d6e0',
  'colors-primary-36-c-8-f-5-o-2-blue': '#36c8f5',
  'colors-primary-58-e-2-ff': '#58e2ff',
  'colors-primary-03-b-6-ce': '#03b6ce',
  'colors-primary-00-baf-4': '#00baf4',
  'colors-primary-f-66436-red-orange': '#f66436',
  'colors-primary-e-04747-red': '#e04747',
};

const text = {
  'colors-grayscale-ff': '#ffffff',
  'colors-grayscale-df-light-gray-1': '#dfdfdf',
  'colors-grayscale-c-1-light-gray-2': '#c1c1c1',
  'colors-grayscale-a-5': '#a5a5a5',
  'colors-grayscale-8-b-gray': '#8b8b8b',
  'colors-grayscale-6-f': '#6f6f6f',
  'colors-grayscale-55': '#555555',
  'colors-grayscale-3-d-dark-gray': '#3d3d3d',
  'colors-grayscale-24': '#242424',
  'colors-grayscale-0-d-black': '#0d0d0d',
};

const size = {
  mobile: '(max-width: 600px)',
  tablet: '(max-width: 900px)',
  laptop: '(max-width: 1200px)',
  desktop: '(min-width: 1800px)',
};

const theme = {
  ...colorStyles,
  ...text,
  ...size,
};

export default theme;
