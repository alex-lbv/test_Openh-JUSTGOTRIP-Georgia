$(document).ready(function(){

  $('.yakor').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    $('html, body').animate({scrollTop: dn}, 700);

    /*
    * 1000 скорость перехода в миллисекундах
    */
  });

  $('.carousel').carousel({
    interval: false
  });

  //slider
  $('.responsive').slick({
    infinite: false,
    dots: false,
    centerMode: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-arrow',
    variableWidth: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });

  //tabs-carousel
  $('#carouselExampleControls').carousel({
    interval: false,
    wrap: false
  });

  $('#carouselExampleControls').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.carousel-item.active'))
    var total = carouselData.$items.length;

    // display the count in a id with a tag for styling
    var text = (currentIndex + 1) + " / " + total;
    $('#carousel-index-stats').text(text);
    });

  //Tabs
  $('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab');
    var content = $('.js-tab-content[data-tab="'+ id +'"]');

   $('.js-tab-trigger.active').removeClass('active');
   $(this).addClass('active');

   $('.js-tab-content.active').removeClass('active');
   content.addClass('active');
});

  var totalItems = $('.carousel-item').length;
  var currentIndex = $('.carousel-item.active').index() + 1;
  var down_index;
  $('.num').html(''+currentIndex+' из '+totalItems+'');

  $(".carousel-control-next").click(function(){
    currentIndex_active = $('.carousel-item.active').index() + 2;
    if (totalItems >= currentIndex_active)
    {
    down_index= $('.carousel-item.active').index() + 2;
  $('.num').html(''+currentIndex_active+' из '+totalItems+'');
  }
  });

  $(".carousel-control-prev").click(function(){
    down_index=down_index-1;
    if (down_index >= 1 )
    {
    $('.num').html(''+down_index+' из '+totalItems+'');
    }
});

})
