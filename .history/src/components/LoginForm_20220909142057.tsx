import * as React from 'react';

interface ILoginFormProps {

}
interface ILoginFormState {

}
const LoginForm: React.FC<ILoginFormProps> = (props) => {
  return (
   <React.Fragment>
    <h3>LoginForm</h3>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header te">

                    </div>
                </div>
            </div>
        </div>
    </div>
   </React.Fragment>
  );
};

export default LoginForm;
