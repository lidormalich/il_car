import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import CarData from "../interfaces/CarData";

interface ShowcarProps {

}

const Showcar: FunctionComponent<ShowcarProps> = () => {
    const car = useSelector((state: any) => state.car.value);
    return (<>

        <div className="container " dir="rtl">
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
                                <li className="list-group-item">{car[0].running ? (<div>Runing:✅ </div>) : (<div>Runing: ❌</div>)}</li>
                            </ul>
                            <p className="card-text"><small className="text-muted">{car[0].name} from  {car[0].startYear}</small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={car[0].img} className="img-fluid rounded-start" alt={car[0].name} />
                    </div>
                </div>
            </div>
        </div>


    </>);
}

export default Showcar;