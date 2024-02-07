import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='flex'>
          <div className='bg-blue-600 p-2 rounded-md m-2'>
            K8S
          </div>
          <div className='p-2 m-2'>
            +
          </div>
          <div className='bg-orange-600 p-2 rounded-md m-2'>
            ArgoCD
          </div>
          <div className='p-2 m-2'>
            +
          </div>
          <div className='bg-blue-500 p-2 rounded-md m-2'>
            React
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
