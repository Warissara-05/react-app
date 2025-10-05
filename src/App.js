import Navbar from './features/Navbar';
import Home from './features/Home';
import Container from './features/Container';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
