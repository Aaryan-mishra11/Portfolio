
        //=======================togglr icon navbar===========
        let menuIcon =document.querySelector('#mwnu-icon');
        let navbar =document.querySelector('.navbar');
        menuIcon.onclick = () =>{
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
    
        }
    
    
    
    
    
    
    
    //================================Scroll Section===================
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');
    
    
        window.onscroll = () => {
          sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
    
        });
        // ===================Sticky NavBar================
        let header = document.querySelector('header');
        header.classList.toggle('sticky' , window.scrollY >100);
    
    //=====================remove toggle icon when  click navbar link======
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
        
    };

//======================Scroll reveal===========
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container , .portfolio-box, .contact form', {origin: 'bottom'});
 ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});


//===========typed js===============




