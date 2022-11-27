import React,{Suspense} from 'react'

import { Container, Row, Col } from "react-bootstrap";

import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei';


import Ironman from "../3d Models/Ironman";
import Box from "../box/Box"
//import Ironman2 from "../3d Models/Ironman2";
import Content from'../content/Content'
import './Card.css'



function Cards ({setAvatar}) {
    const description = 'You have unlock 3 Agents'
  return (
    <div className='card'>
        <Content description={description} title='Agents' />
      <div className='cardShow'>
        <Container>
          <Row >
            {Array.from({ length: 6 }).map((_, idx) => (
               <>
              <Col sm={12} lg={4} className='canvas1'>
                  <Canvas onClick={()=>setAvatar(1)} >
                    <OrbitControls enableZoom={false} />
                      <ambientLight intensity={4} />
                      <directionalLight position={[7, 3, 3]} intensity={4} />
                      <Suspense fallback={null}></Suspense>
                      <Ironman />
                   </Canvas>
                </Col>
                <Col sm={12}  lg={4} className='canvas1'>
                <Canvas onClick={()=>setAvatar(2)} >
                    <OrbitControls enableZoom={false} />
                      <ambientLight intensity={4} />
                      <directionalLight position={[7, 3, 3]} intensity={4} />
                      <Suspense fallback={null}></Suspense>
                      <Box/>
                  </Canvas>
                </Col>
             </>
                  //<Col className='column'>
                    // <Card className='image'>
                     //     <Card.Img variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-1c044c5704cdd2434fe97c3a46d6ef60-lq" />
                    //</Card>
                   //</Col>
                ))}
            </Row>
        </Container>
           
        </div>
    </div>
  )
}

export default Cards
