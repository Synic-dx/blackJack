const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const textright = document.querySelector("#textright");
const textleft = document.querySelector("#textleft");
const balance = document.querySelector("#balance");
const dealercard = document.querySelector("#dealercard");
const yourcard = document.querySelector("#yourcard");

// Current game money and the live state
let money = balance.innerText;
let gameLive = false;

//Card deck- 8 decks in total (4 for user 4 for dealer) as per rules (pls make this so, when im copy pasting the objects ofc it aint working)
const deck = [
        { suit: 'Hearts', type: '2', value: 2 },
        { suit: 'Hearts', type: '3', value: 3 },
        { suit: 'Hearts', type: '4', value: 4 },
        { suit: 'Hearts', type: '5', value: 5 },
        { suit: 'Hearts', type: '6', value: 6 },
        { suit: 'Hearts', type: '7', value: 7 },
        { suit: 'Hearts', type: '8', value: 8 },
        { suit: 'Hearts', type: '9', value: 9 },
        { suit: 'Hearts', type: '10', value: 10 },
        { suit: 'Hearts', type: 'J', value: 10 },
        { suit: 'Hearts', type: 'Q', value: 10 },
        { suit: 'Hearts', type: 'K', value: 10 },
        { suit: 'Hearts', type: 'A', value: 11 },
        { suit: 'Diamonds', type: '2', value: 2 },
        { suit: 'Diamonds', type: '3', value: 3 },
        { suit: 'Diamonds', type: '4', value: 4 },
        { suit: 'Diamonds', type: '5', value: 5 },
        { suit: 'Diamonds', type: '6', value: 6 },
        { suit: 'Diamonds', type: '7', value: 7 },
        { suit: 'Diamonds', type: '8', value: 8 },
        { suit: 'Diamonds', type: '9', value: 9 },
        { suit: 'Diamonds', type: '10', value: 10 },
        { suit: 'Diamonds', type: 'J', value: 10 },
        { suit: 'Diamonds', type: 'Q', value: 10 },
        { suit: 'Diamonds', type: 'K', value: 10 },
        { suit: 'Diamonds', type: 'A', value: 11 },
        { suit: 'Clubs', type: '2', value: 2 },
        { suit: 'Clubs', type: '3', value: 3 },
        { suit: 'Clubs', type: '4', value: 4 },
        { suit: 'Clubs', type: '5', value: 5 },
        { suit: 'Clubs', type: '6', value: 6 },
        { suit: 'Clubs', type: '7', value: 7 },
        { suit: 'Clubs', type: '8', value: 8 },
        { suit: 'Clubs', type: '9', value: 9 },
        { suit: 'Clubs', type: '10', value: 10 },
        { suit: 'Clubs', type: 'J', value: 10 },
        { suit: 'Clubs', type: 'Q', value: 10 },
        { suit: 'Clubs', type: 'K', value: 10 },
        { suit: 'Clubs', type: 'A', value: 11 },
        { suit: 'Spades', type: '2', value: 2 },
        { suit: 'Spades', type: '3', value: 3 },
        { suit: 'Spades', type: '4', value: 4 },
        { suit: 'Spades', type: '5', value: 5 },
        { suit: 'Spades', type: '6', value: 6 },
        { suit: 'Spades', type: '7', value: 7 },
        { suit: 'Spades', type: '8', value: 8 },
        { suit: 'Spades', type: '9', value: 9 },
        { suit: 'Spades', type: '10', value: 10 },
        { suit: 'Spades', type: 'J', value: 10 },
        { suit: 'Spades', type: 'Q', value: 10 },
        { suit: 'Spades', type: 'K', value: 10 },
        { suit: 'Spades', type: 'A', value: 11 }
      ];

let aceDrawn = false;

function drawCard() {

	//AI generated lol removes the previous the card from the deck
	const index = Math.floor(Math.random() * deck.length);
    const card = deck[index];

    deck.splice(index, 1); 

    // If the card drawn is an Ace and it's the first Ace
    if (card.type === 'A' && !aceDrawn) {
        aceDrawn = true;
        return {...card, value: 11};
    }
    // If the card drawn is an Ace but it's not the first Ace
    else if (card.type === 'A' && aceDrawn) {
        return {...card, value: 1};
    }
  
    return card;

}

//separate draw functions for user and dealer
function drawUser() {
    const card = drawCard(); // select random card
    
    const suitU = document.querySelector("#suitU");
    const typeU = document.querySelector("#typeU");
    const valueU = document.querySelector("#valueU");
    
    // Display user card info
    suitU.innerText = card.suit;
    typeU.innerText = card.type;
    valueU.innerText = card.value;

	drawDealer();
}

function drawDealer() {
    const card = drawCard(); // select random card
    
    const suitD = document.querySelector("#suitD");
    const typeD = document.querySelector("#typeD");
    const valueD = document.querySelector("#valueD");
    
    // Display dealer card info
    suitD.innerText = card.suit;
    typeD.innerText = card.type;
    valueD.innerText = card.value;
}

// Bet amounts functions
function bet100() {
    if (money >= 100 && !gameLive) {
        money -= 100;
        balance.innerText = money;
        update(locations[1]);
        gameLive = true;
        showDealerCard();
		drawUser();
    } else if (gameLive===true) {
        alert("Game ongoing, you cannot bet now");
    } else {
        textright.innerText = "You do not have 100 cash";
    }
}

function bet500() {
    if (money >= 500 && !gameLive) {
        money -= 500;
        balance.innerText = money;
        update(locations[1]);
        gameLive = true;
        showDealerCard();
		drawUser();
    } else if (gameLive===true) {
        alert("Game ongoing, you cannot bet now");
    } else {
        textright.innerText = "You do not have 500 cash";
    }
}

function bet1000() {
    if (money >= 1000 && !gameLive) {
        money -= 1000;
        balance.innerText = money;
        update(locations[1]);
        gameLive = true;
        showDealerCard();
		drawUser();
    } else if (gameLive===true) {
        alert("Game ongoing, you cannot bet now");
    } else {
        textright.innerText = "You do not have 1000 cash";
    }
}

// Player action functions
function hold() {
    // tbd
    alert("Held cards");
}

function double() {
    // tbd
    alert("Doubled hand");
}

// unhiding cards (actually its usercard i made a mistake then didnt risk changing much again)
function showDealerCard() {
    if (gameLive) {
        setTimeout(() => {
            yourcard.style.display = "block";
            textleft.style.animationName = ''; 
            textleft.style.borderRight = 'none'; 
            setTimeout(() => {
                dealercard.style.display = "block";
            }, 1000);
        }, 1000); 
    } 
    else {
        dealercard.style.display = "none";
        yourcard.style.display = "none";
    }
}

const locations = [
    {
        name: "Bet Menu",
        "button text": ["$100", "$500", "$1000"],
        "button functions": [bet100, bet500, bet1000],
        textleft: "Choose your bet",
        textright: "Bet amount",
    },
    {
        name: "Game Menu",
        "button text": ["Draw", "Hold", "Double"],
        "button functions": [drawUser, hold, double],
        textleft: "Playing...",
        textright: "Choose",
    }
];

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    textright.innerText = location.textright;
    textleft.innerText = location.textleft;
}

// initial settings
update(locations[0]); // initial loc at bet menu
showDealerCard(); // initial hide game (since gamelive is set to false)

//idk how to do so u make sure that the typing animation gets restarted each time u draw cards