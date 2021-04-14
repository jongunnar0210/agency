//import logo from './logo.svg';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Service from './Components/Service';

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
      <Container className="services">
        <h2>SERVICES</h2>
        <p className='sub-header'>Lorem ipsum dolor sit amet consectetur.</p>
        <section>
          <Row>
            <Service name='E-Commerce'
              text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' />
            <Service name='Responsive Design'
              text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' />
            <Service name='Web Security'
              text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' />
          </Row>
          {/* <span>E-Commerce</span>
          <span>Responsive Design</span>
          <span>Web Security</span> */}
        </section>
      </Container>
    </div>
  );
}

export default App;
