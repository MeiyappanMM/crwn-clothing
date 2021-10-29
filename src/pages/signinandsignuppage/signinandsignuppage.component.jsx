import React from "react";

import './signinandsignuppage.styles.scss';

import SignIn from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";

const SigninandSignup = () =>(
    <div className='sign-in-and-sign-up'> 
        <SignIn/>
        <Signup/>
    </div>
)

export default SigninandSignup ;