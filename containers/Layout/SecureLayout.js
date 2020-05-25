import React from 'react';

import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Sidebar from './../../components/Sidebar/Sidebar';

function SecureLayout(props) {
    return (
        <>
            <Header />
            <Sidebar />
            <section role="main">
                {
                    props.children
                }
            </section>
            <Footer />
        </>
    )
}

export default SecureLayout;