import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [User] = useAuthState(auth);
    return (
        <div className='m-10'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{User.displayName}</h2>
                    <p>Email : {User.email}</p>
                    <p>adress : {User?.adress  || ""}</p>
                    <p>Phone : {User?.phone || ""}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;