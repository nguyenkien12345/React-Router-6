import React from 'react'
import { useParams } from 'react-router-dom';
import { dataExpenses } from '../data/Expense';

const InvoiceDetail = () => {
    const params = useParams<{expenseId: string}>();

    const expense = dataExpenses.find(expense => expense?.id.toString() === params.expenseId);
    
    return (
        <div>
            {expense && <h2 style={{padding: '1rem'}}>Expense # {expense?.id} For {expense?.name}</h2>}
        </div>
    )
}

export default InvoiceDetail
