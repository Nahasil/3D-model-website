import React from 'react'
import './content.css'
function Content(props) {
  return (
    <div className='content'>
      {props.isLargeHeader? <h1 className='largeHeader'><b>{props.title}</b></h1>:<h6 className={props.isColor?'colorHeader':'header'}>{props.title}</h6>}
         
      <p className={props.isColor? 'colorDescription':'description'}>{props.description}</p>
    </div>
  )
}

export default Content
