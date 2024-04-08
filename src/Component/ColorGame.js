import React, { useState } from 'react'

function ColorGame() {

    const [text , setText] = useState("Pick a color")
    const [style , setStyle] = useState({
        backgroundColor:"skyblue",
        color: "white"
    }) 

    const checkColor = (e) => {
const varr = e.target.dataset.value;
console.log(varr);
if(varr == "red"){
    setText("You Win !!   👍")
    setStyle({
        backgroundColor:"green",
        color: "white"
    })
}
else{
    setText("You Loss !!  👎")
    setStyle({
        backgroundColor:"red",
        color: "white"
    })
}
    }

  return (
    <>
      <div className='container'>
        <div className='mt-1 text-center main-color' style={style}>
       {text}
        </div>
<div className='d-color'>
<div className='color-div red'></div>
</div>
        <div className='d-flex mt-1 row'>
            {/* <div onClick={checkColor} data-value="black" className=' ms-3 color-div black'></div>
            <div onClick={checkColor} data-value="yellow" className='ms-3 color-div yellow'></div>
            <div onClick={checkColor} data-value="blue" className='ms-3 color-div blue'></div>
            <div onClick={checkColor}  data-value="red" className='ms-3  color-div red'></div> */}
            <div onClick={checkColor} data-value="black" className='col-3 black'></div>
            <div onClick={checkColor} data-value="yellow" className='col-3 yellow'></div>
            <div onClick={checkColor} data-value="blue" className='col-3 blue'></div>
            <div onClick={checkColor}  data-value="red" className='col-3 red'></div>
        </div>
       
      </div>
    </>
  )
}

export default ColorGame
