import React,{useState} from 'react';
import { IUser } from '../modals/IUser';
interface ILoginFormProps {

}
interface ILoginFormState {
user:IUser
}
const LoginForm: React.FC<ILoginFormProps> = (props) => {
  let [state,setState]=useState<IState>({
      user:{
        username:'',
        password:''
      }
  });
  let updateInput=(event:React.ChangeEvent<HTMLInputElement>):void=>{
    setState({
        user:{
            ...state.user,
            [event.target.name]:event.target.value
        }
    })
  }
    return (
   <React.Fragment>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-header text-center">
                      <p className="h3">Login Form</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-2">
                                <input type="text"
                                name="username" 
                                val
                                className='form-control'
                                 placeholder='username'/>
                            </div>
                            <div className="mb-2">
                                <input type="password" className='form-control' placeholder='password'/>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className='btn btn-primary' value='Login'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </React.Fragment>
  );
};

export default LoginForm;
