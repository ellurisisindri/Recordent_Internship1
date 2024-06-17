import React from 'react'
import { useNavigate } from 'react-router-dom'

import './DashBoard.css'

const DashBoard = () => {
  let navigate=useNavigate()
  let handleNew=()=>{
    navigate("/NewRecoard")

  }

  let handleView=()=>{
    navigate("/ViewAll")

    
  }

  let handleBulk=()=>{
    navigate("/BulkUpload")

    
  }

  let handleChange=()=>{
    let select = document.getElementById('dashboard_select').value
    if(select == 'NewRecord'){
      navigate('/NewRecoard')
    }else if(select == 'ViewAll'){
      navigate('/ViewAll')
    }else if(select == 'BulkUpload'){
      navigate('/BulkUpload')

    }
    console.log(select)

  }

 
  // let select = document.getElementById("select").value
  // console.log(select)
 
  return (
<>
<div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
<img src="https://media.swipepages.com/2022/1/5fc5fa9ad081bb0010a46962/recordentlogoopenfilehorizontal-750.png" alt="recordent private limited logo" />
 
 <select name="select" id="dashboard_select" onChange={handleChange} style={{backgroundColor:'black',color:'white'}} >
   <option value="" name='select' >---select---</option>
   <option value="NewRecord" name='select' >NewRecord</option>
   <option value="ViewAll"   name='select' >ViewAll</option>
   <option value="BulkUpload"name='select' >BulkUpload</option>
 </select>
</div>





</>  )
}

export default DashBoard