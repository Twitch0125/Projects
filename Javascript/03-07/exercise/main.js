// $.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', 
// {},
// data =>{
//     console.log(data);
//     var deck_id = data.deck_id;
// });
var deck_id = "06cz57atrmo7";

function getCard(){
    $.get(`https://deckofcardsapi.com/api/deck/06cz57atrmo7/draw/?count=1`, 
    data => {
        console.log(data);
        if(data.remaining == 0){
            //shuffle cards
            $.get(`https://deckofcardsapi.com/api/deck/06cz57atrmo7/shuffle/`)
            }
        // $('.value').html(`<span>value: ${data.cards[0].value}</span>`);
        // $('.suit').html(`<span>suit: ${data.cards[0].suit}`);
        $('.img').append(`<img src="${data.cards[0].image}"/>`);
        
    });
}

function checkKey(event){
    switch (event.key) {
        case 'Enter':
        getCard();
        break;
    }
}