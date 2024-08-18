import{S as n,i as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="https://pixabay.com/api/",m=r=>{const o=new URLSearchParams({key:"45487813-fe5f6ff630a438f35d0eece69",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:200});return fetch(`${u}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},f=r=>` 
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
    `,a=document.querySelector(".js-search-form"),h=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),p=new n(".gallery a");function y(r){r.preventDefault(),i.classList.add("js-loader");const o=a.elements.user_query.value;m(o).then(s=>{if(i.classList.remove("js-loader"),s.total===0){d.error({position:"topRight",message:"Sorry, there are no images matching <br> your search query. Please try again!"}),h.innerHTML="",a.reset();return}const l=s.hits.map(t=>f(t)).join(""),e=document.querySelector(".gallery");e.innerHTML=l,p.refresh(),a.reset()}).catch(s=>{console.log(s)})}a.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
