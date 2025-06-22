import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Page not found</Heading>
          <p>
            Oops! It seems like the page you're trying to access{" "}
            <strong>does not exist</strong>. Perhaps it took a vacation, decided
            to explore the universe, or got lost somewhere between two black
            holes. 🌌
          </p>
          <p>
            But don't worry, you're not lost in space (yet). You can safely go
            back to the <a href="/">home page</a> or{" "}
            <a href="/history">history</a> — or you can stay here and pretend
            you found a secret page that only the coolest explorers can access.
            🧭✨
          </p>
          <p>
            If you think this page should exist (or if you want to chat about
            time travel and wormholes), feel free to reach out. Otherwise, use
            the menu to return to the real world.
          </p>
          <p>
            While you're here, here's a thought: "If a page doesn't exist on the
            internet, did it really exist?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
