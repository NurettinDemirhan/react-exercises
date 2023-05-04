import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import InteractiveWelcome from './interactive-welcome/InteractiveWelcome';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InteractiveWelcome/>
        {/* <Counter initialValue={5} incrementAmount={2} incrementInterval={500} />
        <ClickCounter/>
        <ClickTracker/> */}
        <Login/>
      </header>
      
    </div>
  );
}
export default App;
