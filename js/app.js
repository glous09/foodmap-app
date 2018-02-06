
function loadPage() { //Función que contiene funciones
  $("#searcher").focus();//Comprobamos si se pulsa una tecla
  $("#searcher").keyup(filterRestaurant);//Filtra los restaurantes
}

function paintContactsInHtml (restaurants) {
var $newRestaurant = $("<div />", {
  "class": "col-6"
});
var $containerRestauranteName = $("<h4 />");
//var $imgRestaurant = $("img")
//Agregando elementos al html
$containerRestauranteName.text(restaurants.name);
$newRestaurant.append($containerRestauranteName);
//$imgRestaurant.attr('src','data-name', restaurant.name);
console.log($newRestaurant);
$("#img-food").prepend($newRestaurant);
}

function filterRestaurant (){
  var searchRestaurant = $("#searcher").val().toLowerCase();
  if($("#searcher").val().trim().length > 0) {
    var filteredRestaurant = restaurants.filter(function(restaurants) {
      return restaurants.name.toLowerCase().indexOf(searchRestaurant) >= 0;
    });
    $("#img-food").empty();
    filteredRestaurant.forEach(function(restaurants){
      paintRestaurantInHtml(restaurants);
    });
  } else {
    $("#img-food").empty();
    restaurants.forEach(function(restaurants){
      paintRestaurantInHtml(restaurants);
    });
  }
  $(document).ready(loadPage);
