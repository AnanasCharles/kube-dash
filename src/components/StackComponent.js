
import { SiKubernetes, SiArgo, SiReact, SiRust, SiPostgresql } from "react-icons/si"
export default function StackComponent() {
    return (
        <>
        <div className="flex p-2">
          <a href="https://docker-server:31111" target="_blank" rel="noreferrer">
            <div>
              <SiKubernetes size={128} className="m-2" color="#326ce5" />
              <div className="bg-[#326ce5] p-2 rounded-md font-semibold tracking-wide shadow-md shadow-gray-900 animate hover:-translate-y-1 hover:bg-[rgba(50,108,229,0.75)] duration-200">K8S</div>
            </div>
          </a>
          <div className="m-4 mt-16">+</div>
          <a href="https://docker-server:31112" target="_blank" rel="noreferrer">
            <div>
              <SiArgo size={128} className="m-2" color="#ed820e" />
              <div className="bg-[#ed820e] p-2 rounded-md font-semibold tracking-wide shadow-md shadow-gray-900 animate hover:-translate-y-1 hover:bg-[rgba(237,129,14,0.75)] duration-200">ArgoCD</div>
            </div>
          </a>

          <div className="m-4 mt-16">+</div>
          <a href="#">

          <div>
            <SiReact size={128} className="m-2" color="#04d8f9" />
            <div className="bg-[#04d8f9] p-2 rounded-md font-semibold tracking-wide shadow-md shadow-gray-900 animate hover:-translate-y-1 hover:bg-[rgba(4,216,249,0.75)] duration-200">React</div>
          </div>
          </a>

          <div className="m-4 mt-16 opacity-20">+</div>

          {/* <a href="#"> */}
          <div>
            <SiRust size={128} className="m-2 cursor-pointer opacity-20" color="#b7410e" />
            <div className="opacity-20 bg-[#b7410e] p-2 rounded-md font-semibold tracking-wide shadow-md shadow-gray-900 cursor-pointer select-none">Rust</div>
            {/* <div className="opacity-20 bg-[#b7410e] p-2 rounded-md font-semibold tracking-wide shadow-md shadow-gray-900 animate hover:-translate-y-1 hover:bg-[rgba(183,65,14,0.75)] duration-200">Rust</button> */}
          </div>
          {/* </a> */}

          <div className="m-4 mt-16 opacity-20">+</div>

          {/* <a href="#"> */}
          <div>
            <SiPostgresql size={128} className="m-2 opacity-20" color="#336791" />
            <div className="opacity-20 bg-[#336791] p-2 rounded-md font-semibold tracking-wide shadow-md shadow-gray-900">PosgreSQL</div>
            {/* <div className="bg-[#336791] p-2 rounded-md font-semibold tracking-wide shadow-md shadow-gray-900 animate hover:-translate-y-1 hover:bg-[rgba(51,103,145,0.75)] duration-200">PosgreSQL</div> */}
          </div>
          {/* </a> */}
        </div>
        </>
    )
}