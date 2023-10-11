import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

function App() {
const users = [
  {
    id:"1",
    name:"Diya",
    city:"Valsad",
    age:"21",
  },

  {
    id:"1",
    name:"Kiya",
    city:"Vapi",
    age:"22",
  },

  {
    id:"1",
    name:"Tiya",
    city:"Surat",
    age:"20",
  },
  {
    id:"1",
    name:"Riya",
    city:"valsad",
    age:"21",
  },
];

  return (
    <div>
      
      <Users name={users[0].name} city={users[0].city} age={users[0].age} />
      <Users name={users[1].name} city={users[1].city} age={users[1].age} />
      <Users name={users[2].name} city={users[2].city} age={users[2].age} />
      <Users name={users[3].name} city={users[3].city} age={users[3].age} />
    </div>
  );
}

export default App;
