import{S as k,i as u,a as $}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const C="/goit-js-hw-12/assets/error-cc3a3fd7.svg",B="/goit-js-hw-12/assets/notification-0ba76ce7.svg",y=document.querySelector(".searching-form"),a=document.querySelector(".button"),m=document.querySelector(".load-more-btn"),h=document.querySelector(".gallery"),I=document.querySelector(".container"),i={title:"",iconUrl:`${C}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"},g=40;let l=1,p,f,c,M=new k(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});y.addEventListener("submit",E);function E(o){o.preventDefault(),v(),h.innerHTML="",l=1,q();const s=o.currentTarget.elements.searching.value.trim();p=encodeURIComponent(s),console.log(p),b().then(e=>{const n=e.data.totalHits;if(n===0)throw new Error("There are no images matching your search query. Please try again!");c=e.data.hits,w(c),document.addEventListener("scroll",O),n>g&&(T(),m.addEventListener("click",L))}).catch(e=>{u.error(i,i.message=`Sorry! ${e.message}`)}).finally(()=>{S()})}async function b(){return f={params:{key:"41547319-253ef689baf3db6007ef0d5b5",q:`${p}`,orientation:"horizontal",per_page:g,page:l,image_type:"photo",safesearch:!0,order:"likes"}},await $.get("https://pixabay.com/api/",f)}function L(){q(),l+=1,b().then(o=>{const s=o.data.totalHits,e=Math.ceil(s/g);l===e&&(removeEventListener("click",L),v(),u.info(i,i.iconUrl=`${B}`,i.message="We're sorry, but you've reached the end of search results.",i.backgroundColor="#0ab6f5")),c=o.data.hits,w(c),P()}).catch(o=>{u.error(i,i.message=`Sorry! ${o.message}`)}).finally(()=>{S()})}function w(o){const s=o.map(e=>`<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
      width="360"
      height="200"
    />
    </a>
    <div class="gallery-item-description">
<ul class='gallery-item-description-list'>
<li class='description-list-item'>
<p class='description'>Likes</p>
<p class='quantity'>${e.likes}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${e.views}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${e.comments}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${e.downloads}</p>
</li>
</ul>
    </div>
    </div>
</li>`).join("");h.insertAdjacentHTML("beforeend",s),M.refresh()}function T(){m.style.display="block"}function v(){m.style.display="none"}function q(){I.insertAdjacentHTML("beforeend",'<span class="loader"></span>'),a.disabled=!0,a.classList.add("search-btn-disabled")}function S(){document.querySelector(".loader").remove(),a.disabled=!1,a.classList.remove("search-btn-disabled"),y.reset()}function O(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function P(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2+72,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
