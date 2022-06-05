import React from 'react';
import Banner from '../Banner/Banner';
import BusinessPolicy from '../BusinessPolicy/BusinessPolicy';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';
import Suppliers from '../Suppliers/Suppliers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Suppliers></Suppliers>
            <BusinessPolicy></BusinessPolicy>
            <Footer></Footer>
        </div>
    );
};

export default Home;