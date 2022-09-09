import React,{useState} from 'react';

interface IProps {

}
interface IState {
    count:number;

}
const Counter: React.FC<IProps> = (props) => {
 let [state,setState]=useState<IState>({
    count:0
 });
 let increment=()
    return (
   <React.Fragment>
     <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-body">
                        <p className="h3 display-3">{state.count}</p>
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
