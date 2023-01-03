import React, { useState } from 'react'
import "./ILcars.css"
import axios from 'axios'

export default function ILcars() {
  const [carNumber, setCarNumber] = useState('');

  const getData = () => {
    axios.get(`http://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=${carNumber}`)
    .then((res) => {
      console.log(res.data);
    })
  }
  return (
    <div>
      <h1 >ברוכים הבאים לאתר למציאת מידע על הרכב</h1>
      <div className="d-flex justify-content-center">
            <input name="carId" type="number" maxLength="8" className="licensePlate" onChange={(e)=>{setCarNumber(e.target.value)}}/>
            <button type="button" className="btn btn-warning mx-1"  onClick={()=>getData()}>
              <i className="fa-sharp fa-solid fa-magnifying-glass">חפש מידע על הרכב</i>
              </button>
        </div>
        {/* <p>car ID= {data}</p> */}
    </div>
  )
}
