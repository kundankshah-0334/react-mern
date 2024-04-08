import React, { useState } from 'react'

function Registration() {

    var [obj , setObj] = useState({
        name: "",
        email : "",
        password : "",
        contact : "",
        city:"",
        state:"",
        address:"",
        gender:"",
        termsChecked :"",
    })
    var [name, setName] = useState("")
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var [contact, setContact] = useState("")
    var [city, setCity] = useState("")
    var [state, setState] = useState("")
    var [address, setAddress] = useState("")
    var [gender, setGender] = useState("")
    const [termsChecked, setTermsChecked] = useState(false);

    
    const addValue = (e) => {
        setName(e.target.value)
    }
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                                <input onChange={addValue} value={name} type="email" className="form-control" placeholder='Enter Name' />
                                {name}
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Enter Email</label>
                                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder='Enter Email' />
                                {email}
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"> Enter Password</label>
                                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" />
                                {password}
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Enter Contact</label>
                                <input type="tel" className="form-control" value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder='Enter Phone Number' />
                                {contact}
                            </div>
                        </form>
                    </div>
                    <div className='col-6'>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Enter Address</label>
                                <input type="tel" className="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='Enter Address' />
                                {address}
                            </div>

                            <div className="mb-3 mt-3"> State :
                                <select class="form-select" aria-label="Default select example" value={state} onChange={(e) => { setState(e.target.value) }}  >
                                    <option selected disabled>Choose State</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Rajsthan">Rajsthan</option>
                                </select>
                                {state}
                            </div>
                            <div className="mb-3 mt-3"> City :
                                <select class="form-select" aria-label="Default select example" value={city} onChange={(e) => { setCity(e.target.value) }}>
                                    <option selected disabled>Choose City</option>
                                    <option value="Jalandhar">Jalandhar</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Ambala">Ambala</option>
                                    <option value="Udaypur">Udaypur</option>
                                    <option value="Jaipur">Jaipur</option>
                                </select>
                                {city}
                            </div>

                            <div className="mb-3 d-flex mt-3">
                                Gender :
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="Male"
                                        checked={gender === "Male"}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input ms-4"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                            {gender}
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input mt-2"
                                    id="exampleCheck1"
                                    checked={termsChecked}
                                    onChange={(e) => { setTermsChecked(e.target.checked) }}
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Terms & Conditions
                                </label>
                                <p>{termsChecked ? 'true' : 'false'}</p>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Registration
