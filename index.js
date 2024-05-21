let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onClick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset = window.screenTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content, .about-contect', { origin:'right'});

var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;