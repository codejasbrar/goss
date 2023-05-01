
let SwiperTop = new Swiper('.marquee-swiper', {
    loop: true,
    spaceBetween: 0,
    centeredSlides: false,
    speed: 1000,
    autoplay: {
      delay: 1
    },
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 5,
    allowTouchMove: false
  });

let SwiperTopNew = new Swiper('.marquee-swiper-new', {
    loop: true,
    spaceBetween: 0,
    centeredSlides: false,
    speed: 5000,
    autoplay: {
      delay: 1
    },
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 3,
    allowTouchMove: false,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      }
    }
  });

  let SwiperTopVolume = new Swiper('.marquee-swiper-volume', {
    loop: true,
    spaceBetween: 0,
    centeredSlides: false,
    speed: 5000,
    autoplay: {
      delay: 1
    },
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 3,
    allowTouchMove: false,
    breakpoints: {
      1440: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 0.7,
        spaceBetween: 10,
      }
    }
  });
  // Collapsible Accordions (FAQs and Glossary Page)
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

// Stockists Page Tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Stockists Page Sidebar Active/Inactive links
const sections = document.querySelectorAll(".stockists-right-section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

// Activate Screensaver on Idle Screen
let inactivityTime = function () {
    let time;
    let timer = document.querySelector('#screensaver-timer-input').value;
    window.onload = resetTimer;
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer; // touchscreen presses
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer; // touchpad clicks
    document.onkeypress = resetTimer;
    document.addEventListener('scroll', resetTimer, true); // improved; see comments
    function logout() {
        // alert('test');
        document.querySelector(".screensaver-section").style.display = 'block';
        document.querySelector(".body-tag").style.overflow = 'hidden';
    }
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, timer);
        document.querySelector(".screensaver-section").style.display = 'none';
        document.querySelector(".body-tag").style.overflow = 'visible';
    }
};
inactivityTime();