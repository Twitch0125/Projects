var data;

$.ajax("https://swapi.co/api/people/1", {
  method: "GET",
  success: data => {
    console.log("got some datas ", data);
    // for(let i =0; i < Object.keys(data).length; i++){
    //     $('.poop').append(`<div>${Object.keys(data)[i]}: ${data[i]}</div>`)
    // };

    Object.keys(data).forEach(e => {
      if (data[e].constructor === Array) {
        console.log(`found an array!!! it's for property: ${e}`);
        $.ajax(data.e, {
          method: "GET",
          success: () => {
            Object.keys(e).forEach(title => {
              $(".poop").append(`<div>${e}: ${Object.keys(title)}`);
            });
          }
        });
      } else {
        $(".poop").append(`<div>${e}: ${data[e]}`);
      }
    });

    $.ajax(data.homeworld, {
      method: "GET",
      success: planet => {
        $(".planet").html(planet.name);
      }
    });
  },
  error: error => {
    console.log(error);
  }
});
