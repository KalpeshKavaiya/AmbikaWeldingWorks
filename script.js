document.addEventListener('DOMContentLoaded',function(){const e=[{title:'Project 1',image:'images/project1.webp',description:'Description of project 1.'},{title:'Project 2',image:'images/project2.webp',description:'Description of project 2.'},{title:'Project 3',image:'images/project3.webp',description:'Description of project 3.'},{title:'Project 4',image:'images/project4.webp',description:'Description of project 4.'},{title:'Project 5',image:'images/project5.jpg',description:'Description of project 5.'},{title:'Project 6',image:'images/project6.jpg',description:'Description of project 6.'},{title:'Project 7',image:'images/project7.jpg',description:'Description of project 7.'},{title:'Project 8',image:'images/project8.jpg',description:'Description of project 8.'}];const t=3;let n=1;function o(e){const t=(e-1)*projectsPerPage,n=t+projectsPerPage,r=document.getElementById('projects-container');r.innerHTML='',projectsData.slice(t,n).forEach(e=>{const t=document.createElement('div');t.className='col-md-4 project-card mb-4',t.innerHTML=`
    <div class="card feature-card shadow-sm">
        <div class="card-img-wrapper">
            <img src="${e.image}" class="card-img-top" alt="${e.title}">
        </div>
        <div class="card-body">
            <h4>${e.title}</h4>
            <p>${e.description}</p>
        </div>
    </div>
`,r.appendChild(t)})}function r(){const e=Math.ceil(projectsData.length/projectsPerPage),t=document.getElementById('pagination');t.innerHTML='';for(let n=1;n<=e;n++){const e=document.createElement('li');e.className=`page-item ${n===currentPage?'active':''}`,e.innerHTML=`<a class="page-link" href="#">${n}</a>`,e.addEventListener('click',function(t){t.preventDefault(),currentPage=n,o(currentPage),r()}),t.appendChild(e)}}o(currentPage),r()});
