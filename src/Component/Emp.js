import React from 'react'

function Emp(props) {
    return (
        <div>
            <table border={1}>
                
                <tr>
                    <td>{props.name}</td>
                    <td>{props.department}</td>
                    <td>{props.designation}</td>
                    <td>{props.salary}</td>
                </tr>
            </table>
        </div>
    )
}

export default Emp
