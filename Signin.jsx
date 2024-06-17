import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import './Signin.css'

const Signin = () => {
  let navigate=useNavigate()
  let formik=useFormik({
    initialValues:{
      emailmobile:'',
      psw:''
    },
    onSubmit:(aqua)=>{
      console.log(aqua)
      let {emailmobile,psw}=aqua
      console.log(emailmobile,psw)
      let fun=async()=>{
        let {data}=await axios.get('http://localhost:3000/users')
        console.log(data)
        let Arr=data.filter((ele,ind)=>{
          return (ele.email == emailmobile || ele.mobile == emailmobile && ele.psw == psw  )
      })
      Arr.push({
        email:'.....@gmail.com',mobile:'0000000000',psw:'.........'
      })
      
      console.log(Arr)
        if((Arr[0].email == emailmobile || Arr[0].mobile == emailmobile) && Arr[0].psw == psw){
          console.log('if condition')
          navigate('/DashBoard')
        }else{
          console.log('else condition')
          console.log(Arr.email == emailmobile)
          console.log(Arr.psw == psw)
          console.log(psw,typeof(psw))
          console.log(Arr[0].psw,typeof(Arr[0].psw))

          alert('Invalid Password or Email/Phone')
          formik.handleReset()

        }
        

      }
      fun()
    }

  })

  let {emailmobile,psw}=formik.values
  return (
<>
<style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


</style>

<div>

<img src="https://media.swipepages.com/2022/1/5fc5fa9ad081bb0010a46962/recordentlogoopenfilehorizontal-750.png" alt="recordent private limited logo" /> 


<form action="" onSubmit={formik.handleSubmit}  autoComplete='off'>
  <input type="text" id='signin_emailmobile' value={emailmobile} name='emailmobile' onChange={formik.handleChange}/>
  <br /><br /><input id='signin_psw' type="password"  value={psw} name='psw' onChange={formik.handleChange}/>

<i class="fa-solid fa-lock" id='lock'></i>

<i class="fa-solid fa-envelope" id='emailfont'  ></i>
<i class="fa-solid fa-mobile"   id='mob'   ></i>
  

<input type="submit" value="Signin"  id='signin_submit'></input>
</form>


<br /><br />
<div style={{position:'relative',left:'100px'}}>
<label htmlFor="" style={{color:'whitesmoke'}}>Not Have Any Account :</label>
<NavLink to='/Signup' >

<button style={{color:'black'}}>SignUp</button>
</NavLink>
</div>

</div>
<hr id='signin_line' />

</>  )
}

export default Signin