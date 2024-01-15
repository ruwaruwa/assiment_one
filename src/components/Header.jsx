import React, { useState } from 'react'

function Header() {
const [isopen,setisopen]=useState(false)
const handleclick=()=>{
    setisopen(true)
}
  return (
    <div>
<div   className='bg-green-600 p-5'>
<h1>One</h1>
<div style={{display:isopen === true ? 'block' : 'none'}}  className='fle'>

<i onClick={handleclick} class="fa-solid fa-minus text-3xl"></i>

<div className='border-2 bg-white  h-[150px] w- px-3 flex justify-between'>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> 
        Alias esse accusamus natus eligendi numquam,<br></br> 
        animi soluta cupiditate dolorem, <br></br>
        aliquam officiis possimus laudantium! Mollitia eveniet voluptas
         expedita magnam rerum aspernatur provident!
         </p>
        
</div>

</div>
</div>
<div className='bg-sky-500 p-4'>
<h1>Two</h1>
<div className=''>

<div className='border-2 bg-white  h-[150px] w- px-3 flex justify-between'>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> 
        Alias esse accusamus natus eligendi numquam,<br></br> 
        animi soluta cupiditate dolorem, <br></br>
        aliquam officiis possimus laudantium! Mollitia eveniet voluptas
         expedita magnam rerum aspernatur provident!
         </p>
         <div>
<i class="fa-solid fa-minus text-3xl"></i>
</div>
</div>

</div>

</div>




<div className='bg-sky-400 p-5'>
<div className='p-5 mb-  bg-black'>
<div className='bg-gray-700 h-[50px] py- flex justify-between'>
    <div className='n'>
<h1 className='text-white'>Three</h1>
    </div>
    <div className='p-4'>
    <i class="fa-solid fa-plus"></i>
    </div>
    </div>

   
</div>




</div>

    </div>
  )
}

export default Header