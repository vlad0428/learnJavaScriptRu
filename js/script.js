function clear() {
    console.clear()
}

function well(x) {
    let newResult = x.filter(e => e === 'good')
    if (newResult.length === 0) {
        return "Fail!"
    } else if (newResult.length > 0 && newResult.length < 3) {
        return 'Publish!'
    } else if (newResult.length > 2) {
        return 'I smell a series!'
    }
}

well(['bad', 'bad', 'bad'])// 'Fail!')
well(['good', 'bad', 'bad', 'bad', 'bad'])//, 'Publish!')

// || function well(x){
//     let newResult = x.filter(e => e === 'good')
//     return newResult.length === 0 ? 'Fail!' : newResult.length > 0 && newResult.length< 3 ? 'Publish!' : 'I smell a series!'
// }

// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
let filterLucky = x => {
    let newResult = x.filter(e => String(e).split('').includes("7"))
    console.log(newResult)
}
filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])// [7,70,17]
clear()

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.
function mergeArrays(a, b) {
    let result = []
    if (a.length >= b.length) {
        for (let i = 0; i < a.length; i++) {

            if (a[i] === undefined) {
            } else {
                result.push(a[i])
            }

            if (b[i] === undefined) {
            } else {
                result.push(b[i])

            }

        }
    } else {
        for (let i = 0; i <= b.length; i++) {

            if (a[i] === undefined) {
            } else {
                result.push(a[i])
            }

            if (b[i] === undefined) {
            } else {
                result.push(b[i])

            }

        }
    }
    console.log(result)
}

// mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])//, [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
mergeArrays([66, 88, 75], ['w', 'd', 't', 'j', 'b'])//, [66, \'w\', 88, \'d\', 75, \'t\', \'j\', \'b\']

// Write a function called "filterEvenLengthWords".
//     Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
function filterEvenLengthWords(words) {
    return words.filter(el => el.length % 2 === 0)
}

{
    // const arr = [-3, 8, 67, 32, 5, 101];
    // let num = arr.find((el, i) => el > 30 && el % 2 && i > 1);
    // console.log(num)
    const arr = [1, 2, -3, 6, -5, 0];
    let num = arr.find(el => el > 30);
    console.log(num); // undefined; нет элемента
}

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
//     Examples: [1, -1, 2, -2, 3] => 3
clear()

function solve(arr) {
    let mainResult
    let resultMinus
    let resultPlus
    let find
    for (let i = 0; i < arr.length; i++) {
        find = arr[i]
        resultMinus = arr.find((n, index) => n === -find)
        resultPlus = arr.find((n, index) => n === find)
        if (resultMinus === undefined) {
            mainResult = resultPlus;
            break
        } else if (resultPlus === undefined) {
            mainResult = resultMinus;
            break
        }
        console.log(resultMinus, resultPlus)
        console.log(`-------------------------`)
    }
    console.log(mainResult)

};

// solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])// -38

// Дан массив чисел arr. Необходимо вернуть новый массив, в котором будут содержаться только повторяющиеся в исходном массиве элементы (дубликаты).
const findDublicates = (arr) => {
    const duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
    console.log(duplicates); // [-1, 2, 0, 2, 7, 7, 7, -1, 0]
}
findDublicates([-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4])

// Дан массив чисел arr. Вернуть новый массив, в котором будут содержаться только уникальные значения элементов (у этих элементов нет дубликатов в массиве).

{
    const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
    const nonDuplicates = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    console.log(nonDuplicates);
}

// You have to write a function which returns unique numbers array. You don't need to validate input arg arr. Retain the original order of the input.
function uniqueNumbers(numbersArray) {
    console.log(numbersArray.filter((el, i) => i === numbersArray.indexOf(el)))
}

uniqueNumbers([1, 1, 2, 2, 3, 3, 3, 10, 10])
clear()

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
function noRepeat(str) {
    let newStr = str.split("")
    return newStr.filter(el => newStr.indexOf(el) === newStr.lastIndexOf(el))[0]
}

