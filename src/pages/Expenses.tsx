import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { dataExpenses } from '../data/Expense';

const Expenses = () => {
    return (
        <div>
            <h1>Expenses</h1>
            <div style={{display: 'flex'}}>
                <nav style={{padding: '1rem', borderRight: '1px solid black'}}> 
                    {dataExpenses.map((expense) => (
                        <Link style={{display: 'block', margin: '1rem'}} key={expense?.id} to={`${expense.id}`}>{expense?.name}</Link>
                    ))}
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}

export default Expenses

// <Outlet/> Đây là 1 component (Nó giống như là children). <Outlet/> như <App>{children}</App>. Render ra cái giao diện của đường link con trong đường link cha
