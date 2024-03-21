import { Text } from '..'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> =  {
  tags: ['autodocs'],
  component: Text,
  render: (p) => <Text {...p}>hola</Text>,
  
}

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    variant: 'displayLarge'
  }
};

export const Medium: Story = {
  args: {
    variant: 'displayMedium'
  }
};



export default meta;
