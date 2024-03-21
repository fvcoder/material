import styled from "@emotion/styled";

export type TextVariants =
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "headlineLarge"
  | "headlineMedium"
  | "headlineSmall"
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall";

type TextProps = {
  variant?: TextVariants;
};

interface textStyle {
  size: string;
  lineHeight: string;
  letterSpacing: string;
}

const fontVariants: Record<TextVariants, textStyle> = {
  displayLarge: {
    size: "57px",
    lineHeight: "64px",
    letterSpacing: "-0.25px",
  },
  displayMedium: {
    size: "45px",
    lineHeight: "52px",
    letterSpacing: "0px",
  },
  displaySmall: {
    size: "36px",
    lineHeight: "44px",
    letterSpacing: "0px",
  },
  headlineLarge: {
    size: "32px",
    lineHeight: "40px",
    letterSpacing: "0px",
  },
  headlineMedium: {
    size: "28px",
    lineHeight: "36px",
    letterSpacing: "0px",
  },
  headlineSmall: {
    size: "24px",
    lineHeight: "32px",
    letterSpacing: "0px",
  },
  titleLarge: {
    size: "22px",
    lineHeight: "28px",
    letterSpacing: "0",
  },
  titleMedium: {
    size: "16px",
    lineHeight: "24px",
    letterSpacing: "0.15px",
  },
  titleSmall: {
    size: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
  labelLarge: {
    size: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
  labelMedium: {
    size: "12px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
  },
  labelSmall: {
    size: "11px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
  },
  bodyLarge: {
    size: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
  bodyMedium: {
    size: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
  },
  bodySmall: {
    size: "12px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
};

export const Text = styled.p<TextProps>`
  font-family: Roboto, system-ui, sans-serif;
  font-size: ${(p) =>
    p.variant ? fontVariants[p.variant].size : fontVariants.displaySmall.size};
  line-height: ${(p) =>
    p.variant
      ? fontVariants[p.variant].lineHeight
      : fontVariants.displaySmall.lineHeight};
  letter-spacing: ${(p) =>
    p.variant
      ? fontVariants[p.variant].letterSpacing
      : fontVariants.displaySmall.letterSpacing};
`;

Text.defaultProps = {
  variant: "bodyMedium",
};
