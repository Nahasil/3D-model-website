import React, { useState } from "react";

import { Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Main from "./components/main/Main";
import Card from "./components/Card/Card"
import './app.css'


function App () {
  const [avatar, setAvatar]=useState('')
  console.log(avatar)
  return (
    <Container fluid={true} className='p-0'>
      <Row noGutters> 
         <Col sm={12} md={6} lg={7}>
          <Main avatar={ avatar} />
         </Col>
         <Col  sm={12} md={6} lg={5}>
          <Card setAvatar={ setAvatar} />
         </Col>
      </Row>
    </Container>
    
  );
}

export default App;
