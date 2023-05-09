import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col md={6}>
            <Home />
          </Col>
          <Col md={6}>
            <p>This is the second column.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

