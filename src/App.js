import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initialValue={5} incrementAmount={2} incrementInterval={500} />
      </header>
      
    </div>
  );
}
export default App;
