## Memory Game - TODOs

* ask user for name during page load
* mention user name in headline of the page, e.g. "Welcome, [user]!"
* create a __form__ that lets user choose with how many pairs of cards they want to play
    * input field is limited to numbers 1-8, no letters, no special characters
* generate DIVs for memory cards based on user input
    * calculate no. of columns with square root (;
    * round that number up!
    * calculate no. of rows based on no. of columns
* backside of cards should be called memoryBg.png
* clicking a card flips it over
* when two cards are already flipped over and a 3rd card is clicked, hide the first two cards before showing the third
* if the user guesses a pair right, the cards should be called memoryBg1.png etc. and remain visible (no further JS (inter)action possible)
* when the users has guessed all pairs correctly, display an alert showing the number of tries and elapsed time
