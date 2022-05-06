//header_sale show
const slider = document.getElementById('slider')
const headerImgClose =document.getElementById('header_img--close')
const headerSale = document.getElementById('header_sale')
headerImgClose.onclick  = function (){
    headerSale.classList.remove('header_show')
}   
//nav-action
const topActionDownload = document.getElementById('topActionDownload')
const getTheApp = document.getElementById('get-the-app-scope')
const topCustomerCare = document.getElementById('topCustomerCare')
const getCare = document.getElementById('customer-pop-up')
const topActionCheck = document.getElementById('topActionCheck')
const getTrack = document.getElementById('track-pop-up')
const topActionChangeLanguage = document.getElementById('topActionChangeLanguage')
const getChangeLang = document.getElementById('change-pop-up')
const langChange = document.querySelectorAll('.container-lang')
const main = document.querySelector('#main')
function navAction (actionId,actionSubNav,navArrays) {
    actionId.onclick = function(e){ 
        e.stopPropagation();
        navArrays.forEach(function(navArray){
            if(navArray != actionSubNav){
                navArray.style.display='none'
            }
            else {
                actionSubNav.style.display ='block';
            }
        })
    }
}
function hidePopUp(options){
    options.forEach(function(option,idx){
        main.onclick = function(){
            for(var i = 0 ; i<= idx;i++){
                options[i].style.display ='none';
            }
        }
    })
}
function hidePopUpLeave(options){
    options.forEach(function(option){
        option.onmouseleave = function(e){
            option.style.display = 'none'
        }
    })
    
}
navAction(topActionDownload,getTheApp,[getTheApp,getCare,getTrack,getChangeLang]);
navAction(topCustomerCare,getCare,[getTheApp,getCare,getTrack,getChangeLang])
navAction(topActionCheck,getTrack,[getTheApp,getCare,getTrack,getChangeLang]);
navAction(topActionChangeLanguage,getChangeLang,[getTheApp,getCare,getTrack,getChangeLang]);
hidePopUp([getTheApp,getCare,getTrack,getChangeLang])
hidePopUpLeave([getTrack])
hidePopUpLeave([getChangeLang])
langChange.forEach(function(change){
    change.onclick = function(){
        langChange.forEach(function(change1){
            change1.classList.remove('show')
        })
        
        this.classList.toggle('show')
    }
})
//sticky header
window.onscroll = function() {
    addScrollHeader()
};
const header = document.getElementById('header')
var headerSearch = document.getElementById('header_search')
var sticky = header.offsetTop;
var sliderMr = '115px'
function addScrollHeader() {
   if (window.innerWidth > 414){
    if (headerSale.classList.contains('header_show')==false){
        sticky = 0
    }
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      
    slider.style.marginTop = sliderMr
    } else {
        slider.style.marginTop = '0px'
      header.classList.remove("sticky");

    }
   }
  }

//sliderNav
const cateList = document.querySelectorAll('.cate-list')
const cateItems = document.querySelectorAll('.cate-items')
const cateItem = document.querySelectorAll('.cate-item')
const items = document.querySelectorAll('.items')
const sliderNav = document.getElementById('slider-nav')
cateList.forEach(function(cate,idx){
    cate.onmouseover = function(){
        cateItems.forEach(function(cate1){
            cate1.style.display = 'none'
        })
        if (cateItems[idx].hasChildNodes()==true){
            cateItems[idx].style.display = 'block';
        }
    }
})
cateItem.forEach(function(cate,idx){
    cate.onmouseover = function(){
        items.forEach(function(cate1){
            cate1.style.display = 'none'
        })
        if (items[idx].hasChildNodes()==true){
            items[idx].style.display = 'block';
        }
    }
})

sliderNav.onmouseenter = function(){
    cateItems.forEach(function(cate){
        cate.style.visibility = 'visible'
    })
}
sliderNav.onmouseleave = function(){
    cateItems.forEach(function(cate){
        cate.style.visibility = 'hidden'
    })
}
//slide-img
const circles = document.querySelectorAll('.circle')
const sliderImgs = document.querySelectorAll('.slider-imgs')
const bgColors = ['rgb(0, 38, 85)','rgb(4, 28, 74)','rgb(2, 65, 108)','#fff','rgb(186, 0, 3)'
,'rgb(143, 0, 255)','rgb(0, 52, 250)','#fff','rgb(179, 1, 1)','rgb(219, 135, 0)','rgb(149, 13, 13)'
,'rgb(29, 73, 230)']


circles.forEach(function(circle,idx){
    circle.onclick = function(){
        circles.forEach(function(c1){
            c1.classList.remove('active')
        })
        sliderImgs.forEach(function(sliderImg){
            sliderImg.classList.remove('show')
        })
        circle.classList.add('active')
        sliderImgs[idx].classList.add('show')
        slider.style.backgroundColor = bgColors[idx];
      
    }
})

// circles.forEach(function(circle,idx){
//     circle.onclick = function(){
//         sliderFunc(idx+1)
//     }
// })

var sliderIndex = 1;
    autoId = setInterval(function(){
       sliderFunc(sliderIndex = sliderIndex +1)
   },5000)

$('#slider').hover(
    function(){
        window.clearInterval(autoId)
    },
    function(){
         autoId = setInterval(function(){
            sliderFunc(sliderIndex = sliderIndex +1)
        },5000)
    }
)
function sliderFunc(n) {
    if (n > sliderImgs.length )
    {
        sliderIndex = 1;
    }
    circles.forEach(function(c1){
        c1.classList.remove('active')
    })
    sliderImgs.forEach(function(sliderImg){
        sliderImg.classList.remove('show')
    })
    circles[sliderIndex-1].classList.add('active')
    sliderImgs[sliderIndex-1].classList.add('show')
    slider.style.backgroundColor = bgColors[sliderIndex-1];
}
//count-down 
var countDownDate = new Date("October 22, 2022 13:58:25").getTime();
const timeBox = document.getElementById('deal-time')
var x = setInterval(function() {

  var now = new Date().getTime();
 
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    if (seconds < 10){
        seconds = `0${seconds}`
    }
    if (hours < 10 ) {
        hours = `0${hours}`
    }
    timeBox.innerHTML = `<p class="deal-text">Kết Thúc Trong <span class="cd-time" id="cd-hours">${hours}</span>:<span class="cd-time" id="cd-minute">${minutes}</span>:<span class="cd-time" id="cd-second">${seconds}</span></p>`

  if (distance < 0) {
        clearInterval(x);
        timeBox.innerHTML = '<p class="deal-text">Kết Thúc Trong <span class="cd-time" id="cd-hours">0</span>:<span class="cd-time" id="cd-minute">0</span>:<span class="cd-time" id="cd-second">0</span></p>'
  }
}, 1000);