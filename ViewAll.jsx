import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './ViewAll.css'

const ViewAll = () => {
    let [empData,setEmpData]=useState(0)
    let navigate=useNavigate()
   useEffect(()=>{
    let fun=async()=>{
        let {data}=await axios.get('http://localhost:3000/employees')
        setEmpData(data)
        console.log(data)
        console.log(empData)
    }
    fun()

   },[])

   let handleClick=()=>{
        navigate('/DashBoard')
   }
    
  return (
<>
<img src="https://media.swipepages.com/2022/1/5fc5fa9ad081bb0010a46962/recordentlogoopenfilehorizontal-750.png" alt="recordent private limited logo" />

<h1>Showing the Employee Deatails </h1>
<table border={5} style={{ width: '100%' }} cellPadding={2}>
    <thead id='tr_th'>
        <tr >
            <th>EMP.ID</th>
            <th>EMP_NAME</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
            <th>EDIT</th>
        </tr>
    </thead>

    <tbody id='tr_td'>
        
            {
                empData==0?'Loading...':empData.map((ele,ind)=>{
                    return(                      
                    <Fragment>
                         <tr>
                            <td>{ind+1}</td>
                            <td>{ele.empname}</td>
                            <td>{ele.dept}</td>
                            <td>{ele.sal}</td>
                            <td><button id='button_viewAll1' >Edit</button></td>
                        </tr>
                    </Fragment>
                    )
                })
            }
        
    </tbody>
</table>
<br /><br /><br />

<button onClick={handleClick} id='button_viewAll2' style={{position:'relative',left:'140px', height:'25px'}}>Back to DashBoard</button>

</>  )
}

export default ViewAll