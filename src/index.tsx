import styled from "@emotion/styled";
import PropTypes from 'prop-types';

type TextVariants = 
  'displayLarge' |
  'displayMedium' |
  'displaySmall'

type TextProps = {
  variant?: TextVariants
}

const fontSize: Record<TextVariants, string> = {
  displayLarge: '57px',
  displayMedium: '45px',
  displaySmall: '36px'
} 

// styled component
export const Text = styled.p<TextProps>`

  font-size: ${p => p.variant ? fontSize[p.variant] : fontSize.displaySmall}
`;

Text.defaultProps = {
  variant: 'displaySmall'
}