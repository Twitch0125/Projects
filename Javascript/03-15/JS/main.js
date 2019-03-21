let myresult;

loadDoc();

function loadDoc() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myresult = JSON.parse(this.responseText);
      console.log(myresult);
      for (let i = 0; i < myresult.courses.length; i++) {
        $(".courses").append(`<option value="${myresult.courses[i].id}">${myresult.courses[i].name} </option>`);
      }
    }
  };
  xhttp.open("GET", "https://uxcobra.com/golfapi/courses", true);
  xhttp.send();
}

let myPromise = new Promise((resolve, reject) =>{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          myresult = JSON.parse(this.responseText);
          console.log(myresult);
          for (let i = 0; i < myresult.courses.length; i++) {
            $(".courses").append(`<option value="${myresult.courses[i].id}">${myresult.courses[i].name} </option>`);
          }
        }
    
})
