import React from 'react'

const ImageGame = () => {
    return (
        <>
            <div className="mb-3 mt-5 ms-5 cont">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="number" className="form-control" placeholder="Enter a number b/w 0 to 8" />

                <span id='span' className='mt-2'></span>
                <h1 className='mt-2'>Play</h1>

            </div>


            <div class="card">
                <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
            </div>
            <div className='container align-items-center justify-content-center d-flex'>


                <div className='row '>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>
                    <div class="card col-3">
                        <img src="random image/1.jpg" class="card-img-top img_card" alt="..." />
                    </div>

                </div>

            </div>

        </>
        
    )
}

export default ImageGame
