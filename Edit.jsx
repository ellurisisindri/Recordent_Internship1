import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Edit.css'
import axios from 'axios'

const Edit = () => {
    let {id}=useParams()
    let [info,setInfo]=useState({
        name:"",
        dept:"",
        sal:''
    })
    let navigate=useNavigate() 
    useEffect(()=>{
        let fun=async()=>{
            let {data}=await axios.get(`http://localhost:3000/employees/${id}`)
            console.log(data)
            console.log(data.empname)
            setInfo(data)
    
        }
        fun()
    },[])

    let handleChange=(e)=>{
        let {name,value}=e.target
        console.log(name,value)
        setInfo({...info,[name]:value})
console.log(info)
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/employees/${id}`,info)

    }

    let {empname,dept,sal}=info

  return (
<>
<img src="https://media.swipepages.com/2022/1/5fc5fa9ad081bb0010a46962/recordentlogoopenfilehorizontal-750.png" alt="recordent private limited logo" />

<form action="" onSubmit={handleSubmit}>
<label htmlFor="edit_name">Name :</label> <pre style={{display:'inline'}}>     </pre>
<input type="text" id='edit_name' name='empname'  value={empname}      onChange={handleChange}    /><br /><br />

<label htmlFor="edit_dept">Department :</label>
<input type="text" id='edit_dept' name='dept' value={dept} onChange={handleChange}    /><br /><br />

<label htmlFor="edit_sal">Sal :</label><pre style={{display:'inline'}}>        </pre>
<input type="text" id='edit_sal' name='sal'    value={sal}     onChange={handleChange}     /><br /><br /><br /><br />

<input type="submit" value="Update" id='edit_submit' /><br /><br />

<button id='edit_submit' onClick={()=>navigate('/ViewAll')}>Go to ViewAll</button>
</form>

</>  )
}

export default Edit