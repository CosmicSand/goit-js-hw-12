import{S as w,i as u,a as k}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="/goit-js-hw-12/assets/error-cc3a3fd7.svg",$="/goit-js-hw-12/assets/notification-0ba76ce7.svg",h=document.querySelector(".searching-form"),n=document.querySelector(".button"),f=document.querySelector(".load-more-btn"),y=document.querySelector(".gallery"),C=document.querySelector(".container"),i={title:"",iconUrl:`${S}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"},m=40;let l=1,p,g,c,M=new w(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});h.addEventListener("submit",I);async function I(s){s.preventDefault(),q(),y.innerHTML="",l=1,x();const r=s.currentTarget.elements.searching.value.trim();p=encodeURIComponent(r),console.log(p),b().then(e=>{const a=e.data.totalHits;if(a===0)throw new Error("There are no images matching your search query. Please try again!");c=e.data.hits,v(c),a>m&&(E(),f.addEventListener("click",L))}).catch(e=>{u.error(i,i.message=`Sorry! ${e.message}`)}).finally(()=>{B()})}async function b(){return g={params:{key:"41547319-253ef689baf3db6007ef0d5b5",q:`${p}`,orientation:"horizontal",per_page:m,page:l,image_type:"photo",safesearch:!0,order:"likes"}},await k.get("https://pixabay.com/api/",g)}function L(){l+=1,b().then(s=>{const r=s.data.totalHits,e=Math.ceil(r/m);l===e&&(removeEventListener("click",L),q(),u.info(i,i.iconUrl=`${$}`,i.message="You have reached the end of the search results.",i.backgroundColor="#0ab6f5")),c=s.data.hits,v(c)}).catch(s=>{u.error(i,i.message=`Sorry! ${s.message}`)}).finally(()=>{})}function v(s){const r=s.map(e=>`<li class="gallery-item"><div class='image-wrapper'>
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
</li>`).join("");y.insertAdjacentHTML("beforeend",r),M.refresh()}function E(){f.style.display="block"}function q(){f.style.display="none"}function x(){C.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),n.disabled=!0,n.classList.add("search-btn-disabled")}function B(){document.querySelector(".loader").remove(),n.disabled=!1,n.classList.remove("search-btn-disabled"),h.reset()}
//# sourceMappingURL=commonHelpers.js.map
