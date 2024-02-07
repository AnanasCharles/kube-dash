import { Link } from "react-router-dom";
import "../App.css";
import { SiKubernetes, SiReact, SiArgo, SiRust, SiPostgresql } from "react-icons/si";
import StackComponent from "../components/StackComponent";

function WelcomePage() {
  return (
    <div className="Container">
      <div className="text-center w-full absolute grid grid-cols-1 top-10 text-4xl font-bold tracking-wide">
        <span>
          Docker-Server
        </span>
        <span>
          Panel
        </span>
      </div>

      <div className="App-header">
        <StackComponent />
      </div>

      <div className="flex absolute bottom-10 justify-center w-full">
        <Link to="/panel">

          <div className="bg-[#ed820e] p-2 rounded-lg text-gray-800 font-semibold shadow-md shadow-gray-900 animate hover:-translate-y-1 hover:bg-[rgba(237,129,14,0.75)] duration-200 select-none">
            Enter Panel
          </div>
        </Link>

      </div>
      <div className="absolute bottom-0 right-0 p-2 text-gray-400">
        by Ananas Charles
      </div>
    </div>
  );
}

export default WelcomePage;