noRepeat("wxyz")//"w"
function fixTheMeerkat(arr) {
    return arr.reverse()
}


// 6kyu
// Write a function that will take in any array and reverse it.
//     Sounds simple doesn't it? NOTES:
//     Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let newLetter = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = newLetter
    }
    return arr
}

{
    const arr = [1, 2];
    const arr2 = [3, 4];
    const res = arr.concat(arr2); // res = [1, 2, 3, 4],
// arr объединяем с arr2 и получаем новый массив res

    const res2 = arr.concat('a', 'b'); // res2 = [1, 2, "a", "b"],
// arr объединяем со списком значений и получаем новый массив res2

    const res3 = arr.concat('cat', ['f'], arr2); // res3 = [1, 2, "cat", "f", 3, 4],
// можно одновременно объединять и массив, и значения,
}

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
function addExtra(listOfNumbers) {
    let newItem = listOfNumbers.concat(5)
    return newItem
}

// sort
{
    const arr = ['nose', 'pen', 'apple', 'eye', 'zip'];
    arr.sort(); // не нужно передавать функцию в качестве аргумента метода,
// метод сортирует элементы, как строки
    console.log(arr); // ["apple", "eye", "nose", "pen", "zip"]
}
clear()
{
    console.log('hi')
    const arr = [1, 10, 6, 160, 2, 5];
    // arr.sort(); //[1, 10, 160, 2, 5, 6]
    // arr.sort((a,b) => a - b) [1, 2, 5, 6, 10, 160]
    arr.sort((a, b) => b - a) //[160, 10, 6, 5, 2, 1]
    console.log(arr);
}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
const twoOldestAges = ages => {
    let newAges = ages.sort((a, b) => a - b)
    return [newAges[newAges.length - 2], newAges[newAges.length - 1]]
}

twoOldestAges([1, 5, 87, 45, 8, 8])// [45,87]

console.log({}.toString.call([]))

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums) {
    if ({}.toString.call(nums) !== "[object Array]") {
        return []
    } else {
        let arr = nums.sort((a, b) => a - b)
        return arr
    }
}

solution([1, 2, 10, 50, 5]); //[1,2,5,10,50]
clear()

function longest(s1, s2) {
    let newStr = (s1 + s2).split("")
    let betterArr = newStr.filter((el, i) => i === newStr.indexOf(el))
    console.log(betterArr.sort().join(""))
}

longest("aretheyhere", "yestheyarehere") //"aehrsty"

function bigToSmall(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i])
    }
    result = result.sort((a, b) => a - b)
    console.log(result.reverse().join(">"))
}

bigToSmall([[1, 2], [3, 4], [5, 6]]) //"6>5>4>3>2>1"

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
};

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
function solve(arr) {
    let newArr = [...arr].sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(Math.max(...newArr))
            newArr.pop()
        } else if (i % 2 !== 0) {
            result.push(Math.min(...newArr))
            newArr.shift()
        }
    }
    console.log(result)
};

solve([15, 11, 10, 7, 12])//[15,7,12,10,11]
clear()

// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.
// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.
function findChildren(santasList, children) {
    let result = []

    if (santasList.length >= children.length) {
        console.log("santa")
        for (let i = 0; i < santasList.length; i++) {
            if (santasList.includes(children[i])) {
                result.push(children[i])
            }
        }
    } else {
        console.log("children")
        for (let i = 0; i < children.length; i++) {
            if (santasList.includes(children[i])) {
                result.push(children[i])
            }
        }
    }
    result = result.sort()
    console.log(result)
}

findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"])// ["Jason", "Jordan"]
// ||
// function findChildren(santasList, children) {
//     let ans = [];
//     for (let i=0; i<santasList.length; ++i)
//         for (let j=0; j<children.length; ++j)
//             if (ans.indexOf(children[j])==-1 && santasList[i]==children[j])
//                 ans.push(children[j]);
//     return ans.sort();
// }

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let total = 0
    let result = []
    let newArr = [...arr].sort((a, b) => a - b)
    console.log(newArr)
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(Math.max(...newArr))
            newArr.pop()
        } else if (i % 2 !== 0) {
            result.push(Math.min(...newArr))
            newArr.shift()
        }
        if (result.length === 2) {
            total += result[0] * result[1]
            result = []
        }
    }
    console.log(total)
}

