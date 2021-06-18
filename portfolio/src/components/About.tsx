import React, { useState } from 'react';

import {
  Link
} from "react-router-dom";


const About = () => {

  return (
    <div className={"about"}>
      <h1>About</h1>
      <Link to='/'>
                <button>
                    Voltar
                </button>
        </Link>
    </div>
  )
}

export default About;