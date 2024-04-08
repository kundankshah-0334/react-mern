import React from 'react'

function Rest() {
    const touristPalace = [
        {
            name: "Take It Cheesy",
            rating : "4.3" ,
            cuisines : "Italian" ,
            location: "New Delhi" ,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5s2Ll4sV0G4JwYvI_2lJl6EmGkDMUA-L2q2bWUCl4jjtOvzbKw8o-QNIS_O_TShJQXc" 
        },
        {
            name: "The Garden of Eat'n",
            rating : "3.3" ,
            cuisines : "Chinese" ,
            location : "Pune",
            img: "https://b.zmtcdn.com/data/pictures/1/20589121/5981242d645508ad0bd87f8f29850991.png?output-format=webp&fit=around|300:273&crop=300:273;*,*"

        },
        {
            name: "Wingman's Pub",
            rating : "4.5" ,
            cuisines : "South Indian" ,
            location : "Lucknow",
            img: "http://jenikya.com/blog/wingmans2.jpg"
        },
        {
            name: "Kale Me Crazy",
            rating : "4.8" ,
            cuisines : "Korean" ,
            location : "Patna",
            img: "https://images.happycow.net/venues/1024/85/56/hcmp85562_212180.jpeg"
        },
        {
            name: "Nacho Daddy",
            rating : "4.6" ,
            cuisines : "Mexican" ,
            location : "Kolkata",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/16/9d/ee/4f/store-front.jpg"
        }]
    return (
        <div>
            {
                touristPalace.map(
                    (el, index) => (
                        <div key={index}>
                            <div class="card">
                                <img src={el.img} class="card-img-top"   alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{el.name}</h5>
                                        <h6 class="card-title">Location : <span>( {el.location} )</span></h6>
                                        <h6 class="card-title">Rating : {el.rating}</h6>
                                        <h6 class="card-title">Cuisines : {el.cuisines}</h6>
                                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Rest
