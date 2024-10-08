import { fn } from '@storybook/test';

import { Button } from './Button';
import { background } from 'storybook/internal/theming';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: fn(),
    label: 'Hello', // moved to component level to cascade to all
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
  },
  parameters: {
      backgrounds: {
          default: 'dark'
      }
  }
};

export const Secondary = {
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'looooong',
  },
};

export const Red = {
  args: {
    backgroundColor: 'red',
  },
  argTypes: {
    backgroundColor: {
        control: 'inline-radio',
        options: ['red', 'green', 'blue']
    }
  }
};
