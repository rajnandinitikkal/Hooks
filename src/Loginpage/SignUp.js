import React from 'react';
import './SignUp.css';

function SignUp({name,mobile,email}) {
  return (
      <div className='contact-card'>
      <p className='contact-name '>Name : {name}</p>
      <p className='contact-mobile '>Contact : {mobile}</p>
      <p className='contact-email '>Email : {email}</p>
      
  </div>
    )
  
}

export default SignUp

