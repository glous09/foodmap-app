var contact = {

};

var $searchFood = $("#searching");

function filteredFood() {
  var searchFood = $("#searching").val().toLowerCase();
  if($("#searching").val().trim().length > 0) {/Si el valor de entrada (sin espacios) es mayor a cero/
      var filteredFood = contacts.filter(function(contact) {/Del arreglo total "contacts", filtra de acuerdo a una función que depende de contact (cada objeto o valor agregado)/
         // console.log(contact);
          return contact.name.toLowerCase().indexOf(searchContact) >= 0;/Regresa el nombre del contacto que coincide con el valor buscado el cual es convertido previamente en minúscula/
      });
}
