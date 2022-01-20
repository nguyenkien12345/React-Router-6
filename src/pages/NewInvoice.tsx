import React from 'react';

const NewInvoices = () => {
    return (
        <form style={{padding: '1rem'}}>
            <label style={{display: 'block'}} htmlFor='new-invoice'>New Invoice Name</label>
            <input type="text"   name="new-invoice" id="new-invoice" />
            <input type="submit" value="Create New Invoice" />
        </form>
    )
}

export default NewInvoices