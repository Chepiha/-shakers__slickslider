$(document).ready(function() {
    // Fancybox
   $("[data-fancybox]").each(function(){
       $(this).attr("data-caption");
   });
    $("[data-fancybox]").fancybox();
    // slick slider
    $('.carousel').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
		  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });
    // Carousel
// $(document).on('click', ".carousel-button__right",function(){ 
// 	var carusel = $(this).parents('.carousel');
// 	right_carusel(carusel);
// 	return false;
// });

// $(document).on('click',".carousel-button__left",function(){ 
// 	var carusel = $(this).parents('.carousel');
// 	left_carusel(carusel);
// 	return false;
// });
// function left_carusel(carusel){
//    var block_width = $(carusel).find('.carousel__block').outerWidth();
//    $(carusel).find(".carousel__items .carousel__block").eq(-1).clone().prependTo($(carusel).find(".carousel__items")); 
//    $(carusel).find(".carousel__items").css({"left":"-"+block_width+"px"});
//    $(carusel).find(".carousel__items .carousel__block").eq(-1).remove();    
//    $(carusel).find(".carousel__items").animate({left: "0px"}, 200); 
   
// }
// function right_carusel(carusel){
//    var block_width = $(carusel).find('.carousel__block').outerWidth();
//    $(carusel).find(".carousel__items").animate({left: "-"+ block_width +"px"}, 200, function(){
// 	  $(carusel).find(".carousel__items .carousel__block").eq(0).clone().appendTo($(carusel).find(".carousel__items")); 
//       $(carusel).find(".carousel__items .carousel__block").eq(0).remove(); 
//       $(carusel).find(".carousel__items").css({"left":"0px"}); 
//    }); 
// }

 });

 
