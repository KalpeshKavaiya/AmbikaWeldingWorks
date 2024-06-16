document.addEventListener('DOMContentLoaded', function () {
    const projectsData = [
        { title: 'Project 1', image: 'images/project1.jpg', description: 'Description of project 1.' },
        { title: 'Project 2', image: 'images/project2.jpg', description: 'Description of project 2.' },
        { title: 'Project 3', image: 'images/project3.jpg', description: 'Description of project 3.' },
        { title: 'Project 4', image: 'images/project4.jpg', description: 'Description of project 4.' },
        { title: 'Project 5', image: 'images/project5.jpg', description: 'Description of project 5.' },
        { title: 'Project 6', image: 'images/project6.jpg', description: 'Description of project 6.' },
        { title: 'Project 7', image: 'images/project7.jpg', description: 'Description of project 7.' },
        { title: 'Project 8', image: 'images/project8.jpg', description: 'Description of project 8.' },
    ];

    const projectsPerPage = 3;
    let currentPage = 1;

    function displayProjects(page) {
        const start = (page - 1) * projectsPerPage;
        const end = start + projectsPerPage;
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = '';

        projectsData.slice(start, end).forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-md-4 project-card mb-4';
            projectCard.innerHTML = `
                <div class="card feature-card shadow-sm">
                    <div class="card-img-wrapper">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    </div>
                    <div class="card-body">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    function displayPagination() {
        const totalPages = Math.ceil(projectsData.length / projectsPerPage);
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = i;
                displayProjects(currentPage);
                displayPagination();
            });
            pagination.appendChild(pageItem);
        }
    }

    displayProjects(currentPage);
    displayPagination();
});
