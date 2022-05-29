import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {


    const [User] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    const headermenu = <>
        <li><Link to='/'>Hone</Link></li>
        <li><Link to='portfolio'>Portfolio</Link></li>
        <li><Link to='product'>Product</Link></li>
        <li><Link to='blog'>Blog</Link></li>
        <li><Link to='contact'>Contact</Link></li>


        {
            User ?
                <div className='flex'>
                    <li><Link to='dashboard'>Dashboard</Link></li>
                    <li><Link to='login' onClick={handleSignOut}>SignOut</Link></li>
                </div>
                :
                <li><Link to='login'>Login</Link></li>
        }



    </>

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headermenu}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case font-bold text-3xl"> <span className='text-primary'>ElEgEnT </span>  <span className='text-secondary ml-2'> AuToPaRtS</span></Link>
            </div>
            <div class="hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {headermenu}
                </ul>
            </div>
        </div>
    );
};

export default Header;