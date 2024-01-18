import{S as L,i as g,a as q}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const w="/goit-js-hw-12/assets/error-cc3a3fd7.svg",f=document.querySelector(".searching-form"),a=document.querySelector(".button"),u=document.querySelector(".load-more-btn"),y=document.querySelector(".gallery"),v=document.querySelector(".container"),i={title:"",iconUrl:`${w}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"},S=40;let p=1,d,m,n,$=new L(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});f.addEventListener("submit",k);async function k(s){s.preventDefault(),E(),y.innerHTML="",p=1,I();const o=s.currentTarget.elements.searching.value.trim();d=encodeURIComponent(o),console.log(d),h().then(t=>{if(t.data.totalHits===0)throw new Error("There are no images matching your search query. Please try again!");n=t.data.hits,b(n),M(),u.addEventListener("click",C)}).catch(t=>{g.error(i,i.message=`Sorry! ${t.message}`)}).finally(()=>{T()})}async function h(){return m={params:{key:"41547319-253ef689baf3db6007ef0d5b5",q:`${d}`,orientation:"horizontal",per_page:S,page:p,image_type:"photo",safesearch:!0,order:"likes"}},await q.get("https://pixabay.com/api/",m)}async function C(){p+=1,h().then(s=>{if(s.data.totalHits===0)throw new Error("There are no images matching your search query. Please try again!");n=s.data.hits,b(n)}).catch(s=>{g.error(i,i.message=`Sorry! ${s.message}`)}).finally(()=>{})}function b(s){const o=s.map(t=>`<li class="gallery-item"><div class='image-wrapper'>
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
      width="360"
      height="200"
    />
    </a>
    <div class="gallery-item-description">
<ul class='gallery-item-description-list'>
<li class='description-list-item'>
<p class='description'>Likes</p>
<p class='quantity'>${t.likes}</p>
</li>
<li class='description-list-item'>
<p class='description'>Views</p>
<p class='quantity'>${t.views}</p>
</li>
<li class='description-list-item'>
<p class='description'>Comments</p>
<p class='quantity'>${t.comments}</p>
</li>
<li class='description-list-item'>
<p class='description'>Downloads</p>
<p class='quantity'>${t.downloads}</p>
</li>
</ul>
    </div>
    </div>
</li>`).join("");y.insertAdjacentHTML("beforeend",o),$.refresh()}function M(){u.style.display="block"}function E(){u.style.display="none"}function I(){v.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),a.disabled=!0,a.classList.add("search-btn-disabled")}function T(){document.querySelector(".loader").remove(),a.disabled=!1,a.classList.remove("search-btn-disabled"),f.reset()}
//# sourceMappingURL=commonHelpers.js.map
