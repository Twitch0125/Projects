function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let myresult = JSON.parse(this.responseText);
            console.log(myresult);
            $(".storetitle").html(myresult.value);
            // for(let i = 0; i < myresult.StoreItems.length; i++){
            //     $(".storetitle").append(`<div>${myresult.StoreItems[i].itemName}: ${myresult.StoreItems[i].Price}</div>`);
            // }
            
        }
    };
    xhttp.open("get", "https://api.chucknorris.io/jokes/random?category=dev", true);
    xhttp.send();
    
}
