 import React from 'react'
 import Form from "./component/Form"
 export default function App() {
     return (
        <>
        <Form/>
        </>
     )
 }

// import React, { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState('');
// const [data,setData]=useState([])
// const [data2,setData2]=useState([])

  
// const showData = () => {
//     setData(["Name is : "+name+" "+"Age is : "+age])
//     // setData2(age)
//     clearHandler()
//   };

//   const clearHandler = ()=>{
//     setName('')
//     setAge('')
//   }
//   return (
//     <div>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="name"
//       />
//       <input
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         placeholder="age"
//       />
//       <button onClick={() => showData()}>Submit</button>
//        <h2>{data}</h2>
//        <h2>{data2}</h2>

//     </div>
//   );
// }
