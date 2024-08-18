import{i as u,S as m}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=r=>` 
<li class="gallery-item">
  <div>
    <a
      class="gallery-link"
      href="${r.largeImageURL}"
      onclick="return false"
    >
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
      />
    </a>

    <ul class="card">
      <li class="card-item">
        <h3 class="card-item-title">Likes</h3>
        <p class="card-item-inf">${r.likes}</p>
      </li>
      <li class="card-item">
        <h3 class="card-item-title">Views</h3>
        <p class="card-item-inf">${r.views}</p>
      </li>
      <li class="card-item">
        <h3 class="card-item-title">Comments</h3>
        <p class="card-item-inf">${r.comments}</p>
      </li>
      <li class="card-item">
        <h3 class="card-item-title">Downloads</h3>
        <p class="card-item-inf">${r.downloads}</p>
      </li>
    </ul>
  </div>
</li>
    `,l=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),n=document.querySelector(".loader");function h(r){r.preventDefault(),n.classList.add("js-loader");const a=l.elements.user_query.value,o="https://pixabay.com/api/";(e=>{const t=new URLSearchParams({key:"45487813-fe5f6ff630a438f35d0eece69",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:200});return fetch(`${o}?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})})().then(e=>{if(n.classList.remove("js-loader"),e.total===0){u.error({position:"topRight",message:"Sorry, there are no images matching <br> your search query. Please try again!"}),i.innerHTML="",l.reset();return}const t=e.hits.map(d=>f(d)).join(""),s=document.querySelector(".gallery");s.innerHTML=t,new m(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(e=>{console.log(e)}),i.innerHTML="",l.reset()}l.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
