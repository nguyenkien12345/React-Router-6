import React from 'react';

const NewExpense = () => {
    return (
        <form style={{padding: '1rem'}}>
            <label htmlFor='new-expense'>New Expense Name</label>
            <input type="text"   name="new-expense" id="new-expense" />
            <input type="submit" value="Create New Expense" />
        </form>
    )
}

export default NewExpense