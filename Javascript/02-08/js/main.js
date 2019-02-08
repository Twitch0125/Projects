

var nerdPrompt = prompt("nerd?");
nerdCheck();



var human = {
    image: 'images/autumn-hills.jpg'
};


// let human = {
//     firstName: "Kaleb",
//     lastName: "Ercanbrack",
//     height: 5.5,
//     weight: 130,
//     phone: '801-362-8434',
//     email: "twitcherc@gmail.com",
//     image: 'images/autumn-hills.jpg'
// }
// let human = {firstName: "Kaleb", lastName: "Ercanbrack", height: 5.5, weight: 130, phone:'801-362-8434', email:"twitcherc@gmail.com", image: 'images/autumn-hills.jpg',favoriteFood: "anything"}

document.getElementById("firstName").innerHTML += human.firstName;
document.getElementById("lastName").innerHTML += human.lastName;
document.getElementById("height").innerHTML += human.height;
document.getElementById("weight").innerHTML += human.weight;
document.getElementById("phone").innerHTML += human.phone;
document.getElementById("email").innerHTML += human.email;


document.getElementById("myImg").setAttribute('src', human.image);

//  if((document.getElementById("firstName").innerText).indexOf('Kaleb') > -1){
//      alert("GO AWAY, NERD!");
//      target = document.getElementById("firstName").innerHTML = "First Name: REDACTED";
// }


function nerdCheck() {
    if (nerdPrompt == "yes") {
        alert("GO AWAY, NERD!");
        document.getElementById("firstName").innerHTML = "First Name: REDACTED";
        document.getElementById("lastName").innerHTML = "Last Name: REDACTED";
        document.getElementById("height").innerHTML = "height: REDACTED";
        document.getElementById("weight").innerHTML = "weight: REDACTED";
        document.getElementById("phone").innerHTML = "phone: REDACTED";
        document.getElementById("email").innerHTML = "email: REDACTED";
    } else {
        let firstName = prompt("First Name: ");
        let lastName = prompt("Last Name: ");
        let height = prompt("Height(ft): ");
        let weight = prompt("Weight(lbs): ");
        let phone = prompt("Phone: ");
        let email = prompt("Email: ");

        human = {
            firstName: firstName,
            lastName: lastName,
            height: height,
            weight: weight,
            phone: phone,
            email: email,
            image: 'images/autumn-hills.jpg'
        };

    }
}

console.log(human.lastName);

    function searchobj(mystring) {
        // for every property in my car obj, do this
        for (prop in human) {
            // convert property to a string so we can seracha it
            let nstring = human[prop].toString();
            if (nstring.indexOf(mystring) && human[mystring] != undefined) {
                document.getElementById("result").innerHTML = human[mystring];
            }
        }
    }




let fatBird = {
    species: "Sparrow",
    weight: '50 lbs',
    birdinfo: function () {
        console.log('fat birb is a sparrow');
    }
};
fatBird.birdinfo();

console.log();