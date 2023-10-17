import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


const Expense = (props) => {

 
 
const[filteredYear , setFilteredYear]=useState("2021");


// let filterInfoText = "2020,2022 & 2023";
// if(filteredYear === '2020'){
//   filterInfoText ="2021,2022 & 2023";
// }  else if(filteredYear === '2022'){
//   filterInfoText = "2020,2021 & 2023";
// } else {
//   filterInfoText = "2020, 2021 & 2022";
// }
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);

   
  }

  return (
 

    <div>
      
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {/* <p>Data For Year {filterInfoText} is Hidden.</p> */}
    {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
     
    </Card>
    </div>
  );
}

export default Expense;