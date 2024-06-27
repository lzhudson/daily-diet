import styled from "styled-components/native";
import { OpenIcon as OpenIconBase } from "@components/OpenIcon";
import { css } from "styled-components";

export const Container = styled.View`
  width: 100%;
  margin-top: 70px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN.LIGHT};
  border-radius: 8px;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const ResultPercent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    color: ${theme.COLORS.GRAY[100]};
  `}
  font-weight: 600;
  margin-bottom: 8px;
`
export const OpenIconContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ResultText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY[200]};
  `}
`