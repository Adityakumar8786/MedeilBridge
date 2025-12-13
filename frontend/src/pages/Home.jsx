import React from "react"
import {Link} from "react-router-dom"

export default function Home(){

    return(
 <div className="card">
      <h1>Digital Health Records for Migrant Workers</h1>
      <p className="small">Secure. Anonymous. Multi-language. AI-guided.</p>
      <div style={{marginTop:18}}>
<Link to="/register"><button>Register Now</button></Link>
      </div>
    </div>
    );
}