document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("lightbox"),t=document.querySelector(".lightbox-slider"),n=document.querySelector(".close-btn"),o=document.querySelector(".prev-btn"),c=document.querySelector(".next-btn");let r=0;function d(e){const n=100*-e;t.style.transform=`translateX(${n}%)`,function(e){o.style.display=0===e?"none":"block",c.style.display=e===t.children.length-1?"none":"block"}(e)}function l(){r>0&&(r--,d(r))}function i(){r<t.children.length-1&&(r++,d(r))}n.addEventListener("click",(function(){e.style.display="none",document.body.style.overflow=""})),o.addEventListener("click",l),c.addEventListener("click",i);document.querySelectorAll('.project-gallery a[data-lightbox="projects"]').forEach((n=>{n.addEventListener("click",(function(o){o.preventDefault(),r=0,t.innerHTML="";n.parentNode.querySelectorAll('a[data-lightbox="projects"] img, a[data-lightbox="projects"]:not(img)').forEach((e=>{const n=document.createElement("img");n.src=e.src||e.href,t.appendChild(n)})),e.style.display="flex",document.body.style.overflow="hidden",d(r)}))})),document.addEventListener("keydown",(function(e){"ArrowLeft"===e.key?l():"ArrowRight"===e.key&&i()}))})),function(){var e=new XMLHttpRequest;e.open("GET","favicons.html",!0),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var t=document.createElement("div");t.innerHTML=e.responseText,Array.from(t.children).forEach((function(e){document.head.appendChild(e)}))}},e.send()}();
