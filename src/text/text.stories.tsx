import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  // tags: ['autodocs'],
  component: Text,
  render: (p) => <Text {...p} />,
  args: {
    children: "Text Sample",
  },
  argTypes: {
    variant: {
      options: [
        "displayLarge",
        "displayMedium",
        "displaySmall",
        "headlineLarge",
        "headlineMedium",
        "headlineSmall",
        "titleLarge",
        "titleMedium",
        "titleSmall",
        "labelLarge",
        "labelMedium",
        "labelSmall",
        "bodyLarge",
        "bodyMedium",
        "bodySmall",
      ],
      control: { type: "select" },
    },
  },
};

type Story = StoryObj<typeof Text>;

export const variant: Story = {
  args: {
    variant: "bodyMedium",
  },
};

export default meta;
