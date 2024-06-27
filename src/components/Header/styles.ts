import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 82px;
  height: 37px;
`

export const Logo = styled.Image`
  width: 36px;
  height: 31px;
`

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY[100]};
`