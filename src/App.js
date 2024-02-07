import "./App.css";
import { SiKubernetes, SiReact, SiArgo } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-4xl font-bold tracking-wide">Docker-Server</div>
        <div className="flex p-2">
          <a href="https://docker-server:31111" target="_blank" rel="noreferrer">
          <div>
            <SiKubernetes size={128} className="m-2" color="#326ce5" />
            <div className="bg-blue-600 p-2 rounded-md">K8S</div>
          </div>
          </a>
          <div className="m-4 mt-16">+</div>
          <a href="https://docker-server:31112" target="_blank" rel="noreferrer">
          <div>
            <SiArgo size={128} className="m-2" color="#ed820e" />
            <div className="bg-orange-600 p-2 rounded-md">ArgoCD</div>
          </div>
          </a>

          <div className="m-4 mt-16">+</div>
          <div>
            <SiReact size={128} className="m-2" color="#04d8f9" />
            <div className="bg-blue-500 p-2 rounded-md">React</div>
          </div>
        </div>
        {/* <div className='flex'>
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
        </div> */}
      </header>
    </div>
  );
}

export default App;
