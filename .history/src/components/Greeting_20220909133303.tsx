import * as React from 'react';

interface IProps {

}
interface IState {
message:string;
}
const Greeting: React.FC<IProps> = (props) => {
  return (
   <React.Fragment>
   <div className="container mt-3">
    <div className="row">
        <div className="col-md-5">
            <div className="card">
                <div className="card-body">
                   <p className="h3">messa</p>
                </div>
            </div>
        </div>
    </div>
   </div>
   </React.Fragment>
  );
};

export default Greeting;
