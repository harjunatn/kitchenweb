import styled from "styled-components";

import { colors, typography } from "settings";

const typeColors = {
  blue: {
    background: colors.bubble,
    color: colors.space_blue,
    border: colors.tie_dye,
  },
  green: {
    background: colors.light_jade,
    color: colors.spinach,
    border: colors.slight_jade,
  },
  grey: {
    background: colors.light_smoke,
    color: colors.dark_smoke,
    border: colors.light_grey,
  },
  red: {
    background: colors.sakura,
    color: colors.red_wine,
    border: colors.blush,
  },
  yellow: {
    background: colors.banana,
    color: colors.coin,
    border: colors.blonde,
  },
};

export const StyledAlert = styled.div`
  background: ${({ color }) => typeColors[color].background};
  border: ${({ bordered, color }) =>
    bordered ? `1px solid ${typeColors[color].border}` : "none"};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${({ color }) => typeColors[color].color};
  display: flex;
  font-size: ${typography.font_size.base};
  font-weight: ${typography.font_weight.normal};
  justify-content: space-between;
  line-height: ${typography.line_height};
  padding: 12px 16px;
  width: 100%;

  ul {
    padding-left: 16px;
    margin: 0;
  }

  a {
    color: ${({ color }) => typeColors[color].color};
    text-decoration: underline;
  }
`;

export const AlertIcon = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 17px;
`;

export const AlertText = styled.div`
  display: inline-block;
  padding-left: 10px;
  vertical-align: top;
  width: 100%;
`;

export const AlertClose = styled.button`
  background: transparent;
  border: none;
  color: ${({ color }) => typeColors[color].color};
  display: inline-block;
  line-height: ${typography.line_height};
  font-size: ${typography.font_size.semi};
  height: fit-content;
  margin-left: 12px;
  margin-top: 2px;
  padding: 0;
  opacity: 0.32;

  &:focus {
    outline: none;
  }
`;
