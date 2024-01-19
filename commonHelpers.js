import{S as q,i as u,a as S}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const k="/goit-js-hw-12/assets/error-cc3a3fd7.svg",$="/goit-js-hw-12/assets/notification-0ba76ce7.svg",y=document.querySelector(".searching-form"),n=document.querySelector(".button"),p=document.querySelector(".load-more-btn"),h=document.querySelector(".gallery"),C=document.querySelector(".container"),i={title:"",iconUrl:`${k}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"},m=40;let l=1,g,f,c,I=new q(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});y.addEventListener("submit",M);async function M(o){o.preventDefault(),w(),h.innerHTML="",l=1,E();const s=o.currentTarget.elements.searching.value.trim();g=encodeURIComponent(s),console.log(g),b().then(e=>{const a=e.data.totalHits;if(a===0)throw new Error("There are no images matching your search query. Please try again!");c=e.data.hits,v(c),a>m&&(B(),p.addEventListener("click",L))}).catch(e=>{u.error(i,i.message=`Sorry! ${e.message}`)}).finally(()=>{P()})}async function b(){return f={params:{key:"41547319-253ef689baf3db6007ef0d5b5",q:`${g}`,orientation:"horizontal",per_page:m,page:l,image_type:"photo",safesearch:!0,order:"likes"}},await S.get("https://pixabay.com/api/",f)}function L(){l+=1,b().then(o=>{const s=o.data.totalHits,e=Math.ceil(s/m);l===e&&(removeEventListener("click",L),w(),u.info(i,i.iconUrl=`${$}`,i.message="We're sorry, but you've reached the end of search results.",i.backgroundColor="#0ab6f5")),c=o.data.hits,v(c),x()}).catch(o=>{u.error(i,i.message=`Sorry! ${o.message}`)}).finally(()=>{})}function v(o){const s=o.map(e=>`<li class="gallery-item"><div class='image-wrapper'>
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
</li>`).join("");h.insertAdjacentHTML("beforeend",s),I.refresh()}function B(){p.style.display="block"}function w(){p.style.display="none"}function E(){C.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),n.disabled=!0,n.classList.add("search-btn-disabled")}function P(){document.querySelector(".loader").remove(),n.disabled=!1,n.classList.remove("search-btn-disabled"),y.reset()}function x(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;console.log(s),window.scrollBy({top:s*2+72,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
