document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("lightbox"),t=document.querySelector(".lightbox-slider"),n=document.querySelector(".close-btn"),c=document.querySelector(".prev-btn"),o=document.querySelector(".next-btn");let l=0,i=0,d=0;function r(){e.style.display="flex",document.body.style.overflow="hidden"}function s(){e.style.display="none",document.body.style.overflow=""}function a(e){const n=-e*100;t.style.transform=`translateX(${n}%)`,u(e)}function u(e){c.style.display=0===e?"none":"block",o.style.display=e===t.children.length-1?"none":"block"}function f(){l>0&&(l--,a(l))}function m(){l<t.children.length-1&&(l++,a(l))}n.addEventListener("click",s),c.addEventListener("click",f),o.addEventListener("click",m);const y=document.querySelectorAll('.project-gallery a[data-lightbox="projects"]');y.forEach((n,c)=>{n.addEventListener("click",i=>{i.preventDefault(),l=0,t.innerHTML="";const o=n.parentNode.querySelectorAll('a[data-lightbox="projects"] img, a[data-lightbox="projects"]:not(img)');o.forEach(e=>{const n=document.createElement("img");n.src=e.src||e.href,t.appendChild(n)}),r(),a(0)})}),e.addEventListener("touchstart",e=>{i=e.touches[0].clientX}),e.addEventListener("touchmove",e=>{d=e.touches[0].clientX}),e.addEventListener("touchend",()=>{i>d+50?m():i<d-50&&f()}),e.addEventListener("click",e=>{e.target===n&&s()})});
document.addEventListener('DOMContentLoaded', (event) => {
    function triggerVibration(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    function addHapticFeedback() {
        // Select all interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, img');

        // Add click event listener to each element
        interactiveElements.forEach(element => {
            element.addEventListener('click', () => triggerVibration(50));
        });
    }

    addHapticFeedback();
});


