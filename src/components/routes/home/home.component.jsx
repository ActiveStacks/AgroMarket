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
            title: 'WINE',
            imageUrl: ' https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 '
        },
        {
            id: 3,
            title: 'VEGETABLES',
            imageUrl: ' https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 '
        },
        {
            id: 4,
            title: 'FRUITS',
            imageUrl: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 '
        },
        {
            id: 5,
            title: 'SOFT DRINKS',
            imageUrl: 'https://images.unsplash.com/photo-1611464320499-e655ef77f4f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNva2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 '
        },
        {
            id: 5,
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
