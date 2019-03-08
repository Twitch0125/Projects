// ajax/async/rest

// $.ajax("https://swapi.co/api/people/1", {
//   method: "GET",
//   success: data => {
//     let character = data;
//     displayName(character.name);
//     displayPlanet(character.homeworld);
//     displayFilms(character.films);
//   },
//   error: error => {
//     console.log("error", error);
//   }
// });

//this is the promise way of doing it
function getCharacter(id) {
  return new Promise((resolve, reject) => {
    $.ajax(`https://swapi.co/api/people/${id}`, {
      method: "GET",
      success: character => {
        resolve(character);
      },
      error: error => {
        reject(error);
      }
    });
  });
}

// displayName(character.name);
// displayPlanet(character.homeworld);
// displayFilms(character.films);

function getPlanet(planetUrl) {
  return new Promise((resolve, reject) => {
    $.ajax(planetUrl, {
      method: "GET",
      success: planet => {
        resolve(planet);
      },
      error: error => {
        reject(error);
      }
    });
  });
}

function displayPlanet(planetName) {
  $(".planet").html(planetName);
}

function getFilms(filmsUrl) {
  return new Promise((resolve, reject) => {
    $.ajax(filmsUrl, {
      method: "GET",
      success: films => {
        resolve(films);
      },
      error: error => {
        reject(error);
      }
    });
  });
}
function displayFilms(filmsNames) {}

function displayFilms(filmUrls) {
  filmUrls.forEach(film => {
    $.ajax(film, {
      method: "GET",
      success: film => {
        $(".films").append(`<div>${film.title}</div>`);
      }
    });
  });
  return new Promise((resolve, reject) => {
    $.ajax(filmsUrl),
      {
        method: "GET",
        success: planet => {
          resolve(planet);
        },
        error: error => {
          reject(error);
        }
      };
  });
}

function displayName(name) {
  $(".name").html(name);
}

let characterPromise = getCharacter(1);

let planetPromise = characterPromise.then(character => {
  return getPlanet(character.homeworld);
});

planetPromise.then(planet => {
  displayPlanet(planet.name);
});



function checkKey() {}
