import React from 'react'

function Tourist() {
    const touristPalace = [
        {
            place: "Ayodhya",
            img: "https://media.istockphoto.com/id/1074127630/photo/architecture-of-ayodhya-india.jpg?s=612x612&w=0&k=20&c=nFPDwv8nfWkXEmJewFM6KVmtGJ2MrcH8kni_2uz_cHs="
        },
        {
            place: "Mathura",
            img: "https://media.istockphoto.com/id/612255400/photo/kusum-sarovar.jpg?s=612x612&w=0&k=20&c=S_KX7oE-oj0IAj5Bhl9r4U2ZrGOcWT5ZkKco7K3sBkc="

        },
        {
            place: "Barsana",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLvdljUoUydS2n6XMZNEF6osTvuzGQtq2pA"
        },
        {
            place: "Varanasi",
            img: "https://th-thumbnailer.cdn-si-edu.com/TOGGEladhZaf6-m_-UFLh7svcl4=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/morning-on-the-Ganges-River-Varanasi-631.jpg"
        },
        {
            place: "Dwarka",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00qymeJG3llthSVTkhebkTYAS63dNs3uEFakz-PQ6T5ReM7QXr666oIh8tAuiXieTSEs"
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
                                        <h5 class="card-title">{el.place}</h5>
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

export default Tourist
