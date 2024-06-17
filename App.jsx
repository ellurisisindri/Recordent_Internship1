
//////////////////////? TO-DO-APP /////////////////////////////////////////////////////////

// import React from 'react'
// import TODOApp from './ToDoApp/TODOApp'
// import './ToDoApp/ToDoApp.css'

// const App = () => {
//   return (
// <>
// <TODOApp/>
// </>  )
// }

// export default App


// //?   CRUD OPERATIONS    

// import React from 'react'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// import { BrowserRouter } from 'react-router-dom'
// import Home from './Crud/Home'
// import Read from './Crud/Read'
// import Update from './Crud/Update'
// import Create from './Crud/Create'
// import PageNotFound from './Crud/PageNotFound'
// import Delete from './Crud/Delete'


// let route = createBrowserRouter([
//     {
//         path:'/',
//         element:<Home/>
//     },
//     {
//         path:`/read/:id`,
//         element:<Read/>
//     },
//     {
//         path:'/Update',
//         element:<Update/>
//     },
//     {
//         path:'/Create',
//         element:<Create/>
//     },
//     {
//         path:'*',
//         element:<PageNotFound/>
//     }
// ])
// const App = () => {
//   return (
//   <>
//   <RouterProvider router={route}/>
//   </>)
// }

// export default App


// //?   MY CRUD OPERATIONS 

// import React from 'react'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// import { BrowserRouter } from 'react-router-dom'
// import Home from './MyCrudOperations/Home'
// import Read from './MyCrudOperations/Read'
// import Update from './MyCrudOperations/Update'
// import Create from './MyCrudOperations/Create'
// import PageNotFound from './MyCrudOperations/PageNotFound'


// let route = createBrowserRouter([
//     {
//         path:'/',
//         element:<Home/>
//     },
//     {
//         path:'/Read',
//         element:<Read/>
//     },
//     {
//         path:'/Update',
//         element:<Update/>
//     },
//     {
//         path:'/Create',
//         element:<Create/>
//     },
//     {
//         path:'*',
//         element:<PageNotFound/>
//     }
// ])
// const App = () => {
//   return (
//   <>
//   <RouterProvider router={route}/>
//   </>)
// }

// export default App


// //?  'RECORDENT PRIVATE LIMITED'.ASSIGNMENT 

import React from 'react'
import Home from './Recordentpvt/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Signin from './Recordentpvt/Signin'
import Signup from './Recordentpvt/Signup'
import PageNotFound from './Recordentpvt/PageNotFound'
import DashBoard from './Recordentpvt/DashBoard'
import NewRecoard from './Recordentpvt/NewRecoard'
import ViewAll from './Recordentpvt/ViewAll'
import BulkUpload from './Recordentpvt/BulkUpload'

let route=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/Signin',
        element:<Signin/>
    },
    {
        path:'/Signup',
        element:<Signup/>
    },
    {
        path:'/DashBoard',
        element:<DashBoard/>
    },
    {
        path:'/NewRecoard',
        element:<NewRecoard/>
    },
    {
        path:'/ViewAll',
        element:<ViewAll/>
    },
    {
        path:'/BulkUpload',
        element:<BulkUpload/>
    },
    {
        path:'*',
        element:<PageNotFound/>
    },
])

const App = () => {
  return (
<>
<RouterProvider router={route}/>
</>  )
}

export default App


// ! Excel to json converter  

// import React from 'react'
// import Excel from './Dommy/Excel'

// const App = () => {
//   return (
// <>
// <h1>Excel to JSON Converter</h1>
// <Excel/>

// </>  )
// }

// export default App




// ! vivek doubt   
// import React from 'react'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Home from './VivekDoubt/Home'
// import Anil from './VivekDoubt/Anil'
// import Vivek from './VivekDoubt/Vivek'
// import PageNotFound from './Recordentpvt/PageNotFound'



// let route=createBrowserRouter([
//     {
//         path:'/',
//         element:<Home/>        
//     },
//     {
//         path:'/Anil',
//         element:<Anil/>
//     },
//     {
//         path:'/Vivek',
//         element:<Vivek/>
//     },
//     {
//     path:'*',
//      element:<PageNotFound/>
//             }
    

// ])
// const App = () => {
//   return (
// <>
// <RouterProvider router={route}/>

// </>  )
// }

// export default App

