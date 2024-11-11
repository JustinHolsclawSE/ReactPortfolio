import Project from "../models/Project";

function ProjectTile () {

var projects = [
        {
            "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmrslaug.weebly.com%2Fuploads%2F1%2F4%2F7%2F4%2F14749530%2F5390895_orig.gif&f=1&nofb=1&ipt=ce5051a164754ad8288531c16f66661bfc7ccb274b606ff38ace7aab1a4f7882&ipo=images",
            "title": "Photo Angle Measurement Application",
            "link": "https://justinholsclawse.github.io/WorkoutApp/",
            "description": "This project is a work in progress of an application I am developing that measure angles in a video."
        },
        {
            "image": "../images/funny_placeholder.png",
            "title": "Project 2",
            "link": "https://justinholsclawse.github.io/WorkoutApp/",
            "description": "this is the description for project 2"
        },
        {
            "image": "../images/funny_placeholder.png",
            "title": "Project 3",
            "link": "https://justinholsclawse.github.io/WorkoutApp/",
            "description": "this is the description for project 3"
        }
    ]

    return(
        <>
        {
            projects.map((project:Project) => {
                return(
                    <div className="p-4 m-4 bg-white rounded-xl shadow-xl">
                        <img src={project.image} className="object-fill sm:w-80" alt="filler"/>
                        <h1 className="font-bold text-2xl">{project.title}</h1>
                        <a className="btn btn-blue" href={project.link}>Github Link</a>
                        <p >{project.description}</p>
                    </div>
                )
            })
        }
        </>
    );
}

export default ProjectTile;