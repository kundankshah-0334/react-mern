import React from 'react'

function Restaurant (props) {
  return (
    <div>
       <table border={1}>
                
                <tr>
                    <td>{props.res_name}</td>
                    <td>{props.cuisines}</td>
                    <td><img src={props.img} height={200} width={200} /></td>
                </tr>
            </table>
    </div>
  )
}

export default Restaurant 
