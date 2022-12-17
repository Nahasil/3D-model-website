import React,{Suspense} from 'react'
import {useControls} from 'leva'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useHelper } from '@react-three/drei';
import * as THREE from 'three'

//import Content from '../content/Content'
//import Sidebar from "../sidebar/Sidebar";

//import Box from '../box/Box'
//import Ironman from "../3d Models/Ironman";
import Character from "../3d Models/Character"
//import Windcharacter from "../3d Models/Windcharacter"

 
import { Container, Row, Col } from 'react-bootstrap';
import './main.css'
import { useRef } from 'react';
import {  DirectionalLight, DirectionalLightHelper, RectAreaLight } from 'three';
//import { RectAreaLight } from 'three';

//const LightScene=() =>  <Plane scale={10} rotation-x={-Math.PI/2} position-y={-2} />
 

function Main ({avatar}) {
  //const description='Your agent represents your identity in this platform';
  //const title='Select your avatar'
  //const description1='Iron man is 2008 American superhero film based on the Marvel Comics character of the same name.'
  //const description2='After being held captive in an afghan cave,billiionare engineer Tony Stark Creates a unique weaponized suit of armor to fight evil.After being held captive.'

  
  //const buttonStyle={
  //  backgroundColor:' rgb(15 14 14 / 49%)',
  //  color: 'rgb(150 143 143)',
  //  fontSize: '12px',
  //  width: '62px'
  //}



//===================DirectionalLight Helper function=================--
  //const directionalLightRef=useRef<DirectionalLight>(!null)
  //useHelper(directionalLightRef,DirectionalLightHelper,1,'red');

  
  
  const { intensity, x,y,z }=useControls({
    instensity: {value: -3,min: -5,max: 3},
    x:{value:0,min:-3,max:10},
    y: { value: 0, min: -3, max: 10 },
    z:{value:0,min:-3,max:10},
  })

  //===================  SPOTLIGHT USECONTROL============\\

  const { distance,angle }=useControls({
    distance: { value: 5, min: 0, max: 30 },
    angle:{value:Math.PI/6,min:0.1,max:6}
})
     
  //--------------------***** END  *****---------------------


  
//======================== RectAreaLight =================\\


  const { width,height,color}=useControls({
    width: { value: 5, min: 1, max: 10 },
    height: { value: Math.PI/6, min: 0.1, max: 1 },
    color:'#fff'
})


  return (
    <Container fluid>
      <Row>
        <Col className='column' sm={12} xl={6}>
          {/*<Sidebar />*/}
          <div className='avatar'>
            {/*<div >
             <Content description={description} title={title}/>
            </div>*/}

            <Canvas className='canvas'  shadows>
              <OrbitControls enableZoom={false}/>
              <ambientLight args={['#fff',.1]} intensity={intensity}/>
              {/*<hemisphereLight args={['#fff','#333',intensity]} />*/}
              {/*<directionalLight  position={[0, 0, 4]} args={['#fff000',.5]} />*/}
              {/*<pointLight  position={[x, y, z]} args={['#fff000',50]} />*/}
              <spotLight position={[-2, -2, 4]} args={['#462ca6', 2]} />
              <spotLight position={[2, -2, 3]} args={['#cdb217', 2]}/>
              <spotLight position={[0,0,-2]} args={[color,10]} intensity={intensity} distance={distance} angle={angle} />
              {/*<RectAreaLight  position={[x,3,0]} args={[color,intensity,width,height]} />*/}
              <Suspense fallback={null}>
                <Character />
                {/*{(avatar===1)? <Ironman />:<Box />}*/}
                <Environment background>
                  <mesh>
                    <sphereGeometry args={[50,100,100]}/>
                     <meshBasicMaterial color={'#002'} side={THREE.BackSide}/>
                  </mesh>
                </Environment>
              </Suspense>
              
              {/*<Character />*/}
            </Canvas>
          </div>
        </Col>
        {/*<Col  className='mainTitle' sm={12} xl={6}>
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
          

        </Col>*/}
        </Row>
    </Container>
  )
}

export default Main
