var expanded = false;

$(document).ready(function(){
$('.button-holder').click(function() {
    $(this).toggleClass('open');
    $(".sideMenu").toggleClass("hidden").toggleClass('col-md-3 visible');
    $(".empty-space").toggleClass("col-md-6").toggleClass("col-md-3");
    $(".button").toggleClass("button-box-active").toggleClass("col-md-3").toggleClass('col-md-2');
    $(".create-space3").toggleClass('col-md-3').toggleClass('col-md-1');
    $(".create-space2").toggleClass('col-md-2').toggleClass('col-md-0');
    $(".create-space1").toggleClass('col-md-1').toggleClass('col-md-0');
    $(".sub-title").toggleClass('col-md-10').toggleClass('col-md-8');
    $(".sub-title2").toggleClass('col-md-6').toggleClass('col-md-4');
    $(".bolt-is-piece").toggleClass('col-md-10').toggleClass('col-md-8');
    $(".bolt-is-piece2").toggleClass('col-md-8').toggleClass('col-md-7');
    $(".logo-on-page").toggleClass('hidden');
    $(".create-box").toggleClass('hidden');
    expanded = !expanded;
    
});
});