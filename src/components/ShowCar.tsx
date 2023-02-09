import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CarData from "../interfaces/CarData";

interface ShowcarProps {

}

const Showcar: FunctionComponent<ShowcarProps> = () => {
    // const car = useSelector((state: any) => state.car.value);
    const carState = useLocation();
    const car = carState.state;
    let carFlageStatus: boolean = true;
    let [tagData, setTagData] = useState<any>([]);

    let checkCar = () => {
        if (!car || car == null) {
            console.log("Enter");
            return (<>
                {carFlageStatus = false}
                {console.log("ERROR Enter")}
            </>)
        }
    }

    checkCar();

    let getTagDateInString = (dateItemToSplite: string) => {
        let m: string, d: string, y: string;
        y = dateItemToSplite.slice(0, 4);
        m = dateItemToSplite.slice(4, 6);
        d = dateItemToSplite.slice(6, 8);
        return `תאריך הפקת תו נכה ${d}/${m} בשנת ${y}`;
    }

    useEffect(() => {
        carFlageStatus === true ? (
            axios.get(`http://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&limit=1&q=${car[0].mispar_rechev}`)
                .then((res) => {
                    // console.log(res.data.result.records);
                    if (res.data.success && res.data.result.records.length != 0) {
                        setTagData([true, res.data.result.records[0]["TAARICH HAFAKAT TAG"]]);
                    } else {
                        setTagData([false]);
                    }
                })) : (carFlageStatus = false);
    }, [])

    let recallResourceID = '36bf1404-0be4-49d2-82dc-2f1ead4a8b93' // the resource id


    return (<>
        {console.log(car)}
        {carFlageStatus === true ? (<div className="container " dir="rtl">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">רכב {car[0].mispar_rechev}</h5>
                            <p className="card-text">{car[0].tzeva_rechev}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">בעלות רכב : {car[0].baalut} </li>
                                <li className="list-group-item">יצרן : {car[0].tozeret_nm} </li>
                                <li className="list-group-item">רכב : {car[0].kinuy_mishari} רמת גימור: {car[0].ramat_gimur}</li>
                                <li className="list-group-item">שלדה: {car[0].misgeret}</li>
                                <li className="list-group-item">טסט עד: {car[0].tokef_dt}</li>
                                <li className="list-group-item">מועד עליה לכביש: {car[0].moed_aliya_lakvish}</li>
                                <li className="list-group-item">
                                    {tagData[0] === true ? (<div>
                                        <i className="fa-solid fa-wheelchair" style={{ color: "blue" }}>
                                            תג נכה:</i>✅ בתוקף
                                        <p>{getTagDateInString(tagData[1])}</p>
                                    </div>) : (<div><i className="fa-solid fa-wheelchair" style={{ color: "blue" }}>תג נכה:</i> ללא❌</div>)}</li>
                                <li className="list-group-item">קבוצת זיהום: {car[0].kvutzat_zihum}</li>
                                <li className="list-group-item">רוחב צמיג קדמי {car[0].zmig_kidmi} רוחב צמיג אחורי: {car[0].zmig_ahori}</li>
                                {/* <li className="list-group-item">{car[0].running ? (<div>Runing:✅ </div>) : (<div>Runing: ❌</div>)}</li> */}
                            </ul>
                            <p className="card-text">רכב מספר {car[0].mispar_rechev} משנת  {car[0].shnat_yitzur}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={car[0].img} className="img-fluid rounded-start" alt={car[0].name} />
                    </div>
                </div>
            </div>
        </div>) : (<h1> לא נמצא מידע- נסה שנית</h1>)}
    </>);
}

export default Showcar;