import React,{useState} from 'react';
import { IUser } from '../modals/IUser';

interface IProps {

}
interface IState {
user:IUser
}
const LoginForm: React.FC<IProps> = (props) => {
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
    {/* <pre>{JSON.stringify(state.user)}</pre> */}
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
                                required={true}
                                name="username" 
                                value={state.user.username}
                                onChange={updateInput}
                                className='form-control'
                                 placeholder='username'/>
                            </div>
                            <div className="mb-2">
                                <input type="password"
                                 required={true}
                                name="password" 
                                value={state.user.password}
                                onChange={updateInput}
                                 className='form-control'
                                  placeholder='password'/>
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
