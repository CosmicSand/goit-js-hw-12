import{S as m,i as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const g="/goit-js-hw-12/assets/error-cc3a3fd7.svg",p=document.querySelector(".searching-form"),n=document.querySelector(".button");document.querySelector(".load-more-btn");const u=document.querySelector(".gallery"),h=document.querySelector(".container"),l={title:"",iconUrl:`${g}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"};let y=new m(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"}),c=1;p.addEventListener("submit",b);function b(o){o.preventDefault(),u.innerHTML="",c=1,q();const r=o.currentTarget.elements.searching.value.trim(),t=encodeURIComponent(r);console.log(t);const i=new URLSearchParams({key:"41547319-253ef689baf3db6007ef0d5b5",q:`${t}`,orientation:"horizontal",per_page:40,page:`${c}`,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${i}`).then(e=>e.json()).then(e=>{const s=e.hits;if(s.length===0)throw new Error("There are no images matching your search query. Please try again!");L(s),d()}).catch(e=>{console.log(e),f.error(l,l.message=`Sorry! ${e.message}`),d()})}function L(o){const r=o.toSorted((t,i)=>i.likes-t.likes).map(t=>`<li class="gallery-item"><div class='image-wrapper'>
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
</li>`).join("");u.insertAdjacentHTML("beforeend",r),y.refresh()}function q(){h.insertAdjacentHTML("afterbegin",'<span class="loader"></span>'),n.disabled=!0,n.classList.add("search-btn-disabled")}function d(){document.querySelector(".loader").remove(),n.disabled=!1,n.classList.remove("search-btn-disabled"),p.reset()}
//# sourceMappingURL=commonHelpers.js.map
