import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import './navigation.styles.scss';
import ReactLogo from '../../assets/logo.png';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';
import { signOutUser } from '../../../utils/firebase.utils';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropDown from '../../cart-dropdown/cart-dropdown.component';

//import { ReactComponent as FarmLogo } from '../../assets/logoFarm.svg';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);


    return (
        < Fragment >
            < div className='navigation' >
                <Link className='logo-container' to='/'>
                    <img src={ReactLogo} alt="React Logo" className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/about'>
                        ABOUT US
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT US
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={signOutUser}> {''}     SIGN OUT{''} </span>) :
                        (<Link className='nav-link' to='/auth'> SIGN IN </Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
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







