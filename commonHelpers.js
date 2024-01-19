import{S as v,i as u,a as w}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const S="/goit-js-hw-12/assets/error-cc3a3fd7.svg",h=document.querySelector(".searching-form"),n=document.querySelector(".button"),m=document.querySelector(".load-more-btn"),y=document.querySelector(".gallery"),k=document.querySelector(".container"),a={title:"",iconUrl:`${S}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"},f=40;let l=1,p,g,c,$=new v(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});h.addEventListener("submit",C);async function C(s){s.preventDefault(),q(),y.innerHTML="",l=1,E();const o=s.currentTarget.elements.searching.value.trim();p=encodeURIComponent(o),console.log(p),b().then(e=>{const i=e.data.totalHits;if(i===0)throw new Error("There are no images matching your search query. Please try again!");c=e.data.hits,L(c),i>f&&(B(),m.addEventListener("click",M))}).catch(e=>{u.error(a,a.message=`Sorry! ${e.message}`)}).finally(()=>{I()})}async function b(){return g={params:{key:"41547319-253ef689baf3db6007ef0d5b5",q:`${p}`,orientation:"horizontal",per_page:f,page:l,image_type:"photo",safesearch:!0,order:"likes"}},await w.get("https://pixabay.com/api/",g)}function M(){l+=1,b().then(s=>{const o=s.data.totalHits,e=Math.ceil(o/f);l===e&&(q(),u.info(a,a.message="You have reached the end of the search results.",a.backgroundColor="#B5EA7C")),c=s.data.hits,L(c)}).catch(s=>{u.error(a,a.message=`Sorry! ${s.message}`)}).finally(()=>{})}function L(s){const o=s.map(e=>`<li class="gallery-item"><div class='image-wrapper'>
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
</li>`).join("");y.insertAdjacentHTML("beforeend",o),$.refresh()}function B(){m.style.display="block"}function q(){m.style.display="none"}function E(){k.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),n.disabled=!0,n.classList.add("search-btn-disabled")}function I(){document.querySelector(".loader").remove(),n.disabled=!1,n.classList.remove("search-btn-disabled"),h.reset()}
//# sourceMappingURL=commonHelpers.js.map
