import React from 'react';
import Typical from 'react-typical'

import'./Home.css'

const Home  = () => {
    return (
        <main className="container ">
            
            <h1>Welcome to my website</h1>
            <h2 style={{color:'black'}} >
                {''}
 <Typical
 steps={[

    'Hi,I am Md.Mainul Islam',1000,
    'I am an undergraduate student',1000, 
    'I am a front-end developer',1000,
    
  ]}
  loop={Infinity}
  wrapper="b"/>
            </h2>
        </main>
    );
};

export default Home;