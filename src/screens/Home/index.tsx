import { Header } from "@components/Header";
import { Container } from "./styles";
import { ReceitptsResult } from "@components/ReceiptsResult";

export function Home() {
  return (
    <Container>
      <Header />
      <ReceitptsResult />
    </Container>
  )
}