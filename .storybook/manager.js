// .storybook/manager.js
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light', // or 'dark' for dark mode
  brandTitle: 'Customized Storybook Manager',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
  
  // Color palette
  colorPrimary: '#ff4785', // Primary color
  colorSecondary: '#1EA7FD', // Secondary color

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: '#ECECEC',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#1EA7FD',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#ECECEC',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand Image (logo)
//   brandImage: 'url here',
});

addons.setConfig({
  theme: customTheme,
});
