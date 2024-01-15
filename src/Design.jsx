import { useState } from 'react'

function Designone({items}) {
    const [open,setOpen] = useState(false);

    const handleplus = () => {
      setOpen(true)
    }
    const handleminus = () => {
      setOpen(false)
    }
  return (
    <div  className='bg-green-]'>
    <div className='bg-green-300  mt-[60px] w-[50%] h-[50px] ml-[350px] flex'>
        <h1 className ='p-4 text-2xl'></h1>
    <p className='font-bold text-2xl ml-4' >{items}</p> 
    <i class="fa-solid fa-minus  text-3xl ml-[580px] mt-1 hidden"  onClick={handleminus} style={{display: open === true ? "block" : "none"}}></i>
    <i  class="fa-solid fa-plus text-3xl ml-[580px] mt-1" onClick={handleplus}  style={{display: open === true ? "none" : "block"}} ></i>
    </div>
  
    
    <div style={{display: open === true ? "block" : "none"}} className='bg-white w-[50%] h-[160px] border-red-300 border-4  ml-[350px] text-xl text-black px-5 mt-4'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
    </div>
    </div>
    
  )
}

export default Designone