import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const Review = () => {

    const [user] = useAuthState(auth);
    const handleReview = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const reviewText = event.target.reviewText.value;
        const rating = event.target.rating.value;
        const email = user?.email;

        const review = {
            name: name,
            reviewText : reviewText,
            rating : rating,
            email : email,

        }

        const url = 'https://gentle-fortress-48614.herokuapp.com/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your review has been Added')
                }
            })
        event.target.reset();
    }




    return (
        <div className='m-10'>
            <h2 className='text-center text-2xl font-bold text-primary'>Give your valuable reveiew to Elegent AutoParts</h2>

            <div>
                <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <textarea name="reviewText" placeholder="Type  short review here" className="input input-bordered w-full max-w-xs" required />
                    <input type="number" name="rating" min="1" max="5" placeholder="Rating Out of 5"  className="input input-bordered w-full max-w-xs" requierd />
                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Review;