document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("div");e.id="lightbox",e.className="lightbox-open",document.body.appendChild(e);const t=document.querySelectorAll('a[data-lightbox="projects"]');t.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();const o=document.createElement("img");o.src=t.href;while(e.firstChild){e.removeChild(e.firstChild)}e.appendChild(o),e.style.display="flex"})}),e.addEventListener("click",t=>{t.target!==t.currentTarget&& (e.style.display="none")})});
