let cards = [{
    image: "https://image.shutterstock.com/image-vector/cute-boy-show-confused-expression-260nw-1918428074.jpg",
    value: 1,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/cute-kid-welcomevector-illustration-600w-514865776.jpg",
    value: 1,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/person-cartoon-cute-female-600w-1549170071.jpg",
    value: 2,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/kid-doing-experiments-liquids-chemistry-600w-631622963.jpg",
    value: 2,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/kid-walking-schoolback-schoolvector-illustration-600w-717483322.jpg",
    value: 3,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/little-cute-boy-car-kid-600w-1722314899.jpg",
    value: 3,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-illustration/cute-cartoon-little-kid-bunny-600w-1872808438.jpg",
    value: 4,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/cute-boy-standing-position-showing-600w-593080241.jpg",
    value: 4,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/cute-kid-welcomevector-illustration-600w-514865776.jpg",
    value: 5,
    status: "closed"
},
{
    image: "https://image.shutterstock.com/image-vector/cute-boy-welcomevector-illustration-600w-659138983.jpg",
    value: 5,
    status: "closed"
},]
// Durnsten Shuffling Alogorithm

for (let i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

let cardsCopy = cards;

function displayCards(data) {

    let cardsString = "";
    data.forEach(function (card, index) {
        cardsString += `
        <div class="card" style="background-image:url('${card.image}')">
            <div class="overlay ${card.status}" onclick="openCards(${index})"></div>
        </div>`;
    });

    document.getElementById('cards').innerHTML = cardsString;
}

displayCards(cards);

let cardCount = 1;
let val1 = null, val2 = null;
let score = 0;

function openCards(index) {

    console.log(cards);

    cards[index].status = "opened";
    if (cardCount === 1) {
        val1 = cards[index].value;
        cardCount++;
    } else if (cardCount == 2) {
        val2 = cards[index].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;

            // reset after one guess
            val1 = null;
            val2 = null;
            cardCount = 1;
        } else {
            alert("GAME OVER");
            location.reload();
        }
    }

    displayCards(cards);

}
