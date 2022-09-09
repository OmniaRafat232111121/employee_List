import * as React from 'react';

interface ILoginFormProps {

}
interface ILoginFormState {

}
const LoginForm: React.FC<ILoginFormProps> = (props) => {
  return (
   <React.Fragment>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center">
                      <p className="h3">Login Form</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-2">
                                <input type="text" className='form-control' p/>
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
