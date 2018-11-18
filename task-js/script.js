var cards = [
    "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "AD", "QD", "KD", "JD",
    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "AC", "QC", "KC", "JC",
    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "AH", "QH", "KH", "JH",
    "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "AS", "QS", "KS", "JS",

    "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "AD", "QD", "KD", "JD",
    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "AC", "QC", "KC", "JC",
    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "AH", "QH", "KH", "JH",
    "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "AS", "QS", "KS", "JS",

    "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "AD", "QD", "KD", "JD",
    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "AC", "QC", "KC", "JC",
    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "AH", "QH", "KH", "JH",
    "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "AS", "QS", "KS", "JS",

    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "AH", "QH", "KH", "JH",
    "8H", "9H", "AH"
];

function countDeckCards (cards) {
    var fullDeskLength = 48;

    // Формируем удобный массив для подсчета колод и карт
    var newArr = [];
    for (var s = 0; s < cards.length; s++) {
        var indexCur = newArr.indexOf(cards[s]);
        if (indexCur + 1) {
            newArr[indexCur + 1] += 1;
        } else {
            newArr.push(cards[s]);
            newArr.push(1);
        }
    }

    // Подсчитываем колличество колод и карт
    var countCards = 0;
    var countDesk = Infinity;

    for (var e = 0; e < newArr.length; e++) {
        if (typeof newArr[e] === "number") {
            countCards++;
            if (countDesk > newArr[e]) {
                countDesk = newArr[e]
            }
        }
    }

    // Вывод инфеормации в консоль
    if (countCards < fullDeskLength) {
        console.log("Ни одна колода не собрана");
    } else {
        console.log("Собрано полных колод: " + countDesk);
    }
}

countDeckCards(cards);
