import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {
   
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense />
    </div>
  );
}

export default App;
