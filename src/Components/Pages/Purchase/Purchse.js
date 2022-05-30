import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal'



const Purchase = () => {
  const { purchaseId } = useParams();


  const [item, setItem] = useState({});


  useEffect(() => {
    fetch(`https://gentle-fortress-48614.herokuapp.com/parts/${purchaseId}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [purchaseId])




  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={item.picture} alt="" />
          <div>
            <h1 class="text-5xl font-bold">{item.name}</h1>
            <p className='rounded-box border-2 p-4 my-2'>{item.description}</p>
            <p className='rounded-box border-2 p-px font-bold my-2'>Price Per Unit : $ {item.price}</p>
            <p className='rounded-box border-2 p-px font-bold my-2'>Our Avilable Stock : {item.store}</p>
            <p className='rounded-box border-2 p-px font-bold my-2'>Minimum Order Quantity : {item.quantity}</p>
            <div className="card-actions justify-center">
              <label for="my-modal-6" class="btn modal-button">Order Now</label>
            </div>
            
              <PurchaseModal
                item={item}
                setItem={setItem}
              ></PurchaseModal>
         
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchase;

