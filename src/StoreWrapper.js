import React, { useReducer ,useEffect} from 'react';
import {ExpenseAndIncomeReducer,calculateExpenseAndIncome} from './reducer/ExpenseAndIncome';
import {ExpenseAndIncomeProvider} from './Context/ExpenseAndIncome';

function StoreWrapper({children}) {

    const [account,dispatch]=useReducer(ExpenseAndIncomeReducer,{
        current_balance:0,
        previous_balance:0,
        income:0,
        expense:0,
        history:[
            {money:0,whereby:''},
            {money:0,whereby:''}
        ] 
    })

    useEffect(() => {
      calculateExpenseAndIncome(account,dispatch);
    }, [])

    return (
       <ExpenseAndIncomeProvider value={{account,dispatch}}>
        {children}
       </ExpenseAndIncomeProvider>
    )
}

export default StoreWrapper
