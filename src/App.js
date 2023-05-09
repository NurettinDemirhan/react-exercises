import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import InteractiveWelcome from './interactive-welcome/InteractiveWelcome';
import Login from "./Login"

function App() {
  const handleLogin = (userInfo) => {
    console.log("Logging in with:", userInfo);
  };
  const handleLogin2 = (username, password, rememberMe) => {
    console.log(`Username: ${username}, Password: ${password}, Remember me: ${rememberMe}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InteractiveWelcome/>
        {/* <Counter initialValue={5} incrementAmount={2} incrementInterval={500} />
        <ClickCounter/>
        <ClickTracker/> */}
        <Login onLogin={handleLogin} />
        <UncontrolledLogin onLogin={handleLogin2} />
      </header>
      
    </div>
  );
}
export default App;
