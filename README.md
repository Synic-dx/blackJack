# **blackJack**
<img src="logo.svg" width= "100px">

## About

A card game made with **Javascript**. Users have an initial balance ($5000) and can choose bet amount via three buttons that auto-selects a card out of a deck of 52. After selecting the bet amount and starting the game, users can choose to Draw (Hit, draws another card) or Hold (Stand, doesn't draw any more card) or Double (draws another card and doubles bet). Whoever's card value is closest to 21 (but doesn't cross 21) wins the round and increases their balance.

### Note:

I have not added splice method to remove drawn cards from the deck to keep it simpler.

### Game has one error to be fixed:

The hold function is resulting in several check winner functions resulting in game being drawn as well as player/dealer winning (as evident by multiple sound effects), messing up the balance updates as well as showing that the game is drawn when it's not.

