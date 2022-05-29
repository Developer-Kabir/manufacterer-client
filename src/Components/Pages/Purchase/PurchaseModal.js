import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const PurchaseModal = ({item, setTools, refetch}) => {
    const {_id, name, price } = item;
    const [User] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();
        refetch();

        const order = {
            orderId : _id,
            ProductName: name,
            price,
            purchaser: User.email,
            purchaserName: User.displayName,
            adress: event.target.adress.value,
            quantity: event.target.quantity.value
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
            if(data.success){
                toast("Appointment is set, at ")
            }
            else{
                toast.error('ABCD ')
            }
            setTools(data);
            refetch();

            });
    }


    return (
   
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Purchase for: {name}</h3>
                    <form  onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={User?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={User?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="quantity" placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="adress" placeholder="Adress" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div> 


    );
};

export default PurchaseModal;