class Project {
    image: string;
    title: string;
    link: string;
    description: string;

    constructor(image:string, title:string, description:string, link: string) {
        this.image = image;
        this.title = title;
        this.link = link;
        this.description = description;
    }
}

export default Project;