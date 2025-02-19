import{a as p,S as d,i as u}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const y="48843638-b89903974de20d086a3125d9e",f="https://pixabay.com/api/";async function m(s){try{return(await p.get(f,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){return console.error("Error fetching images:",r),[]}}const i=document.querySelector(".gallery"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,showCounter:!1,animationSlide:!0});function h(s){if(s.length===0){u.show({position:"topRight",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please, try again!"}),i.innerHTML="";return}const r=s.map(t=>`<li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
        <div class="gallery-stats">
          <p>Likes <span>${t.likes}</span></p>
          <p>Views <span>${t.views}</span></p>
          <p>Comments <span>${t.comments}</span></p>
          <p>Downloads <span>${t.downloads}</span></p>
        </div>
      </li>`).join("");i.innerHTML=r,g.refresh()}const L=document.querySelector(".form"),l=document.querySelector(".input"),c=document.querySelector(".loader"),b=document.querySelector(".gallery");L.addEventListener("submit",function(s){s.preventDefault();const r=l.value.trim();if(r===""){u.show({message:"Please enter a search query",position:"topRight",backgroundColor:"red"});return}c.style.display="block",b.innerHTML="",l.value="",m(r).then(t=>{setTimeout(()=>{h(t),c.style.display="none"},1e3)})});
//# sourceMappingURL=index.js.map
