import ProjectTile from "../components/ProjectTile";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid justify-items-center pl-10 pr-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 md:gap-4 sm:grid-cols-1">
        <div className="lg:col-start-2 lg:col-end-3 md:col-start-1">
          <h1 className="shadow-xl bg-white rounded-xl text-4xl text-center font-bold p-3">
            Hello, I'm{" "}
            <div className="xl:text-6xl lg:text-xl md:text-5xl">
              Justin Holsclaw
            </div>
          </h1>
          <h1 className="text-3xl text-zinc-400 text-center font-bold md:mb-4 sm:mb-4">
            Software Engineer
          </h1>
          <div className="flex justify-center">
            <Link className=" text-2xl text-white border p-2 rounded-lg hover:bg-blue-200 hover:text-black sm:mb-4" to="/about">
              About me
            </Link>
          </div>
        </div>
        <div className="shadow-md lg:col-start-4 lg:col-end-5 md:col-start-2">
          <img
            src="../images/LinkinProfile.jpg"
            alt="filler"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="grid justify-items-center mt-4">
        <h1 className="text-5xl text-white font-bold">Projects</h1>
        <div className="lg:flex md:flex sm:grid justify-items-center">
          <ProjectTile />
        </div>
      </div>
    </div>
  );
}

export default Home;
