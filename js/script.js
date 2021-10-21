function clear() {
    console.clear()
}


// Выведите строку по одному слову в столбик, выравние по правому краю
function wordsInColumn(text) {
    let maxLengthWord = Math.max(...text.split(' ').map(el => el.length))
    // let str = text.split(' ').map(el => `${el}\n`).join('')
    let arr = text.split(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let tempSpace = maxLengthWord - arr[i].length
        let newWord = arr[i].split('')

        if (i === 0 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (i !== arr.length - 1 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (i === arr.length - 1 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}`.split(''))
            result.push(`${newWord.join('')}`)
        }
        //For biggest word
        else if (newWord.length === maxLengthWord && i === 0) {
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (newWord.length === maxLengthWord && i !== arr.length - 1) {
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (newWord.length === maxLengthWord && i === arr.length - 1) {
            console.log(`${newWord.join('')}`.split(''))
            result.push(`${newWord.join('')}`)
        }
    }
    console.log(result)
    console.log(result.join(''))
}

// wordsInColumn('I will get everything I want')
// wordsInColumn('Enjoy every moment')
// wordsInColumn('Live without regrets')
wordsInColumn('Never look back')

clear()


function isPalindrome(str) {
    let str1 = str.toLowerCase().split(' ').join('')
    let str2 = str.toLowerCase().split('').reverse().join('').split(' ').join('')
    return str1 === str2
}

isPalindrome('Enjoy every moment') //false
isPalindrome('Was it a car or a cat I saw') //true

{
    let str = 'K30os2t53ya'
    str = str.split(/[0-9]/).join('')
    //Kostya
    let user = {
        name: "John",
        age: 30,
        "likes programming": true,
    };
    //console.log(user.likes programming);  // появится ошибка
    console.log(user['likes programming']);  // true
    delete user.age
    let user2 = new Object(); // "конструктор объекта"
    let user3 = {};           // "литерал объекта"
}

function wrap(value) {
    const obj = {'value': value}
    return obj
}

//Fix errors
let rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        },
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
        }
    }
}

function bloodAlcoholContent(drinks, weight, sex, time) {
    let bac = ((drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4)
    return +bac;
}

bloodAlcoholContent({ounces: 12.5, abv: 0.4}, 190, 'male', 1)// 0.0837)
bloodAlcoholContent({ounces: 180, abv: 0.05}, 160, 'female', 1)// 0.1758);
bloodAlcoholContent({ounces: 50, abv: 0.14}, 250, 'male', 3)// 0.0601);
bloodAlcoholContent({ounces: 20, abv: 0.4}, 100, 'female', 2)// 0.2414);
clear()

function giveMeFive(obj) {
    let result = []
    for (let key in obj) {
        if (obj[key].length === 5 && key.length !== 5) {
            result.push(obj[key])
            console.log(1)
        } else if (key.length === 5 && obj[key].length !== 5) {
            console.log(key.length + ' ' + obj[key].length)
            result.push(key)
            console.log(2)
        } else if (key.length === 5 && obj[key].length === 5) {
            result.push(key)
            result.push(obj[key])
            console.log(3)
        }
    }
    return result
}

giveMeFive({Our: "earth", is: "a", beautyful: "world"})//["earth","world"]);
giveMeFive({Ihave: "enough", money: "to", buy: "a", car: "model"})//["Ihave","money","model"])
giveMeFive({Pears: "than", apple: "sweet"})//["Pears","apple","sweet"])

// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
function greet(language) {
    let languageArr = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    return languageArr[language] || 'Welcome'
}

greet('english')//, 'Welcome', "Your function should have returned 'Welcome'. Try again.");
greet('dutch')//, 'Welkom', "Your function should have returned 'Welkom'. Try again.");
greet('IP_ADDRESS_INVALID')//, 'Welcome', "Your function should have returned 'Welcome'. Try again.");

function duckDuckGoose(players, goose) {
    for (let i = 0; i < 100; i++) {
        if (goose > players.length) {
            goose -= players.length
        } else break
    }
    return result = players[goose - 1]
}

duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 30)//z
duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 28)//, "g");
duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 12)//, "b");

function getCollege(player) {
    let result
    for (let key in curry) {
        if (key === 'college') {
            result = player[key]
        }
    }
    return result
}

let curry = {fname: "Steph", lname: "Curry", number: 30, team: "Warriors", college: "Davidson"}

getCollege(curry) //"Davidson"

// Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.
function redarr(arr) {
    let result = {}
    let removeDuplicates = []
    for (let i = 0; i < arr.length; i++) {
        let channel = arr[i]
        if (removeDuplicates.indexOf(channel) === -1) {
            removeDuplicates.push(channel)
        }
    }
    removeDuplicates = removeDuplicates.sort()
    removeDuplicates.forEach((el, index) => result[index] = el)
    return result
}

redarr(["BBC1", "BBC2", "MTV"])// {'0': 'BBC1','1': 'BBC2','2': 'MTV'}, "
redarr(["BBC1", "BBC1", "BBC2", "MTV"])// {'0': 'BBC1','1': 'BBC2','2': 'MTV'},

{
    console.log({}.toString.call([])); // "[object Array]"
    console.log({}.toString.call({})); // "[object Object]"
    console.log({}.toString.call(new Date())); // "[object Date]"
    console.log({}.toString.call(null)); // "[object Null]"

    let value = {};
    console.log(value instanceof Object); // true
    console.log(value instanceof Array); // false

    let arr = [1, 2];  // массив
    console.log(arr instanceof Object); // true Array наследует от класса Object
    console.log(arr instanceof Array);  // true array принадлежит классу Array

    let arr1 = [];
    console.log(arr1.constructor.name); // "Array"
    console.log(arr1.constructor === Array); // true

    let user = {
        name: 'Bob',
        age: 23,
    };
    let result = {}.toString.call(user) // "[object Object]"
    let result2 = {}.toString.call({}) // "[object Object]"
}
// Create a function that takes two arguments: An array of objects which feature the season, the team and the country of the Champions League winner. // Country (as a string, for example, 'Portugal')
// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.
const winnerList1 = [
    {season: '1996–97', team: 'Borussia Dortmund', country: 'Germany'},
    {season: '1997–98', team: 'Real Madrid', country: 'Spain'},
    {season: '1998–99', team: 'Manchester United', country: 'England'},
    {season: '1999–00', team: 'Real Madrid', country: 'Spain'},
];
let country = 'Spain'

function countWins(winnerList1, country) {
    let count = 0
    for (let key in winnerList1) {
        if (winnerList1[key].country === country) {
            count++
        }
    }
    return count
}

countWins(winnerList1, country) //2

{
    const diary = {
        text: true,
    };

    const copy = diary;
    console.log(copy);
// [object Object] {
//   text: true
// }
    copy.date = '12.01.2018';
    diary.number = 100;
    delete diary.text;
    console.log(diary);
// [object Object] {
//   date: "12.01.2018",
//   number: 100,
// }

    console.log(copy)
// [object Object] {
//   date: "12.01.2018",
//   number: 100,
// }
    const obj1 = {};
    const obj2 = obj1;
    console.log(obj1 == obj2); // true
    console.log(obj1 === obj2); // true
    // одинаковая ссылка

    const obj3 = {};
    const obj4 = {};
    console.log(obj3 == obj4); // false
    console.log(obj3 === obj4); // false
    //Два разных объекта, при созданиее было созданно две разные ссылки
    const obj = {
        name: 'Kevin',
        age: 30,
    };
    let str = undefined;
    str = obj.name;
    delete obj.name;
    //str = 'Kevin'
}

function getMax1() {
    let max = {name: 'Max Headroom'}
    return max;
}

function getMax2() {
    return {name: 'Max Headroom'}
}

let result = getMax1() == getMax2() //false

const person = {
    name: 'Joey',
    age: 30,
    "likes cats": true,
};
console.log(person.name); // "Joey"
console.log(person.age); // 30
// console.log(person.likes cats); // SyntaxError
// console.log(person['likes cats']); // true
let secretCode = 'password'
person[secretCode] = '123'
console.log(person[secretCode])

// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

let makeBackronym = function (string) {
    let result = []
    let backronym = {
        'a': 'awesome',
        'b': 'beautiful',
        'c': 'confident',
        'd': 'disturbing',
        'e': 'eager',
        'f': 'fantastic',
        'g': 'gregarious',
        'h': 'hippy',
        'i': 'ingestable',
        'j': 'joke',
        'k': 'klingon',
        'l': 'literal',
        'm': 'mustache',
        'n': 'newtonian',
        'o': 'oscillating',
        'p': 'perfect',
        'q': 'queen',
        'r': 'rant',
        's': 'stylish',
        't': 'turn',
        'u': 'underlying',
        'v': 'volcano',
        'w': 'weird',
        'x': 'xylophone',
        'y': 'yogic',
        'z': 'zero',
    }
    string.split('').forEach(el => result.push(backronym[el]))
    return result.join(' ')
};

makeBackronym("dgm")//, "disturbing gregarious mustache"
makeBackronym("lkj")//, "literal klingon joke"
makeBackronym('interesting')//, 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious','Output not as expected'
makeBackronym('codewars')//, 'confident oscillating disturbing eager weird awesome rant stylish','Output not as expected'

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
function arithmetic(a, b, operator) {
    const calculate = {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }
    return calculate[operator]
}

arithmetic(1, 2, "add")//, 3!");
arithmetic(8, 2, "subtract")//, 6
arithmetic(5, 2, "multiply")//, 10
arithmetic(8, 2, "divide")//, 4

