import { Text, View } from "react-native";
import { Container, OpenIconContainer, ResultPercent, ResultText } from "./styles";
import { OpenIcon } from "@components/OpenIcon";

export function ReceitptsResult() {
  return (
    <Container>
      <OpenIconContainer>
        <OpenIcon />
      </OpenIconContainer>
      <ResultPercent>90,86%</ResultPercent>
      <ResultText>
        das refeições dentro da dieta
      </ResultText>
    </Container>
  )
}