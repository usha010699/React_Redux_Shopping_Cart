import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate  = useNavigate();
    const [count,setCount] = useState(15)
    useEffect(() => {
      setInterval(()=>{
        setCount((count) =>count -1)
      },1000)
      setTimeout(()=>navigate('/'),15000)
    
     
    }, [navigate])
    
  return (
    <div>
        <h2>Your Order have been placed Successfully,You will be redirected in {count} seconds</h2>
    </div>
  )
}

export default Success