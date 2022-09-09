import * as React from 'react';

interface IProps {

}
interface IState {
    count:number;

}
const Counter: React.FC<IProps> = (props) => {
 let []=useState<IState>({
    coun
 })
    return (
   <React.Fragment>
     <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-body">
                        <p className="h3 display-3">Count</p>
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
