const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const textright = document.querySelector("#textright");
const textleft = document.querySelector("#textleft");
const balance = document.querySelector("#balance");
const dealercard = document.querySelector("#dealercard");
const yourcard = document.querySelector("#yourcard");
let drawCardSound = new Audio('Sounds/drawcard.mp3');
let dealerWinSound = new Audio('Sounds/dealerwin.wav');
let playerWinSound = new Audio('Sounds/playerwin.mp3');
let gameDrawnSound = new Audio('Sounds/gamedrawsound.wav');
drawCardSound.volume = 0.1;
dealerWinSound.volume = 0.1;
playerWinSound.volume = 0.1;
gameDrawnSound.volume = 0.1;

// Current game money and the live state
let money = balance.innerText;
let gameLive = false;


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

let userCardCount = 0;
let userSum = 0;
let dealerSum = 0;
let winner;

function drawCard() { 

    drawCardSound.play();
    
    const index = Math.floor(Math.random() * deck.length);
    const card = deck[index];

    // If the card drawn is an Ace and it's the first Ace
    if (card.type === 'A' && userCardCount <= 1) {
        return {...card, value: 11};
    }
    // If the card drawn is an Ace but it's not the first Ace
    else if (card.type === 'A' && userCardCount > 1) {
        return {...card, value: 1};
    }
  
    return card;

}
//separate draw functions for user and dealer
function drawUser() {
        const card = drawCard(); // select a random card
        
        const suitU = document.querySelector("#suitU");
        const typeU = document.querySelector("#typeU");
        const valueU = document.querySelector("#valueU");
		
		userCardCount++; // Increment the user card count

        textleft.style.color = "aliceblue";

    suitU.innerText = card.suit;
    typeU.innerText = card.type;

    userSum += card.value; // Adding this line to increase userSum with each draw
    valueU.innerText = userSum; // Displaying the sum instead of the last drawn card value
    
    if (userSum < 21) {
        drawDealer();
        }
    else if (userSum === 21) {
        checkWinnerAndFinishGame();
    }
    else if (userSum > 21) {
      checkWinnerAndFinishGame();
    }
    }

function drawDealer() {if (dealerSum < 17 || dealerSum < userSum) {
    const card = drawCard(); // select random card
    
    const suitD = document.querySelector("#suitD");
    const typeD = document.querySelector("#typeD");
    const valueD = document.querySelector("#valueD");
    
    // Display dealer card info
    suitD.innerText = card.suit;
    typeD.innerText = card.type;

    dealerSum += card.value; // Adding this line to increase dealerSum with each draw
    valueD.innerText = dealerSum; // Displaying the sum instead of the last drawn card value

    {if (dealerSum === 21) {
        winner = "Dealer";
        money = money;
        textleft.innerText = "Dealer Wins";
        dealerWinSound.play();
        textleft.style.color = "red";
    }
    else if (dealerSum > 21) {
        winner= "Player";
        money += 2 * bet;
        textleft.innerText = 'You Win';
        playerWinSound.play();
        textleft.style.color = "rgb(3, 255, 3)";
    }}
}
else {
    checkWinnerAndFinishGame();
}}

// Bet amounts functions
let bet

function bet100() {
    if (money >= 100 && !gameLive) {
        money -= 100;
        balance.innerText = money;
        update(locations[1]);
        gameLive = true;
        showDealerCard();
		drawUser();
        bet = 100;
    } else if (gameLive===true) {
        alert("Game ongoing, you cannot bet now");
    } else {
        alert("You do not have 100 cash");
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
        bet = 500;
    } else if (gameLive===true) {
        alert("Game ongoing, you cannot bet now");
    } else {
        alert("You do not have 500 cash");
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
        bet = 1000;
    } else if (gameLive===true) {
        alert("Game ongoing, you cannot bet now");
    } else {
        alert("You do not have 1000 cash");
    }
}
// Function to check the winner
function checkWinnerAndFinishGame() {
    gameLive = false;
    update(locations[0]);
	// Check if either player or dealer has busted or has reached blackjack
	
    {if (dealerSum > 21) {
		winner = 'Player';
    }
     else if (userSum > 21) {
		winner = 'Dealer';
	}
    else if (userSum === 21) {
        winner = 'Player';
    }
    else if (dealerSum === 21) {
        winner = 'Dealer';
    }
    else if (userSum === dealerSum) {
        winner = 'Drawn';
    }
	else {
		// Determine who is closest to 21 and assign the winner
		winner = userSum > dealerSum ? 'Player' : 'Dealer';
	}}

	// Updating balance and logs according to the winner
	{if (winner === 'Player') {
		money += 2 * bet;
        textleft.innerText = 'You Win';
        playerWinSound.play();
        textleft.style.color = "rgb(3, 255, 3)";
	}
    else if (winner === 'Dealer') {
		money = money;
        textleft.innerText = "Dealer Wins";
        dealerWinSound.play();
        textleft.style.color = "red";
	}
    else if (winner === 'Drawn') {
        money += bet;
        textleft.innerText = 'Game drawn';
        gameDrawnSound.play();
        textleft.style.color = "#ffbd08";
    }}

	balance.innerText = money;
    userCardCount = 0; // Resetting the user card count
    userSum = 0; // Resetting user score
    dealerSum = 0; // Resetting dealer score
}

// Player action functions
function hold() {if (gameLive && userCardCount >= 2) {
        if (dealerSum < userSum) {
            drawDealer();
            checkWinnerAndFinishGame();
        }
        else {
            checkWinnerAndFinishGame();
        }
        }
    
    else {
        alert('You must draw at least two cards before holding.');
    }
}

function double() {
    money -= bet;
    bet = 2 * bet;
    balance.innerText = money;
    textright.innerText = "Doubled Bet";
    drawUser ();
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
        textright: "Choose New Bet",
    },
    {
        name: "Game Menu",
        "button text": ["Draw", "Hold", "Double"],
        "button functions": [drawUser, hold, double],
        textleft: "Dealing...",
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

//setting welcome screen when first opened/reload
textleft.innerText = 'Welcome to BlackJack';
textright.innerText = 'Choose Bet'; 