minSum([12, 6, 10, 26, 3, 24]) //342

clear()

// Правильная последовательность скобок

function isValid(s) {
    let arr = s.split("")
    let result
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
            stack.push(arr[i])
            arr.shift()
        }
    }
    for (let j = 0; j < stack.length; j++) {
        if (stack[j] === "(" && arr[arr.length - j - 1] === ")") {
            stack.pop()
            arr.pop()
        } else if (stack[j] === "[" && arr[arr.length - j - 1] === "]") {
            stack.pop()
            arr.pop()
        } else if (stack[j] === "{" && arr[arr.length - j - 1] === "}") {
            stack.pop()
            arr.pop()
        } else break;
    }
    if (stack.length === 0 && arr.length === 0) {
        result = true
    } else {
        result = false
    }
    console.log(result)
}

// bellow not working)
isValid("(())")

clear()

function isValidBetter(s) {
    let stack = []
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    for (let i = 0; i < s.length; i++) {
        const current = s[i]

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false;
        } else {
            stack.push(current)
        }
    }

    function isClosedBracket(ch) {
        return [")", "}", "]"].indexOf(ch) > -1
    }

    return (stack.length === 0)
}

console.log("()", isValidBetter("())"))
console.log("()[]{}", isValidBetter("()[]{}"))
console.log("(]", isValidBetter("(]"))
console.log("(]", isValidBetter("(]"))
console.log("{[]}", isValidBetter("{[]}"))
console.log("{[[]{}]}()()", isValidBetter("{[[]{}]}()()"))


// Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    let newArr = arr.sort((a, b) => b - a)
    let sum = 0
    for (let i = 0; i < newArr.length; i++) {
        if (!!newArr[i] && !!newArr[i + 1] || arr[i] === 0 && !!newArr[i + 1] || arr[i + 1] === 0) {
            sum += newArr[i] - newArr[i + 1]
        } else break
    }
    console.log(sum)
}

sumOfDifferences([1, 0, -1, -3, 1])// 4
clear()

// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.
//     If the sum of the n largest numbers is higher, return "sum". If the product of the n smallest numbers is higher, return "product". If the 2 values are equal, return "same"
function sumOrProduct(array, n) {
    let newArr = array.sort((a, b) => b - a)
    let sum = 0
    let multiply = 1
    for (let i = 0; i < n; i++) {
        sum += newArr[i]
    }
    newArr.reverse()
    for (let j = 0; j < n; j++) {
        multiply *= newArr[j]
    }
    return sum === multiply ? "same" : sum > multiply ? "sum" : "product"
}

sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) //sum

// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. !!Your function should not mutate the input array, and this will be tested (where applicable).
// Notice that the returned list will always be of odd size, since there will always be a definitive middle element.
function mirror(data) {
    let newData = [...data]
    let result = []
    let sort = newData.sort((a, b) => a - b)
    result.push(...sort);
    sort.reverse();
    sort.shift();
    result.push(...sort)
    return (result)
}

mirror([-8, 42, 18, 0, -16]) //[-16, -8, 0, 18, 42, 18, 0, -8, -16]

// In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically,
// as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.
function strangeMath(n, k) {
    const arr = [0];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.sort().indexOf(k)
}

