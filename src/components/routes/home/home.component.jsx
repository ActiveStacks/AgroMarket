//import './categories.styles.scss'

import React from 'react';
import Directory from '../../directory/directory.component';
import { Outlet } from 'react-router-dom';


const Home = () => {

    const categories = [
        {
            id: 1,
            title: 'BURGER',
            imageUrl: "https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
        },
        {
            id: 2,
            title: 'BREAD',
            imageUrl: ' https://media.istockphoto.com/photos/heap-of-bread-picture-id995038782?b=1&k=20&m=995038782&s=170667a&w=0&h=DhnB0WJOySvxTwwCOeUagMmDCGFEykDxZsCgmkOSIZM='
        },
        {
            id: 3,
            title: 'CAKES',
            imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 '
        },
        {
            id: 5,
            title: 'NUTS',
            imageUrl: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },

        {
            id: 4,
            title: 'FRUITS',
            imageUrl: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 '
        },

        {
            id: 3,
            title: 'VEGETABLES',
            imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 '
        },
        {
            id: 6,
            title: 'WINE',
            imageUrl: ' https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 '
        },
        {
            id: 8,
            title: 'SOFT DRINKS',
            imageUrl: 'https://images.unsplash.com/photo-1611464320499-e655ef77f4f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNva2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 '
        },
        {
            id: 9,
            title: 'BARBECUE',
            imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVjdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 '
        }
    ]

    return (
        <div>
            <Outlet />
            <Directory categories={categories} />

        </div>

    );
}


export default Home;
