import Project from "../models/Project";

function ProjectTile () {

var projects = [
        {
            "image": "../images/funny_placeholder.png",
            "title": "Project 1",
            "description": "this is the description for project 1"
        },
        {
            "image": "../images/funny_placeholder.png",
            "title": "Project 2",
            "description": "this is the description for project 2"
        },
        {
            "image": "../images/funny_placeholder.png",
            "title": "Project 3",
            "description": "this is the description for project 3"
        }
    ]

    return(
        <>
        {
            projects.map((project:Project) => {
                return(
                    <div className="p-4 m-4 bg-white rounded-xl shadow-xl">
                        <img src={project.image} className="object-fill sm:w-80"/>
                        <h1 className="font-bold text-2xl">{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
                )
            })
        }
        </>
    );
}

export default ProjectTile;