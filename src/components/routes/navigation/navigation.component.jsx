import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';
import ReactLogo from '../../assets/logo.png';

//import { ReactComponent as FarmLogo } from '../../assets/logoFarm.svg';


const Navigation = () => {
    return (
        < Fragment >
            < div className='navigation' >
                <Link className='logo-container' to='/'>
                    <img src={ReactLogo} alt="React Logo" className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div >
            <Outlet />
        </Fragment >
    )

}

export default Navigation;


















// const Shopp = () => {
//     return (
//         <div>
//             <h1> I AM THE SHOP component</h1>
//             <Outlet />
//         </div>
//     )


// }

// export default Shopp;







