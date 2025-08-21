/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Developer","Lecturer","Programmer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

// Auto hide flash messages
document.addEventListener('DOMContentLoaded', function() {
    const alerts = document.querySelectorAll('.alert');
    
    alerts.forEach(alert => {
        // Create flash modal elements
        const flashModal = document.createElement('div');
        flashModal.className = 'flash-modal';
        
        const flashContent = document.createElement('div');
        flashContent.className = 'flash-content';
        
        // Move alert message to modal
        flashContent.innerHTML = alert.innerHTML;
        
        // Add OK button
        const okButton = document.createElement('button');
        okButton.className = 'flash-btn btn';
        okButton.textContent = 'Close';
        okButton.onclick = function() {
            flashModal.style.opacity = '0';
            setTimeout(() => flashModal.remove(), 300);
        };
        
        flashContent.appendChild(okButton);
        flashModal.appendChild(flashContent);
        document.body.appendChild(flashModal);
        
        // Show flash modal
        setTimeout(() => {
            flashModal.style.display = 'block';
        }, 100);
        
        // Remove original alert
        alert.remove();
    });
});


// Gallery functionality
const galleryItems = [
    {
        src: 'static/login.png',
        description: 'This Sytem is powered by Flask and uses MySQL for database management. Interface requested by the company to make it simple and user-friendly.'
    },
    {
        src: 'static/student_login.png',
        description: 'Student Login - Dedicated portal for student access'
    },
    {
        src: 'static/student_registration.png',
        description: 'Student Registration - Easy-to-use signup process'
    },
    {
        src: 'static/student_dashboard.png',
        description: 'Student Dashboard - Comprehensive view of attendance records'
    },
    {
        src: 'static/admin_login.png',
        description: 'Admin Login - Secure administrative access point'
    },
    {
        src: 'static/admin_dashboard.png',
        description: 'Admin Dashboard - Complete system management interface'
    }
];

let currentImageIndex = 0;

function openGallery() {
    const modal = document.getElementById('galleryModal');
    updateGalleryContent();
    modal.style.display = 'block';
}

function updateGalleryContent() {
    const img = document.getElementById('galleryImage');
    const description = document.getElementById('imageDescription');
    const currentItem = galleryItems[currentImageIndex];
    
    img.src = currentItem.src;
    description.textContent = currentItem.description;
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= galleryItems.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = galleryItems.length - 1;
    
    updateGalleryContent();
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    currentImageIndex = 0; // Reset to first image when closing
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeGallery();
    }
}

// Add click event for clicking outside the modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeGallery();
    }
});

// Add escape key support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGallery();
    }
});