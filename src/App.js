//import logo from './logo.svg';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div className="nav-bar">I'm a NavBar</div>

      {/* Welcome div */}
      <Container fluid className="welcome">
        <Row className='align-items-center'>
          <Col>
            <h3>Welcome To Our Studio!</h3>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </Col>
        </Row>
      </Container>

      {/* Services */}
      <div className="services">
        <h2>SERVICES</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <span>E-Commerce</span>
        <span>Responsive Design</span>
        <span>Web Security</span>
      </div>
    </div>
  );
}

export default App;
