import React, { useState } from 'react'
import "./ILcars.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Showcar from './ShowCar';

import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import { setCar } from '../features/car';

export default function ILcars() {
  const dispatch = useDispatch();
  const car = useSelector((state: any) => state.car.value);
  const [carNumber, setCarNumber] = useState('');

  let navigation = useNavigate();
  let [carData, setCarData] = useState([]);
  const getData = async () => {
    await axios.get(`http://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=${carNumber}`)
      .then((res) => {
        console.log(res.data);
        // res.data.result.records.length ? (console.log(res.data.result.records.baalut)) : (<h2>NO Item</h2>);
        if (res.data.success) {

          dispatch(setCar(res.data.result.records));
          console.log(555555555555);
          console.log(car);
        }

        // setCarData(res.data.result.records);
        // navigation();
        // <Showcar data={carData} />
      })
  }
  return (
    <div>
      <h1 >ברוכים הבאים לאתר למציאת מידע על הרכב</h1>
      <div className="d-flex justify-content-center">
        <input name="carId" type="number" maxLength={8} value="8266376" className="licensePlate" onChange={(e) => { setCarNumber(e.target.value) }} />
        <button type="button" className="btn btn-warning mx-1" onClick={() => getData()}>
          <i className="fa-sharp fa-solid fa-magnifying-glass">חפש מידע על הרכב</i>
        </button>
      </div>
      <button onClick={() => {
        console.log(car);

      }}>oo</button>
    </div>
  )
}
