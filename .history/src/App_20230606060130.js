import React from 'react'
import Form from './component/Form'
import "./App.css"

export default function App() {
let arr1 = [1,2,3,4]
let arr2 = arr1
arr2.pop()
document.write(arr1)
return (
    <div>
      {/* <Form/> */}
    </div>
  )
}
