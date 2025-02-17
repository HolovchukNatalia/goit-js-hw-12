import{a as p,S as d,i as u}from"./assets/vendor-DYLXiCJH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="48843638-b89903974de20d086a3125d9e",y="https://pixabay.com/api/";function m(s){return p.get(y,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error("Error fetching images:",t),[]))}const i=document.querySelector(".gallery"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,showCounter:!1,animationSlide:!0});function h(s){if(s.length===0){u.show({position:"topRight",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please, try again!"}),i.innerHTML="";return}const t=s.map(r=>`<li class="gallery-item">
        <a href="${r.largeImageURL}" class="gallery-link">
          <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}"/>
        </a>
        <div class="gallery-stats">
          <p>Likes <span>${r.likes}</span></p>
          <p>Views <span>${r.views}</span></p>
          <p>Comments <span>${r.comments}</span></p>
          <p>Downloads <span>${r.downloads}</span></p>
        </div>
      </li>`).join("");i.innerHTML=t,g.refresh()}const L=document.querySelector(".form"),l=document.querySelector(".input"),c=document.querySelector(".loader"),b=document.querySelector(".gallery");L.addEventListener("submit",function(s){s.preventDefault();const t=l.value.trim();if(t===""){u.show({message:"Please enter a search query",position:"topRight",backgroundColor:"red"});return}c.style.display="block",b.innerHTML="",l.value="",m(t).then(r=>{setTimeout(()=>{h(r),c.style.display="none"},1e3)})});
//# sourceMappingURL=index.js.map
