import styled from "styled-components";
import Navbar from "./components/Navbar";
const Container = styled.div`
  height: 100v;
`;

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
