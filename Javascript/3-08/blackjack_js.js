// get a new deck
// using the deck id, get two cards
// use the cards info to display them in html
// create a button that when clicked it will run a function
// that will call for an additional card and display it next to
// the original two cards

function getDeck() {
  return new Promise((resolve, reject) => {
    $.ajax(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
    `,
      {
        method: "GET",
        success: deck => {
          resolve(deck);
        },
        error: error => {
          reject(error);
        }
      }
    );
  });
}
function getCards(deck, count) {
  return new Promise((resolve, reject) => {
    $.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${count}`,
      {},
      data => {
        const cards = data.cards;
        resolve(cards);
      }
    ).fail(error => {
      reject(error);
    });
  });
}

function displayCards(cards) {
  cards.forEach(card => {
    console.log(card);
    $("#hand1").append(`
  <img src="${card.image}"/>
`);
  });
}

function drawCard() {
  let oneCardPromise = deckPromise.then(deck => {
    return getCards(deck.deck_id, 1);
  });
  oneCardPromise.then(cards => {
    displayCards(cards);
  });
}

let deckPromise = getDeck();

let getTwoCardsPromise = deckPromise.then(deck => {
  return getCards(deck.deck_id, 2);
});

function checkKey(event) {
  switch (event.key) {
    case "Enter":
      drawCard();
      break;
  }
}
