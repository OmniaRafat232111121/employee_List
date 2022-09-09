import * as React from 'react';

interface ICounterProps {

}
interface ICounterState {

}
const Counter: React.FC<ICounterProps> = (props) => {
  return (
   <React.Fragment>
     <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="h3">Count</p>
                        <button className='btn btn-danger m-1'>Increment</button>
                        <button className='btn btn-danger m-1'>Icrement</button>
                      </div>
                </div>
            </div>
        </div>
     </div>
   </React.Fragment>
  );
};

export default Counter;
