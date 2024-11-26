"use strict";var btnBurger=document.querySelector(".header__top-burger"),headNav=document.querySelector(".nav--mobile"),btnCloseNav=document.querySelector(".nav__btn-close"),btnEventShowAll=document.querySelector(".event__btn-show-all"),listEvent=document.querySelector(".event__list"),listHeaderMiddle=document.querySelector(".header__middle-list"),allExtraMenuBtn=document.querySelectorAll(".header__middle-item-link"),allExtraMenu=document.querySelectorAll(".header__middle-extra-menu"),allCatalogItem=document.querySelectorAll(".catalog__item");function dltClassActive(e){for(var t=0;t<e.length;t++)e[t].classList.remove("active")}btnEventShowAll.addEventListener("click",function(){listEvent.classList.add("active"),btnEventShowAll.classList.add("visually-hidden")}),btnBurger.addEventListener("click",function(){headNav.classList.toggle("active"),btnBurger.classList.toggle("active")}),btnCloseNav.addEventListener("click",function(){headNav.classList.toggle("active"),btnBurger.classList.toggle("active")}),listHeaderMiddle.addEventListener("click",function(e){"BUTTON"===e.target.tagName&&(e.target.classList.contains("active")?(e.target.nextSibling.classList.toggle("active"),e.target.classList.toggle("active")):(dltClassActive(allExtraMenu),dltClassActive(allExtraMenuBtn),e.target.classList.toggle("active"),e.target.nextSibling.classList.toggle("active")))});var btnSearch=document.querySelector(".header__top-btn-search"),btnCloseSearch=document.querySelector(".header__top-btn-close-form"),headerTopWrapper=document.querySelector(".header__top-wrapper");btnSearch.addEventListener("click",function(e){e.preventDefault(),headerTopWrapper.classList.toggle("active")}),btnCloseSearch.addEventListener("click",function(e){e.preventDefault(),headerTopWrapper.classList.remove("active")}),allExtraMenu.forEach(function(e){new SimpleBar(e,{scrollbarMaxSize:28,autoHide:!1})}),document.querySelector(".catalog__countries").addEventListener("click",function(e){"LABEL"===e.target.tagName&&(dltClassActive(allCatalogItem),document.querySelector(".catalog__item--"+e.target.firstChild.value).classList.add("active"))}),document.querySelector(".catalog__list").addEventListener("click",function(e){var t,a;if("BUTTON"===e.target.tagName){window.innerWidth<=576&&e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".catalog__list-artists").scrollIntoView({behavior:"smooth",block:"start"}),t=e.target.textContent,a=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".catalog__item-artist"),e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".catalog__accordion-item.active").classList.remove("active"),e.target.parentNode.classList.add("active");for(var l=0;l<a.length;l++)if(a[l].querySelector(".catalog__author").textContent===t){dltClassActive(a),a[l].classList.add("active");break}}});var categoryLegendEdition=document.querySelector(".edition__category legend"),listEdition=document.querySelector(".edition__list");function findLI(e){e.classList.contains("edition__item")?e.classList.toggle("active"):findLI(e.parentNode)}categoryLegendEdition.addEventListener("click",function(e){e.target.classList.toggle("active")}),listEdition.addEventListener("click",function(e){"INPUT"!==e.target.tagName&&findLI(e.target)});var modal=new GraphModal,gallery=document.querySelector(".gallery__right"),galleryModal={img:document.querySelector(".gallery__modal-img img"),title:document.querySelector(".gallery__modal-title"),name:document.querySelector(".gallery__modal-name"),date:document.querySelector(".gallery__modal-date"),text:document.querySelector(".gallery__modal-text")};gallery.addEventListener("click",function(e){console.log(e.target);var t={img:e.target.parentNode.querySelector("img").getAttribute("src"),title:e.target.querySelector(".gallery__more-title").textContent,name:e.target.querySelector(".gallery__more-name").textContent,date:e.target.querySelector(".gallery__more-date").textContent,text:e.target.querySelector(".gallery__more-text").textContent};galleryModal.img.setAttribute("src",t.img),galleryModal.title.textContent=t.title,galleryModal.name.textContent=t.name,galleryModal.date.textContent=t.date,galleryModal.text.textContent=t.text,console.log(galleryModal),console.log(t)});var btnSent=document.querySelector(".contact__btn-order");btnSent.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".contact__input-name").value+"\n Телефон: "+document.querySelector(".contact__input-tel").value;window.open("mailto:gerankin.a@mail.ru?subject=Заказ&body="+t)});