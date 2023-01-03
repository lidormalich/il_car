import { FunctionComponent } from "react";
import CarData from "../interfaces/CarData";

interface ShowcarProps {
    data: CarData;
}

const Showcar: FunctionComponent<ShowcarProps> = ({ data }) => {
    return (<>

        <div className="container">
            <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                {/* <div className="row g-0"> */}
                {/* <div className="col-md-8"> */}
                <div className="card-body">
                    <h5 className="card-title">רכב {data.mispar_rechev}</h5>
                    {/* <p className="card-text">{seriesItem.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Start Year: {seriesItem.startYear}</li>
                  <li className="list-group-item">Rate: {seriesItem.rate}/10 &#11088;</li>
                  <li className="list-group-item">{seriesItem.running ? (<div>Runing:✅ </div>) : (<div>Runing: ❌</div>)}</li>
                </ul>
                <p className="card-text"><small className="text-muted">{seriesItem.name} from  {seriesItem.startYear}</small></p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={seriesItem.img} className="img-fluid rounded-start" alt={seriesItem.name} />
            </div> */}
                </div>
            </div>
        </div>


    </>);
}

export default Showcar;