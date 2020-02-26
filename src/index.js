module.exports = function toReadable (number) {
    let array = [
        [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ]
    
    return forHundreds(number).trim();

    function forHundreds(number) {
        if (number == 0) {
            return "zero";
        } else if (number >= 100) {
            return array[0][Math.floor(number / 100)] + " hundred" + " " + forTens(number % 100);
        } else {
            return forTens(number);
        }
    }

    function forTens(number) {
        if (number < 10) {
            return array[0][number];
        }
        else if (number <= 99 && number >= 20) {
            return array[2][Math.floor(number / 10)] + units(number);
        }
      else {
            return array[1][number - 10];
        }
    }

    function units(number) {
        if (!number % 10) {
            return;
        } else {
            return " " + array[0][number % 10];
        }
    }
}