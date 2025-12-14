import React,{useState} from 'react';
import { API_BASE } from "../api/api";


export default function Register() {

    const [name,setname] = useState('');
    const [age,setAge] = useState('');
    const[result,setResult] = useState(null) ; 


    async function handleSubmit(e){
e.preventDefault() ; 
setResult(null) ; 

try{
const res = await fetch(`${API_BASE}/register`,{
method :'POST' ,
headers :{'Content-Type':'application/json'},
body :JSON.stringify({name,age})
});

const data = await res.json();
setResult(data) ; 
}catch(err){
setResult({error : 'Network error'}) ; 
}
    }

  return (
    <div className="card">
      <h2>Register as Patient</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
        <div style={{ marginBottom: 8 }}>
          <label>Name</label><br/>
          <input value={name} onChange={(e)=>setname(e.target.value)} placeholder="Your name" />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Age</label><br/>
          <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
        </div>
        <button className="btn" type="submit">Register</button>
      </form>

      {result && (
        <div style={{ marginTop: 18 }}>
            {result.error ? (<div className="small">Error: {result.error}</div>)
        :(<div>
              <div><strong>Secret ID:</strong> {result.secretId}</div>
              <div className="small">Save this Secret ID to access your reports.</div>
            </div>)}
            </div>
      )}
    </div>
  );
}
