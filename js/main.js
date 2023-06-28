(function ($) {
    "use strict"
    

})
    //Navbar on Scrolling 

$(window).scroll(function(){
    if($(this).scrollTop()>200){
        $('.navbar').fadeIn('slow').css('display','flex');

    }else{
    $('.navbar').fadeOut('slow').css('display','none');
}
 });






// let button = document.querySelector("body a");
// button.addEventListener("click",()=>{
//     const span =document.querySelector("a span ");
//     button.style.paddingRight ='10px';
//     span.style.visibility ="visible";
//     setTimeout(()=>{
//         span.style.visibility ="hidden";
//         button.style.transition =".3s ease-in-out "; button.style.paddingRight="0px";
//     },2000);  

// })

const downloadLinks=document.querySelectorAll("[data-download]");

     downloadLinks.forEach(button=>{
    const id=button .dataset.download;
    const Image = document.getElementById(id);
    const a =document.createElement("a");


    a.href = Image.src;
    a.download="fghjkfgh";
    a.style.display="none";

    button.addEventListener("click",()=>{
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    });

});













                // Typed Initiate
 
//  if($('.typed-text-output').length == 1){
//     var typed_strings = $('.typed-text').text();
    var typed = new typed('.Typing', {
        strings: ['Software Enginiering','Font end ','Backend'],
        typespeed:100,
        backspeed:20,
        // snartBackspace:false,
        loop: true,

})

// }
// })(jQuery);


            // Smooth Scrolling on the navbar links

$(".navbar-nav a").on('click',function (event){
  if (this.hash !=="") {
event.preventDefault();

$('html,body').animate({
    scrollTop : $(this.hash).offset().Top - 45
},1500,'easeInOutExpo');

if ($(this).parents('.navbar-nav').length){
    $('.navbar-nav .active').removeClass('active');
    $(this).Closest('a').addClass('active');
        }
    }  
});

                               // portfolio isotope and filter 
 var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-items',
    layoutMode: 'fitRows'});
    $('#portfolio-flters li').on('click',function(){
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');
    portfolioIsotope.isotope({filter: $(this).data('filter')});
    });







//  $('.skill').waypoint(function (){
//     $('.progress .progress-bar').each(function (){
//         $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
// },{offset:'70%'})

 