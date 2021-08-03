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
  '#c4c4c4',
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
  font: {
    dp1: `
      line-height: 1.22;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 36px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp1_eng: `
      line-height: 1.17;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 36px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
      `,
    dp2: `
      line-height: 1.25;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 40px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp2_eng: `
      line-height: 1.2;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 40px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp3_eng: `
      line-height: 1.22;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 46px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp4: `
      line-height: 1.42;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 48px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h1: `
      line-height: 1.36;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 28px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h1_eng: `
      line-height: 1.21;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 28px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h2: `
      line-height: 1.31;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 32px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h2_eng: `
      line-height: 1.19;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 32px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead1: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 12px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead1_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 12px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead2: `
      line-height: 1.43;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 14px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead2_eng: `
      line-height: 1.29;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 14px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead3: `
      line-height: 1.38;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 16px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead3_eng: `
      line-height: 1.25;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 16px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead4: `
      line-height: 1.33;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 18px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead4_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 18px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead5: `
      line-height: 1.33;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 24px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead5_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 24px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    body1: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 12px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body1_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 12px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body2: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 14px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body2_eng: `
      line-height: 1.29;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 14px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body3: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 16px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body3_eng: `
      line-height: 1.25;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 16px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body4: `
      line-height: 1.56;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 18px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body4_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 18px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
  },
};

export default theme;
