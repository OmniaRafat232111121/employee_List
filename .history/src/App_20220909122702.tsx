import React from 'react';
import './App.css';
import {AiFillBook} from 'react-icons/ai'
//import Customer from './components/Customer';
import CustomerClass from './components/CustomerClass';
import Employee from "./components/Employee"
import EmployeeClass from './components/EmployeeClass';
function App() {
  
  return (
    <div className="App">
     <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className='h3 fw-bold text-success'>App Component</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem unde quos perspiciatis nam voluptas, doloribus deleniti quis quam, accusantium sunt tenetur, dolorum necessitatibus adipisci facilis. Optio, ea numquam! Recusandae?</p>
              <button className='btn btn-success btn-sm'>
             < AiFillBook className='' />Read More</button>
            </div>
          </div>

          {/* <div className="row">
            <div className="col">
              <Customer name={'omnia'} age={33} title={"The Good Doctor"}/>
      
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CustomerClass name={'omnia'} age={33} title={"The Good Doctor"}/>
            </div>
          </div> */}
          <div className="row">
            <div className="col">
             <Co/>
              
            </div>
          </div>


          <div className="row">
            <div className="col">
              <EmployeeClass/>
            </div>
          </div>
        </div>
      </div>

     </React.Fragment>
    </div>
  );
}

export default App;