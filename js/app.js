$(document).ready(function(){

  //Agreagando y removiendo clases
  $('.category-list .item[category="all"]').addClass('item-active');

  $('.item').click(function(){
    let food = $(this).attr('category');
    console.log(food);
    $('.item').removeClass('item-active');
    $(this).addClass('item-active');

    //Ocultando platillos
    $('.food-item').hide();
    //Mostrando plaillos
    $('.food-item[category="'+food+'"]').show();
  });
  $('.item[category="all"]').click(function(){
    $('.food-item').show();
  })

})
