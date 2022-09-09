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
                   <p className="h3">message</p>
                   <button className='btn btn-success'>Good morning</button>
                   <button className='btn btn-warning'>Good evening</button>
                   <button className='btn btn-succes'>Good afternoun</button>
                </div>
            </div>
        </div>
    </div>
   </div>
   </React.Fragment>
  );
};

export default Greeting;
