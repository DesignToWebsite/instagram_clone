/******************Add the story ******************/
const image_profile = [
    ['account1.jpg','zineb'],
    ['account2.jpg','ikram'],
    ['account3.jpg','amina'],
    ['account4.jpg','amal'],
    ['account5.jpg','amine'],
    ['account6.jpg','loy'],
    ['account7.jpg','loy'],
    ['account8.jpg','loy'],
    ['account9.jpg','loy'],
    ['account10.jpg','loy'],
    ['account11.jpg','loy'],
    ['account12.jpg','loy'],
    ['account13.jpg','loy'],
    ['account14.jpg','loy'],
    ['account15.jpg','loy'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="./images/${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:7,
            nav:true
        },
        600:{
            items:8,
            nav:false
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
    }
})