// join
{
    const arr = ['c', 'o', 'd', 'e'];
    console.log(arr.join()); // "c,o,d,e"
    console.log(arr.join('')); // "code"
    console.log(arr.join(' : ')); // "c : o : d : e"
    console.log(arr.join(11)); // "c11o11d11e"
    const arr2 = [undefined, 'c', 'o', 'd', 'e', null];
    console.log(arr2.join('?')); // "?c?o?d?e?", значения undefined и null стали пустыми
    {
        const arr = ['bag', 'map', 'cod', 'log', 'fa'];
        let res = arr.join('_');
        console.log(res); // "bag_map_fa"}
    }

    // Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
    function smash(words) {
        return words.join(" ")
    };

    // Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
    function buildString(...template) {
        return `I like ${template.join(', ')}!`;
    }

    // Create a function that returns the CSV representation of a two-dimensional numeric array.
    function toCsvText(array) {
        return array.join('\n')
    }

    // In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a.
    // Note that the difference may be zero!
    function arithmeticSequenceElements(a, r, n) {
        let arr = []
        let newValue = 0
        for (let i = a; newValue < n; i += r) {
            newValue++
            arr.push(i)
        }
        return arr.join(", ")
    }

    clear()
    // Given an array of ones and zeroes, convert the equivalent binary value to an integer.
    // Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
    const binaryArrayToNumber = arr => {
        arr = arr.map(el => "" + el)
        console.log(parseInt(arr.join(""), 2))
    };
    binaryArrayToNumber([1, 1, 1, 1]) //15

    // Метод every() осуществляет проверку, удовлетворяют ли все элементы массива условию, указанному в передаваемой функции.
    // Возвращает true, если все элементы отвечают условию, переданному в функцию, и false, если хотя бы один – нет.

    // Create a method all which takes to params: a sequence a function (function pointer in C)
    // and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
    function all(arr, fun) {
        return arr.every(fun)
    }

    all([1, 2, 3, 4, 5], function (v) {
        return v < 9
    })// true
    // You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.
    function validateWord(s) {
        let newS = s.split('')
        console.log(newS)
        newS.every(el => newS.indexOf(el) !== newS.indexOf(el))
    }

    validateWord("abc!abc!") //true, do not working))

    clear()

    function inAscOrder(arr) {
        console.log(arr.every((el, index) => el < arr[index + 1] || typeof arr[index + 1] === 'undefined'))
    }

    inAscOrder([1, 2, 4, 7, 19]) // true
    // You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
    function smallEnough(a, limit) {
        return a.every(el => el <= limit)
    }

    function solve(arr) {
        let result = arr.filter((el, index) => el > arr[index + 1] || arr[index + 1] === undefined)
        result = result.filter((el, index) => result.indexOf(el) === index)
        // let result = arr.filter((el,index) => arr.every(elE => elE > arr[index]))
        console.log(result)
    };
    solve([16, 17, 14, 3, 14, 5, 2])//[ 17,14,5,2])
    // Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, указанному в передаваемой функции.
    {
        const arr = [-10, -2, 0, 1, 9, 5];
        console.log(arr.some(el => el < 0)); // true
    }
    {
        const arr = [-10, -2, 2, 34, 90, 52];
        console.log(arr.some(el => el % 2)); // false
    }
    {
        const arr = [-12.59, 13.14, 19.32, -12.1, 13.9];
        console.log(arr.some(el => Math.pow(el, 2) >= 128))//true
    }

    // Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
    function any(arr, fun) {
        return arr.some(fun)
    }

    any([1, 2, 3, 4], function (v, i) {
        return v > 3
    })//true
    any([1, 2, 3, 4], function (v, i) {
        return v > 4
    })//false
    function anyArrows(arrows) {
        return arrows.some(a => !a.damaged);
    }

    anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]) //true
    anyArrows([{range: 10, damaged: true}, {damaged: true}])// false

    // Метод forEach() выполняет переданную в него функцию один раз для каждого элемента в массиве. Работает, как цикл.
    {
        const arr = ['One', 'Two', 'Three', '!'];
        arr.forEach(el => console.log(el))
    }
    {
        // вывести в консоль значение каждого элемента (el) массива в виде: "Element №i is el", где i - индекс элемента + 1, el - значение элемента массива arr.
        const arr = ['Good', 'luck', '!!!'];
        arr.forEach((el, i) => console.log(`Element №${i + 1} is ${el}`));
    }

    function points(games) {
        let score = 0
        // games.forEach(el => console.log(`first el = ${el[0]}, second el = ${el[el.length - 1]}`))
        games.forEach(el => el[0] > el[el.length - 1] ? score += 3 : el[0] < el[el.length - 1] ? score += 0 : score += 1)
        console.log(score)
    }

    points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]) //30
    clear()

    // Метод reduce() применяет переданную в него функцию один раз для каждого элемента в порядке возрастания и возвращает одно результирующее значение.

    // Дан массив чисел arr. Вернуть сумму всех элементов массива, увеличенную на 100.
    {
        const arr = [5, 20, 30, 55];
        let result = arr.reduce((acc, curr) => acc + curr, 100); //
        console.log(result); // 210
    }
    // Дан массив чисел arr. Вернуть сумму всех элементов массива.
    {
        const arr = [1, 2, 5, 8];
        let result = arr.reduce((acc, curr) => acc + curr)
        console.log(result); // 16
    }
    //    Дан массив чисел arr. Верните произведение всех чисел массива.
    {
        const arr = [2, 5, 5, 100];
        let result = arr.reduce((acc, curr) => acc * curr, 1);
        console.log(result); // 5000
    }
    {
        const arr = [5, 3, 10, 6, 8];
        let result = arr.reduce((acc, curr) => acc + curr, 0) / arr.length
        console.log(result); // 6.4
    }
    {
        const arr1 = [-1, 5, 0, 6];
        const arr2 = [10, -10, 2, 3];
        let add1 = arr1.reduce((acc, curr) => acc + curr, 0);
        let add2 = arr2.reduce((acc, curr) => acc + curr, 0);
        let mult = add1 * add2;
        //mult 50
    }
    //длина всех желементов
    {
        const arr1 = ['year', 'day', 'week', 'weekend'];
        let result = arr1.reduce((acc, curr) => curr.length + acc, 0)
        console.log(result) //18
    }

    // Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
    function sum(numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0)
    };
    // Given an array of integers, calculate the Average of these numbers.
    // Main challenge is to write shortest and compact function for it.For example: var a = [0, 1, 2]; avg(a) // output should be 1
    // Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.
    const avg = a => a.reduce((acc, curr) => acc + curr, 0) / a.length
    clear()

    function mean(lst) {
        // let str = ""
        //
        // let sum = lst.reduce((acc, curr) =>  {
        //     if(!isNaN(curr)) {
        //         return acc + +curr
        //     } else {
        //         str = str += curr
        //         return acc
        //     }
        // }, 0)
        let result = []
        // let sum = lst.reduce((acc, curr) => !isNaN(curr) ? console.log(acc, " Number"): console.log(curr , " String"), 0)
        let sum = lst.reduce((acc, curr) => !isNaN(curr) ? +curr + acc : acc, 0)
        let str = lst.reduce((acc, curr) => isNaN(curr) ? curr + acc : acc, '')
        return [sum / 10, str.split("").reverse().join("")]
    }

    mean(lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']) //[3.6, "udiwstagwo"]

    {
        function multi(arr) {
            return arr.reduce((acc, curr) => acc * curr, 1)
        }

        function add(arr) {
            return arr.reduce((acc, curr) => acc + curr, 0)
        }

        function reverse(str) {
            return str.split("").reverse().join("");
        }
    }
    // You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.
    // Try researching about built-in Array methods; they may help shorten your code a lot
    function sumSquares(array) {
        console.log(array.reduce((acc, curr) => Math.pow(curr, 2) + acc, 0))
    }

    sumSquares([7, 3, 9, 6, 5]) //200

    // Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
    function arrayMadness(a, b) {
        let resultA = a.reduce((acc, curr) => Math.pow(curr, 2) + acc, 1)
        let resultB = b.reduce((acc, curr) => Math.pow(curr, 3) + acc, 1)
        return resultA > resultB
    }

    arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1])// false

    // An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
    function findDeletedNumber(arr, mixArr) {
        let deletion = 0
        arr.reduce((acc, curr) => mixArr.includes(curr) ? "" : deletion = curr, 0)
        return deletion
    }

    findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])// 5
    findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])// 0
    function arrayPlusArray(arr1, arr2) {
        let result1 = arr1.reduce((acc, curr) => acc + curr, 0)
        let result2 = arr2.reduce((acc, curr) => acc + curr, 0)
        return result1 + result2;
    }

    arrayPlusArray([100, 200, 300], [400, 500, 600]) //2100

    // My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
    // In honor of my grandfather's memory we will write a function using his formula!
    // Take a list of ages when each of your great-grandparent died.
    // Multiply each number by itself.
    // Add them all together.
    // Take the square root of the result.
    // Divide by two.
    function predictAge(...arg) {
        let result = arg.reduce((acc, curr) => Math.pow(curr, 2) + acc, 0)
        result = Math.trunc((Math.sqrt(result) / 2))
        return result
    }

    predictAge(65, 60, 75, 55, 60, 63, 64, 45) //86


    // Метод map() создает новый массив с результатом вызова функции для каждого элемента исходного массива.

    //Вернуть макс. площадь прямоугл.
    function maxRectangleSquare(arr) {
        let count = null
        let result = arr.map(el => el[0] * el[1] > count ? count = el[0] * el[1] : count)
        return count
    }

    {
        const arr = [1, 4, 9, 36];
        const numSquare = arr.map(el => el ** 2);
        console.log(numSquare); //[1, 16, 81, 1296]
    }
    // Дан массив десятичных чисел arr. Необходимо вернуть новый массив, содержащий элементы исходного, причем для чисел, имеющих четный индекс, произвести округление до ближайшего целого, значение остальных сделать равным 0.
    {
        const arr = [1.57, 2.1, 3.8, 10.67, 25.6];
        const nums = arr.map((el, i) => i % 2 === 0 ? Math.round(el) : 0);
        console.log(nums); // [2, 0, 4, 0, 26]
    }

    // Напишите функцию maxRectanglePerimeter, которая в качестве аргумента принимает массив arr, содержащий размеры прямоугольников, и возвращает максимальный периметр прямоугольника. Если массив пустой, вернуть null.
    function maxRectanglePerimeter(arr) {
        let count = null
        let result = arr.map(el => (el[0] + el[1]) * 2 > count ? count = (el[0] + el[1]) * 2 : count)
        return count
    }

    // These are example of how to convert a number to an ascii Character
    let ArrowFunc = function (arr) {
        return arr.map(el => String.fromCharCode(el)).join('');
    }
    // You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.
    // In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.
    // Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).
    // wtf XD
    function toFreud(string) {
        return string.length > 0 ? string.split(" ").map(el => "sex").join(" ") : ""
    }

    // Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
    function toNumberArray(stringarray) {
        return stringarray.map(el => +el)
    }

    // Метод splice() изменяет содержимое исходного массива путем удаления/замены/добавления элементов.

    // Задание 3. Удалить 2 элемента по индексу 1 и заменить их на '365' и '7'.
    {
        const arr = ['year', 'day', 'week', 'minute', 'second'];
        let removed = arr.splice(1, 2, '365', '7');
        console.log(removed); // ["day", "week"]
        console.log(arr); // ["year", "365", "7", "minute", "second"],
    }

    // Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/arra
    function take(arr, n) {
        let result = arr.splice(0, n)
        return result
    }

    take([0, 1, 2, 3, 5, 8, 13], 3) // [0, 1, 2]

    // Удалить все элементы, начиная с индекса 1.
    {
        const arr = ['year', 'day', 'week', 'minute', 'second'];
        let removed = arr.splice(1);
        console.log(removed); // ["day", "week", "minute", "second"
        console.log(arr); // ["year"]
    }
    // Метод slice() предназначен для копирования элементов массива согласно указанным индексам.

    // Дан массив строк arr. Необходимо вернуть новый массив, который бы содержал все элементы исходного массива. Затем добавить в конец получившегося массива длину исходного массива arr. Вывести значения обоих массивов в консоль.
    {
        const arr = ['raw', 'line', 'queue', 'seat'];
        let result = arr.slice()
        result.push(arr.length)
        console.log(arr) //['raw', 'line', 'queue', 'seat']
        console.log(result) //['raw', 'line', 'queue', 'seat', 4]
    }
    // Дан объект obj и массив arr. Необходимо создать новый массив, который бы включал в себя первые два элемента исходного. Затем изменить свойство name объекта obj в новом массиве на 'Elvis'. Вывести данное свойство obj каждого массива в консоль.
    {
        const obj = {
            name: 'Joey',
            age: 30,
        };
        const arr = ['person', obj, 1, 33021];
        const newArr = arr.slice(0, 2)
        obj.name = 'Sasha'
        console.log(arr, newArr, obj.name)
    }
    {
        // Дан массив чисел и строк arr. Сделать копию последних двух элементов массива и вернуть их новым массивом. Убедиться, что значение последнего элемента исходного массива строго равно значению последнего элемента нового массива.
        const arr = ['umbrella', 2, 3, 'zipper'];
        let newArr = arr.slice(-2)
        console.log(arr[arr.length - 1] === newArr[newArr.length - 1]) //true
    }
    {
        // Haskell has some useful functions for dealing with lists:
        // | HEAD | <----------- TAIL ------------> |
        // [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
        // | <----------- INIT ------------> | LAST |
        const head = (arr) => {
            let result = arr.slice(0, 1)
            return +result.join("")
        }
        const tail = (arr) => {

            return arr.slice(1)
        }
        const init = (arr) => {
            return arr.slice(0, -1)
        }
        const last = (arr) => {
            return +arr.slice(-1).join("")
        }
        head([1, 2, 3, 4, 5])// 1
        tail([1, 2, 3, 4, 5])//[2,3,4,5]
        init([1, 5, 7, 9]) //[1,5,7]
        last([7, 2])// 2
    }

    // This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces.
    // If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
    function array(arr) {
        arr = arr.split(",")
        let result = null
        if (arr.length >= 3) {
            result = arr.slice(arr.length / 2, arr.length / 2 + 1)[0]
        }
        return result
    }

    array('')// null
    array('1, 3')// null
    array('1,2,3')// '2'
    // || function array(arr){
    //     return arr.split(",").slice(1,-1).join(" ") || null;
    // }

    // Coding in function cutIt, function accept 1 parameter:arr. arr is a string array. The first mission: Traversing arr, find the shortest string length.
    // The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
    function cutIt(arr) {
        let result = []
        let shortest = arr[0].length
        arr.forEach(el => el.length < shortest ? shortest = el.length : 0)
        arr.forEach(el => result.push(el.slice(0, shortest)))
        return result
    }

    cutIt(["ab", "cde", "fgh"]) // ["ab","cd","fg"]
    cutIt(["abc", "defgh", "ijklmn"]) // ["abc","def","ijk"]
    cutIt(["codewars", "javascript", "java"]) // ["code","java","java"]

    function withoutLast(arr) {
        let result = arr.slice(0, -1)
        return result
    }

    {
        let str = 'Hi';
        let str2 = 'John';
        console.log(`${str}, ${str2}!`); // "Hi, John!"

    }
    {
        let str = 'Bench'; //
        str[2] = 'a';
        console.log(str); // "Bench" – строка осталась неизменной
    }
    // Your task is to return the correct string using the Template String Feature.
    let TempleStrings = function (obj, feature) {
        return obj + " are " + feature
    }

    // Finish the uefaEuro2016() function so it return string just like in the examples below:
    function uefaEuro2016(teams, scores) {
        let result
        if (scores[0] === scores[1]) {
            result = `At match ${teams[0]} - ${teams[1]}, teams played draw.`
        } else if (scores[0] > scores[1]) {
            result = `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
        } else {
            result = `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
        }
        return result
    }

    uefaEuro2016(['Germany', 'Ukraine'], [2, 0]) //"At match Germany - Ukraine, Germany won!"
}
