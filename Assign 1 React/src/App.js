import logo from './logo.svg';
import './App.css';
import {arr} from './components/data'
import UserList from './components/UserList'
import UserTable from './components/UserTable'

function App(){
   return(
    <div class="App">
    <UserList arr1={arr}/>
    <UserTable arr1={arr}/>
    </div>
   );
}


export default App;
