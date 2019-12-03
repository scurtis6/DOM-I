window.onload = function startTimer() {
    const digitSelector = document.getElementsByClassName('digit');
    const secondTens = digitSelector[0];
    const secondOnes = digitSelector[1];
    const colon = digitSelector[2];
    const msHundreds = digitSelector[4]
    const msTens = digitSelector[3];

    let milliSec = 0;
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";

        const digitalTimer = setInterval (() => {
            milliSec += 10;
            if (milliSec === 10000) {
               endTimer(digitalTimer); 
            }
            updateTimer(milliSec);
        }, 10);


        function increment (string) {
            let number = Number(string) + 1;
            return number.toString();
        }

        function endTimer (stopId) {
            clearInterval(stopId);
            Array.from(digitSelector).forEach(digit => {
                digit.classList.add("redDigit");
            })
        }

        function updateTimer (milliSec) {
           if(milliSec === 10000) {
              secondTens.innerHTML = "1";
              secondOnes.innerHTML = "0";
              msHundreds.innerHTML ="0";
              msTens.innerHTML = "0";
           } else if (milliSec % 1000 === 0) {
               secondOnes.innerHTML = increment(secondOne.innerHTML);
               msHundreds.innerHTML = "0";
               msTens.innerHTML = "0";
           } else if (milliSec % 100 === 0) {
               msHundreds.innherHTML = increment(msHundreds.innerHTML);
               msTens.innerHTML = "0";
           } else {
               msTens.innerHTML = increment(msTens.innerHTML);
           }
        }

    }