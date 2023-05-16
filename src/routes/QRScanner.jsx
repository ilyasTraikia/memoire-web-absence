import React, { useState } from 'react'
import QRCode from "react-qr-code";
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';





export async function loader() {
  const variable = JSON.parse(localStorage.getItem('jwttoken'))
  const response = await axios.get(`http://localhost:4000/chefDep/getAllSeances/${variable.compte_id}`)
  return  response
 
}



export default function QRScanner() {

  const data = useLoaderData().data.data
  

  const [value,setValue] = useState("")
  const [inputValue,setInputValue] = useState(data[0].id_seance)

  const handleSubmit = (event) => {
    event.preventDefault();
    
   let seanse = data.find((element)=> {
       return  element.id_seance == inputValue
    })
    const QrcodeValue = JSON.stringify(seanse)
   
    setValue(QrcodeValue)
  }

  return (
  <div>
   <form onSubmit={handleSubmit}>
  
     


     <div className='p-6.5'>





   



 <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
  <div className='w-full xl:w-1/2'>
    <label className='mb-2.5 block text-black dark:text-white'>
      Choose seance id
    </label>

    {/* <input
    name='qrcode'
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
     /> */}
     <select name='qrcode' defaultValue={inputValue} onChange={(e)=> {  setInputValue(e.target.value)    }} className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
        <option value='' disabled>seance</option>
        {data.map((element,index)=> {
                return  <option key={index} value={element.id_seance}>{element.id_seance}</option>
          })}
     </select>
  </div>

 


</div>



<input className='w-[170px] items-center justify-center bg-meta-4 ml-2 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10' type='submit' value="Generate QR Code" /> 


</div>



  
   </form> 
      <div className='h-auto max-w-[320px] w-full mt-4'>
        {
          value == '' ? <div></div> : <QRCode
          size={456}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 656 656`}
        />
        }
      


      </div>

</div> 



  )
}
