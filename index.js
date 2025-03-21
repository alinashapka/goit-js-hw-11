import{a as f,i as c,S as u}from"./assets/vendor-DEZpR2tN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();function p(s){return f.get("https://pixabay.com/api/",{params:{key:"49456082-a9826f5e30a55e93368b2873a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>{throw console.error("Error fetching images",e),e})}let l;function d(s,o){if(o.innerHTML="",s.length===0){c.error({position:"topRight",backgroundColor:" #ef4040",messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=s.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="image-info">
            <p><span class="label">Likes:</span>${e.likes}</p>
            <p><span class="label">Views:</span>${e.views}</p>
            <p><span class="label">Comments:</span>${e.comments}</p>
            <p><span class="label">Downloads:</span>${e.downloads}</p>
          </div>
        </li>
    `).join("");o.innerHTML=i,l?l.refresh():l=new u(".gallery-link",{captionsData:"alt",captionDelay:250})}const m=document.querySelector(".form"),g=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.visibility="hidden";m.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){c.error({title:"Error!",position:"topRight",backgroundColor:" #ef4040",messageColor:"#ffffff",message:"Please, enter a search query!"});return}a.style.visibility="visible",p(o).then(i=>{d(i,g),a.style.visibility="hidden"}).catch(i=>{c.error({title:"Error!",position:"topRight",backgroundColor:" #ef4040",messageColor:"#ffffff",message:"Error fetching images"}),a.style.visibility="hidden"})});
//# sourceMappingURL=index.js.map
