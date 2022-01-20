import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataInvoices } from '../data/Invoice';

const InvoiceDetail = () => {

    const params = useParams<{invoiceId: string}>();

    const invoice = dataInvoices.find(invoice => invoice?.id.toString() === params.invoiceId);

    const navigate = useNavigate();

    useEffect(() => {
        if(!invoice) navigate('/invoices');
    },[invoice])
    
    return (
        <div>
            {invoice && <h2 style={{padding: '1rem'}}>Invoice # {invoice?.id} For {invoice?.name}</h2>}
        </div>
    )
}

export default InvoiceDetail
