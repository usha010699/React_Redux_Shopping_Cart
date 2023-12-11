import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../Data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

function Product() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const item = ProductList.find((element)=> element.id === parseInt(params.id))
    const addToCart = ()=>{
        setAlert(true)
        setTimeout(()=>setAlert(false),3000)
        dispatch(addItem(item))
    }

    const[alert,setAlert] = useState(false)
    const list = useSelector((state)=>state.cart.list)
    const element= list.find((item1)=>item1.id === item.id)
    return (
    <div>
        

        <div className='card m-2 '>
            {alert && <span className='alert alert-success'>Item Added to Cart</span>}
        <div className='mt-2'>
             <img src={item.thumbnail} height={350} width={400} alt={item.title} className='border-radius-9' role='button'/>

        </div>
        <div className='mt-3 card-body'>
            <h5 className='card-title'>{item.title}</h5>
            <h6 className='mt-2'>Price:{`$${item.price}`}</h6>
            <h6 className='mt-2'>Discount:{item.discountPercentage}%</h6>

            <h6 className='mt-2'>Rating:{item.rating}%</h6>
            <div className='mt-4 '>
                {item.stock >0 ?
                    <div>
                        <button className='btn btn-success' onClick={()=>navigate(`/checkout/${item.id}`)}>Buy Now</button>    

                       {
                       element?.count > 0 ? 
                        <button className='ms-3 btn btn-outline-warning' onClick={()=>navigate('/cart')}>Go to Cart</button> 
                        :
                        <button className='ms-3 btn btn-success' onClick={addToCart}>Add to Cart</button> 
                       }    

                    </div>
                    
                    :
                    <button className='btn btn-outline-danger'>Out of Stock</button>
                    }
            </div>
        
        </div>
    </div>
    </div>
  )
}

export default Product