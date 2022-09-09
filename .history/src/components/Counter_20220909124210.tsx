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
                <div className="card mt-4">
                    <div className="card-body">
                        <p className="h3 display-">Count</p>
                        <button className='btn btn-danger m-1'>Increment</button>
                        <button className='btn btn-success m-1'>Decccrement</button>
                      </div>
                </div>
            </div>
        </div>
     </div>
   </React.Fragment>
  );
};

export default Counter;
