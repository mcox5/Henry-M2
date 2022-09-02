$("#boton").click(() => {
  //console.log("apretaste el boton");
  $("#lista").empty(); //nos permite borrar la lista cada vez que apretamos el boton
  $.get("http://localhost:4000/amigos", (response) => {
    //console.log(response);
    for (user of response) {
      //console.log(user.name);
      $(`<li> ${user.name}</li>`).appendTo("#lista");
    }
  });
});

$("#search").click(() => {
  const id = $("#input")[0].value;
  $.get(`http://localhost:4000/amigos/${id}`, (response) => {
    $("#amigo").text(response.name);
  });
});

$("#delete").click(() => {
  const id = $("#inputDelete")[0].value;
  $.ajax({
    url: `http://localhost:4000/amigos/${id}`,
    type: "DELETE",
    success: function (response) {
      //console.log(result);
      alert("AMIGO ELIMINADO");
      $("#lista").empty();
      for (user of response) {
        //console.log(user.name);
        $(`<li> ${user.name}</li>`).appendTo("#lista");
      }
    },
  });
});

let a = hola


