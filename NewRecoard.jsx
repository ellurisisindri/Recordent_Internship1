import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './NewRecoard.css'

const NewRecoard = () => {
    let navigate=useNavigate()
    let Formik=useFormik({
            initialValues:{
                empname:'',
                dept:'',
                sal:''
            },onSubmit:(val)=>{
                console.log(val)
                axios.post('http://localhost:3000/employees',val)
                // Formik.handleReset()
                navigate('/DashBoard')
                

            }
        }
    )

    let {empname,dept,sal}=Formik.values
  return (
<>
<img src="https://media.swipepages.com/2022/1/5fc5fa9ad081bb0010a46962/recordentlogoopenfilehorizontal-750.png" alt="recordent private limited logo" />

<h1>Adding Employees Deatails</h1><br />

<form action="" onSubmit={Formik.handleSubmit} autoComplete='off'>
    <label htmlFor="new_empname">Employee_Name :</label><pre style={{display:'inline'}}> </pre><input type="text" id='new_empname' onChange={Formik.handleChange}  value={empname} name='empname'    /><br /><br />

    <label htmlFor="new_empdept">Department :</label><pre style={{display:'inline'}}>      </pre><input type="text"   id='new_empdept'  onChange={Formik.handleChange}  value={dept} name='dept'    /><br /><br />
    
    <label htmlFor="new_empsal">Salary :</label><pre style={{display:'inline'}}>           </pre><input type="tel"   id='new_empsal'       onChange={Formik.handleChange}  value={sal} name='sal'    /><br /><br />
<br /><br />
    <input type="submit" value="Add"  id='new_emp_submit'/>
</form>
 <button onClick={()=>navigate('/dashboard')}  id='new_emp_submit'>Go to DashBoard</button>

</>  )
}

export default NewRecoard