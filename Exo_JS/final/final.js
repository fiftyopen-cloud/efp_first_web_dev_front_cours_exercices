function extractAlternateChars(word) {
    let str = ""
    for (let i = 0; i < word.length; i += 2) {
        str += word[i];
    }
    return str;
}

function isFortyTwoOrSum(a, b) {
    return a == 42 || b == 42 || a + b == 42;
}

function exceedsZeroThreshold(...arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            ++count;
        }
    }
    return count > 4;
}

function celsiusToFahrenheit(n) {
    return (n * 9/5) + 32;
}

function getPositives(...arr) {
    let positives = []; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives.push(arr[i]);
        }
    }
    return positives;
}

function sumDigits(n) {
    let sum = 0;
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
} 

// Solution with shift() et push()
function shiftArrayLeft(...arr) {
  let first = arr.shift();
  arr.push(first);
  return arr;
}

// Solution without shift() et push()
function shiftArrayLeftAlt(...arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}

function concatenateArrays(arr1, arr2) {
    let concatenated = [];
    for (let i = 0; i < arr1.length; i++) {
        concatenated.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        concatenated.push(arr2[j]);
    }
    return concatenated;
}

function getSymmetricDifference(arr1, arr2) {
    let symDiff = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            symDiff.push(arr1[i]);
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            symDiff.push(arr2[j]);
        }
    }
    return symDiff;
}

function sumDelimitedValues(str) {
    let sum = 0;
    let numberStr = ""; 
    let i = 0;

    while (i <= str.length && str != "") {
        if (str.charAt(i) != "," && i < str.length) {
            numberStr += str.charAt(i);
        } else {
            sum += parseInt(numberStr);
            numberStr = "";
        }
        i++;
    } 
    return sum;
}   

function getMatrixColumn(arr, n) {
    let column = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][n] !== undefined) {
            column.push(arr[i][n]);
        }
    }
    return column;
}

function parseBinary(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = result * 2 + parseInt(str[i]);
  }
  return result;
}

