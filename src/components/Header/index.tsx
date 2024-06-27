import { ForkKnife } from "phosphor-react-native";
import { Container, LogoContainer, UserImage } from "./styles";
import { Logo } from "@components/Logo";

import userImage from '@assets/user-image.jpeg';
import { OpenIcon } from "@components/OpenIcon";

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <ForkKnife weight="bold" size={37} />
        <Logo />
      </LogoContainer>
      <UserImage source={userImage} />
    </Container>
  )
}