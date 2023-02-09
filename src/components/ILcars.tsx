import React, { useState } from 'react'
import "./ILcars.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Showcar from './ShowCar';

import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import { setCar } from '../features/car';
import { toast, ToastContainer } from 'react-toastify';
import { errorMessage } from '../features/FeedbackService';

export default function ILcars() {
  // const dispatch = useDispatch();
  const car = useSelector((state: any) => state.car.value);
  const [carNumber, setCarNumber] = useState('');
  let navigation = useNavigate();

  const getData = async () => {
    await axios.get(`http://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q=${carNumber}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.success && res.data.result.records.length != 0) {
          console.log("CAR OK");
          // dispatch(setCar(res.data.result.records));
          console.log(res.data.result.records[0]);

          navigation('/car', { state: res.data.result.records });
          // window.location.href = "/car";
        } else {

          // console.log("CAR NOT 2 OK");
          errorMessage(`רכב ${res.data.result.q} לא נמצא`);
        }
      })
  }
  return (
    <div>
      <h1 className='col-md-5'>ברוכים הבאים לאתר למציאת מידע על הרכב</h1>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-warning mx-1" onClick={() => { getData() }}>
          <i className="fa-sharp fa-solid fa-magnifying-glass">חפש מידע על הרכב</i>
        </button>
        <input name="carId" type="number" maxLength={8} onInput={(e) => {
          if ((e.target as HTMLInputElement).value.length > (e.target as HTMLInputElement).maxLength) {
            (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.slice(0, (e.target as HTMLInputElement).maxLength)
          }
        }}
          placeholder=" מספר רכב" className="licensePlate" onChange={(e) => { setCarNumber(e.target.value) }} />

      </div>
    </div>
  )
}
