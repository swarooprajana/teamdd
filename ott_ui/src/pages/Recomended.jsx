import React from 'react'
import { remData } from '../Data/data' 


 
const Recommended = () => {
    const data=remData.slice(0,8)
  return (
    <div>
         <div className='movies'>
            {
            data.map((item)=>{
                return(
                    <img src={item.image} alt=""  className='movieimg px-4 py-3'/>
 
                )
            })
         }
        </div>
    </div>
  )
}
 
export default Recommended