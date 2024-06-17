import axios from 'axios'
import { useFormik } from 'formik'
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Signup.css'

const Signup = () => {
    let [signupdata,setsignupdata]=useState([])
    let navigate =useNavigate()
   let formik=useFormik({
    initialValues:{
        name:"",
        email:"",
        mobile:"",
        psw:"",
        cpsw:""
    },onSubmit:(ram)=>{
        console.log(ram.name)
       if(ram.psw==ram.cpsw){
        console.log('psw match if')
        let fun=async()=>{
            let {data}=await axios.get('http://localhost:3000/users')
            console.log(data)
            let Arr=data.filter((ele)=>{
                return (ele.name == ram.name)
            })
            console.log(Arr)
            if(Arr.length){
                console.log('if statement')
                alert('UserName is Already Prasent')
            }else{
                console.log('else statement')
                axios.post('http://localhost:3000/users',ram)
                navigate('/Signin')

            }
        }
        fun()
       }else{
        console.log('psw match else')
        alert('Password And ConformPassword Should Match Each Other')
       }
        
            
    }

    
   })
//    console.log(formik.values,'formik.valuesssssssssssssssss')
  return (
<>
<img src="https://media.swipepages.com/2022/1/5fc5fa9ad081bb0010a46962/recordentlogoopenfilehorizontal-750.png" alt="recordent private limited logo" />

<form action="" onSubmit={formik.handleSubmit} autoComplete='off'>
    <label htmlFor="signup_name">Name :</label><pre style={{display:'inline'}}>           </pre><input type="text" id='signup_name' name='name' className='signup_input' minLength={3} onChange={formik.handleChange}/><br /><br />

    <label htmlFor="signup_email">Email :</label><pre style={{display:'inline'}}>           </pre><input type="email" id='signup_email' name="email" onChange={formik.handleChange} className='signup_input' /><br /><br />

    <label htmlFor="signup_mobile">Mobile :</label><pre style={{display:'inline'}}>          </pre><input type="tel" id='signup_mobile'  maxLength={10} name='mobile' className='signup_input' onChange={formik.handleChange}/><br /><br />

    <label htmlFor="signup_psw">Password :</label><pre style={{display:'inline'}}>        </pre><input type="password" id='signup_psw' name='psw' onChange={formik.handleChange} maxLength={8} className='signup_input' /><br /><br />

    <label htmlFor="signup_cpsw">ConfirmPassword :</label><input type="password" className='signup_input' id='signup_cpsw' name='cpsw' onChange={formik.handleChange} /><br /><br /><br /><br />

    <input type="submit" value="SignUp" id='signup_submit'/>
</form>

</>  )
}

export default Signup