import * as React from 'react';

interface ILoginFormProps {

}
interface ILoginFormState {

}
const LoginForm: React.FC<ILoginFormProps> = (props) => {
  return (
   <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center">
                      <p className="h3">Login Form</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </React.Fragment>
  );
};

export default LoginForm;
