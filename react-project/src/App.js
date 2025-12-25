import logo from './logo.svg';
import './App.css';
import DashBoard from './context-api/DashBoard';
import { UserContext } from './context-api/UserContext';

function App() {
  const username="pavan kumar";

  return (
    <div className="App">
      <UserContext.Provider value={username}>
      <DashBoard/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
