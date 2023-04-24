import React, { useState } from 'react'
import QRCode from "react-qr-code";

export default function QRScanner() {

  const [value,setValue] = useState("")
  const [inputValue,setInputValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(inputValue)
  }

  return (
  <div>
   <form onSubmit={handleSubmit}>
    <input
    name='qrcode'
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
     />
    <input className='w-[170px] items-center justify-center bg-meta-4 ml-2 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10' type='submit' value="Generate QR Code" /> 
   </form> 
      <div className='h-auto max-w-[120px] w-full mt-4'>
        {
          value == '' ? <div></div> : <QRCode
          size={456}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 456 456`}
        />
        }
      


      </div>

</div> 



  )
}
