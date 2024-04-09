import React from 'react'
import { useState } from 'react';
import SubCompoImgG from './SubCompoImgG';
const ImageGame = () => {
    const [images, setImages] = useState([]);
    const [num, setNum] = useState('');
    const handleSubmit = () => {
        const num = document.getElementById("input").value;

        if (num) {

            if (num > 0 && num < 9) {
                const number = parseInt(num);
                console.log(number);

                const randomNumber = Math.floor(Math.random() * 10) + 1;
                console.log(randomNumber)


                document.getElementById("display-control").style.display = "block"


                var imgSource = "random image/" + randomNumber + ".jpg";
                console.log(imgSource)
                document.getElementById("randomImage").src = "random image/" + randomNumber + ".jpg";



              


                // for(let i = 0 ; i < num ; i++){
                //     console.log(i+1)
                //     var innerhtml = '<div className="card col-3">  <img src="random image/1.jpg" className="card-img-top img_card" alt="..." /> </div>'
                //     // document.getElementById("ro").innerHTML = innerhtml
                // }
                // console.log(innerhtml)
                // document.getElementById("ro").innerText = innerhtml
            }
            else {
                document.getElementById("span").innerText = "Please Enter a value b/w 1 to 8"
                document.getElementById("span").style.color = "red"
            }

        }

        else {
            document.getElementById("span").innerText = "Please Enter a value"
            document.getElementById("span").style.color = "red"
        }
      

    }

    const handleInputChange = (event) => {
        setNum(event.target.value);
    };
    const renderImages = () => {
        const images = [];
        const number = parseInt(num);

        for (let i = 0; i < number; i++) {
            images.push(
                <div key={i} className="card col-3">
                    <img src={`random image/${i + 1}.jpg`} className="card-img-top img_card" alt="..." />
                </div>
            );
        }

        return images;
    };

    return (
        <>
            <div className="mb-3 mt-5 ms-5 cont">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input id="input" type="number" className="form-control" placeholder="Enter a number b/w 0 to 8"  onChange={handleInputChange} value={num}  />
                <button className="mt-3 btn btn-primary" onClick={handleSubmit}>Submit</button>
                <br></br><span id='span' className='mt-2'></span><br></br>
                <h1 className='mt-2'>Play</h1>

            </div>

            <div className='none' id='display-control'>


                <div className="card">
                    <img id='randomImage' src='' className="card-img-top img_card" alt="..." />
                </div>
                <div className='container align-items-center justify-content-center d-flex'>

                    <div className='row' id='ro'>
                    {renderImages()}
                       
                    </div>

                </div>
            </div>
        </>

    )
}

export default ImageGame
