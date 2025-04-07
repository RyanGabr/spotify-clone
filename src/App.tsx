import { Aside } from "./components/aside";
import { Body } from "./components/body";
import { Container } from "./components/container";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Root } from "./components/root";
import "./style.css";

export function App() {
  return <div className="bgimage w-full">
    <Root>
      <Header />
      <Container>
        <Aside />
        <Body />
      </Container>
      <Footer />
    </Root>
  </div>;
}
