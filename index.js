import{a as p,S as f,i as o}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u="https://pixabay.com/api/",d="54663949-13f76c0603320688597afb8b9";async function m(a){return(await p.get(u,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-spinner"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(t=>`
<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item">
      <span class="info-title">Likes</span>
      <span class="info-value">${t.likes}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Views</span>
      <span class="info-value">${t.views}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Comments</span>
      <span class="info-value">${t.comments}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Downloads</span>
      <span class="info-value">${t.downloads}</span>
    </p>
  </div>
</li>
`).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function h(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async a=>{a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){o.warning({message:"Please fill in the search field!",position:"topRight"});return}h(),L();try{const t=await m(r);if(t.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch{o.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
