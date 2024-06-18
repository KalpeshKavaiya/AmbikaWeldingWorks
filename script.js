document.addEventListener("DOMContentLoaded",function(){let e=[{title:"Project 1",image:"images/project1.webp",description:"Description of project 1."},{title:"Project 2",image:"images/project2.webp",description:"Description of project 2."},{title:"Project 3",image:"images/project3.webp",description:"Description of project 3."},{title:"Project 4",image:"images/project4.webp",description:"Description of project 4."},{title:"Project 5",image:"images/project5.jpg",description:"Description of project 5."},{title:"Project 6",image:"images/project6.jpg",description:"Description of project 6."},{title:"Project 7",image:"images/project7.jpg",description:"Description of project 7."},{title:"Project 8",image:"images/project8.jpg",description:"Description of project 8."}],i=1;function t(e){let t=(i-1)*3,r=document.getElementById("projects-container");r.innerHTML="",e.slice(t,t+3).forEach(e=>{let i=document.createElement("div");i.className="col-md-4 project-card mb-4",i.innerHTML=`
                <div class="card feature-card shadow-sm">
                    <div class="card-img-wrapper">
                        <img src="${e.image}" class="card-img-top" alt="${e.title}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <h4>${e.title}</h4>
                        <p>${e.description}</p>
                    </div>
                </div>
            `,r.appendChild(i)})}t(e),function r(){let c=Math.ceil(e.length/3),o=document.getElementById("pagination");o.innerHTML="";for(let n=1;n<=c;n++){let a=document.createElement("li");a.className=`page-item ${n===i?"active":""}`,a.innerHTML=`<a class="page-link" href="#">${n}</a>`,a.addEventListener("click",function(c){c.preventDefault(),i=n,t(e),r()}),o.appendChild(a)}}(),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("Service Worker registered with scope:",e.scope)}).catch(function(e){console.error("Service Worker registration failed:",e)})})});
