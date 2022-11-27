import React,{Suspense} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei';

import Content from '../content/Content'
import Sidebar from "../sidebar/Sidebar";

import Box from '../box/Box'
import Ironman from "../3d Models/Ironman";

 
import { Container,Row,Col,Button} from 'react-bootstrap';
import './main.css'


function Main ({avatar}) {
  const description='Your agent represents your identity in this platform';
  const title='Select your avatar'
  const description1='Iron man is 2008 American superhero film based on the Marvel Comics character of the same name.'
  const description2='After being held captive in an afghan cave,billiionare engineer Tony Stark Creates a unique weaponized suit of armor to fight evil.After being held captive.'

  
  const buttonStyle={
    backgroundColor:' rgb(15 14 14 / 49%)',
    color: 'rgb(150 143 143)',
    fontSize: '12px',
    width: '62px'
  }
 
  return (
    <Container fluid>
      <Row>
        <Col className='column' sm={12} xl={6}>
          <Sidebar />
          <div className='avatar'>
            <div >
             <Content description={description} title={title}/>
            </div>
            <Canvas className='canvas'>
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={4} />
              <directionalLight position={[7, 3, 3]} intensity={4} />
              <Suspense fallback={null}></Suspense>
              {(avatar===2)?<Box/>:<Ironman />}
            </Canvas>
            {/*<div className='avatar-image'>
             <img src="https://qph.cf2.quoracdn.net/main-qimg-1c044c5704cdd2434fe97c3a46d6ef60-lq" alt="" />
            </div>*/}
          </div>
        </Col>
        <Col  className='mainTitle' sm={12} xl={6}>
          <Content isLargeHeader title='Iron man - classic' description={description1} />
          <Content isColor title='Perks' description='Perks are unique to each agent' />
          <div className='button'>
            <Button style={buttonStyle } variant="dark">Flight</Button>
            <Button style={buttonStyle } variant="dark">Red</Button>
            <Button style={buttonStyle } variant="dark">Stong</Button>
          </div>
          <div className='avatarDetails'>
            <Content isColor title='Agent' description={description2} />
            <button className='selectButton' variant="outline-danger">Select this agent</button>
          </div>
          

        </Col>
        </Row>
    </Container>
  )
}

export default Main
