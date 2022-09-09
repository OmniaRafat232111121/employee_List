import * as React from 'react';

interface IProps {

}
interface IState {

}
const Greeting: React.FC<IProps> = (props) => {
  return (
   <React.Fragment>
   <div className="container">
    <div className="row">
        <div className="col-md-5">
            <div className="card">
                .card-body
            </div>
        </div>
    </div>
   </div>
   </React.Fragment>
  );
};

export default Greeting;
