import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { dataInvoices } from '../data/Invoice';

const Invoices = () => {
    return (
        <div>
            <h1>Invoices</h1>
            <Link to='newInvoice'>Go To New Invoice</Link>
            <div style={{display: 'flex'}}>
                <nav style={{padding: '1rem', borderRight: '1px solid black'}}>
                    {dataInvoices.map((invoice) => (
                        <Link style={{display: 'block', margin: '1rem'}} key={invoice.id} to={`${invoice.id}`}>{invoice.name}</Link>
                    ))}
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}

export default Invoices

// <Outlet/> Đây là 1 component (Nó giống như là children). <Outlet/> như <App>{children}</App>. Render ra cái giao diện của đường link con trong đường link cha
