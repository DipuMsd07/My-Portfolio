const hamburger = document.querySelector('.header .navbar .navmenu .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navmenu ul');
const menu_item = document.querySelectorAll('.header .navbar .navmenu ul li a');
const header = document.querySelector('.header.container');
const preloader = document.getElementById('loading');

function loader(){
    preloader.style.display = 'none';
}
hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    console.log(hamburger.classList.contains("active"));
});

document.addEventListener('scroll', ()=>{

    var scroll_position = window.scrollY;
    if(scroll_position > 50){

        header.style.backgroundColor = "#29323c";
    }
    else{

        header.style.backgroundColor = "transparent";
    }

});

menu_item.forEach(item=>{

    item.addEventListener('click',()=>{

        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        
    });
});