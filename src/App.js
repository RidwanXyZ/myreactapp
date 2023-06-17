import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <>
    {/* https://sfile.mobi/lsVrqNcXIW7 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ridwan Wiki Saputro</Navbar.Brand>
          <Nav className="justify-content-end" gap={3}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Home className="text-center" />
      <Contact className="text-center" />
    </>
  );
}

export default App;