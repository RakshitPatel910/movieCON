import React, { useState } from 'react';

// import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

const Auth = () => {

    // const [isSignUp, setIsSignUp] = useState(0);

    return (
      <>
        {/* {
                isSignUp ? <Signup /> : <Signin />
            } */}
        <Signup />
      </>
    );
}

export default Auth