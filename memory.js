        var username;
        var pairs, cardCount, cardID;
        var cards = [], revealedCards = [], revealedImgs = [], imageNumbers = [];
        var cols, rows;
        var startDate = "";
        var stopDate;
        var tries = 0;
        var currentTry = 0;
        var rasterInner = "";
        var i, j, c, p, r, k=0, temp;

        function whoAreYou() {
            // welcome the user
            var username = prompt("So you want to play a game of memory?"
            +" Please tell me your name first!");
            document.getElementById("welcome").innerHTML =
            "Hey <span class=\"username\">" + username+ "</span>,";
        }

        function pickCards (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // shuffle array with Fisher-Yates Shuffle
        function randomise(array) {
            var c = array.length;

            while (c) {
                // pick a random no. based on array length
                i = Math.floor(Math.random() * c--);
                // swap element with that key with current element
                temp = array[c];
                array[c] = array[i];
                array[i] = temp;
            }
            return array;
        }

        function goodbyeAlert() {
            var currentDate = new Date();
            var dateDiff = currentDate.getTime() - startDate.getTime();
            var dateDiffSeconds = Math.round(dateDiff / 1000);
            var min, sec;
            var minWord = "minute";
            var secWord = "second";
            var plural = "s";
            var timeoutput;

            tries = tries / 2;

            if (dateDiffSeconds >= 60) {
                min  = Math.floor(dateDiffSeconds / 60);
                sec = Math.round(dateDiffSeconds) - min*60;

                if (min > 1) {
                    minWord = minWord.concat(plural);
                }
                secWord = secWord.concat(plural);
                timeoutput = min+ " " +minWord+ ", " +sec+ " " +secWord;
            } else {
                sec = Math.round(dateDiffSeconds);
                if (sec > 1) {
                    secWord = secWord.concat(plural);
                }
                timeoutput = sec+ " " +secWord;
            }
            alert("It took you ~" +timeoutput+ " and " +tries+ " tries to solve the game!");
        }

        // flip around the card the user clicked on
        function flip(cardID) {
            if (startDate == "") {
                startDate = new Date();
            }

            var thisCardBack = document.getElementById("img" +(cardID+1)).style.visibility;

            if (currentTry < 2 && thisCardBack == "visible") {
                document.getElementById("img" +(cardID+1)).style.visibility = "hidden";

                // image numbers of revealed cards
                if(revealedCards.length > 1) {
                    revealedCards = [];
                }
                if(revealedImgs.length > 1) {
                    revealedImgs = [];
                }
                revealedCards.push(cardID+1);
                revealedImgs.push(cards[cardID]);
                currentTry += 1;
                tries += 1;

                var thisCard = [];

                if(currentTry == 2) {
                    var image1 = revealedImgs[0];
                    var image2 = revealedImgs[1];

                    // check if images are the same
                    if (image1 == image2) {
                        // if they are, set them dark
                        setTimeout(function(){
                            document.getElementById("cardcover" +revealedCards[0]).className = "done";
                            document.getElementById("cardcover" +revealedCards[1]).className = "done";
                        },1000)
                        ;
                        pairs--;
                    } else {
                        setTimeout(function(){
                            for(i=0;i<revealedCards.length;i++) {
                                document.getElementById("img" +revealedCards[i]).style.visibility = "visible";
                            }
                        },1000)
                        ;
                    }
                    currentTry = 0;

                    if (pairs == 0) {
                        goodbyeAlert();
                    }
                }
            } else if (currentTry < 2) {
            } else if (currentTry => 2) {
            } else {
            }
        }

        function drawRaster() {
            pairs = document.forms["pickpairs"]["number"].value;

            var checkInput = Number(pairs);

            if (checkInput > 0 && checkInput < 9) {

                cardCount = pairs*2;
                cols = Math.ceil(Math.sqrt(cardCount));
                rows = Math.ceil(cardCount/cols);

                cards = [];
                 // create array with all cards
                for(i=1;i<=pairs;i++) {
                // TODO: choose from more than 8 possible images
                        // j = pickCards(1,12);
                        // if () {
                        //     i--;
                        // }
                        cards.push(i);
                        cards.push(i);
                }
                randomise(cards);

                singleCard = "<img class=\"card\" src=\"img/card" +cards[k]+ ".gif\">";
                "<>"
                // print raster with cards
                rasterInner += "<div>You have chosen to play with " +pairs+
                " pairs of cards:</div><div>&nbsp;</div>";
                for(i=0;i<rows;i++) {
                    rasterInner += "<div class=\"cardrow\">";
                    for(j=0;j<cols;j++) {
                        if(k<cardCount) {
                        imageNumbers.push(cards[k]);
                        rasterInner += "<div class=\"cardholder\"><div id=\"card" +(k+1)+ "\" class=\"card\" style=\"background-image: url('img/card" +cards[k]+ ".gif');\"><div id=\"cardcover" +(k+1)+ "\" class=\"back\" style=\"visibility: visible;\" onClick=\"flip(" +k+ ");\"><img id=\"img" +(k+1)+ "\" style=\"visibility: visible;\" onClick=\"flip(" +k+ ");\" src=\"img/memoryBg.jpg\"></div></div></div>";
                        k++;
                        }
                    }
                    rasterInner += "</div>";
                }
                document.getElementById("cardraster").innerHTML = rasterInner;
            } else {
                alert("This is not a valid number of pairs!");
            }
        }
