import  React,{useState} from 'react';

interface IProps {

}
interface IState {
message:string;
}
const Greeting: React.FC<IProps> = (props) => {
    let [state,setState]=useState<IState>({
     message:'Hello'
    });
    let changeMessage=(greet:string):void=>{
        setState({
            message:greet
        });
    }
  return (
   <React.Fragment>
   <div className="container mt-3">
    <div className="row">
        <div className="col-md-5">
            <div className="card">
                <div className="card-body">
                   <p className="h3 display-3">{state.message}</p>
                   <button className='btn btn-success m-1' onClick={()=>changeMessage('Good morning')}>Good morning</button>
                   <button className='btn btn-warning m-1' onClick={()=>changeMessage('Good evening')}>Good evening</button>
                   <button className='btn btn-danger m-1' onClick={()=>changeMessage('Good afterno')}>Good afternoun</button>
                </div>
            </div>
        </div>
    </div>
   </div>
   </React.Fragment>
  );
};

export default Greeting;
