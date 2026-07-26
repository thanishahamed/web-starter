const projectsContainer = document.getElementById("projects-container");
let projects = [];

const loadProjects = () => {
    if (!projectsContainer) {
        console.error("Projects container not found");
        return;
    }

    projects.forEach((project) => {
        const projectElement = document.createElement("article");

        projectElement.classList.add("project-card");

        projectElement.innerHTML = `
            <h3>${project.name}</h3>

            <p class="project-description">
                ${project.description}
            </p>

            <div class="technologies">
                ${project.technologies.map((technology) => `
                            <span class="technology">
                                ${technology}
                            </span>
                        `
                ).join("")}
            </div>
        `;

        projectsContainer.appendChild(projectElement);
    });
};

const clearProjects = () => {
    projects = [];

    projectsContainer.innerHTML = "";
}

const generate = () => {
    projects = [
        {
            id: 1,
            name: "Project 1",
            description: "This is a new project",
            technologies: ["Node", "Java", "Apple", "ABCD"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "This is another project",
            technologies: ["Node", "Java", "Apple"]
        }
    ];

    

    loadProjects();
}

generate();