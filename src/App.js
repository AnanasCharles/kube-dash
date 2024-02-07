import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='bg-green-500 font-bold tracking-widest p-2 rounded-lg'>
          Hello
        </div>
        <div className='bg-green-500 font-bold tracking-widest p-2 rounded-lg m-2'>
          Docker-Server
        </div>
        <div className='bg-green-500 font-bold tracking-widest p-2 rounded-lg'>
          K8S
        </div>
      </header>
    </div>
  );
}

export default App;
