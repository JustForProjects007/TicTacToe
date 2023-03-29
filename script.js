let currentPlayer = "X";
let winnerPlayer = "Default";
let container = document.querySelector(".TotalBlocksContainer");
let cubics = document.querySelectorAll(".TotalBlocksContainer .Cubic");
let ClearSection = document.querySelector(".clearSection");
let ClearButton = document.querySelector(".clearButton");
let tryCounts = 0;
let Won = false;

console.log(ClearButton);

let winMatchingCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for (let i = 0; i < cubics.length; i++) {
    cubics[i].addEventListener('click', (ev) => {
        if (cubics[i].innerText == "") {
            cubics[i].innerText = currentPlayer;
            tryCounts++;
            CheckingOfWinner();
            CheckingOfEqual();
            currentPlayer = currentPlayer == "X" ? "O" : "X";
        }
        else {
            setTimeout(function () {
                alert("The cell is not empty");
            }, 300)
        }

    })
};

function CheckingOfWinner() {
    for (let i = 0; i < winMatchingCases.length; i++) {
        const [x, y, z] = winMatchingCases[i];
        if (cubics[x].innerText == currentPlayer && cubics[y].innerText == currentPlayer && cubics[z].innerText == currentPlayer) {
            winnerPlayer = currentPlayer;
            tryCounts = 0;
            Won = true;
            cubics.forEach(item => {
                item.innerText = '';
            })
            setTimeout(function () {
                alert(`Player ${winnerPlayer} won the game`);
            }, 300)

        }
    }
};

function CheckingOfEqual() {
    if (tryCounts == 9 && Won == false) {
        tryCounts = 0;
        cubics.forEach(item => {
            item.innerText = '';
        })
        setTimeout(function () {
            alert("Equal Game!");
        }, 300)
    }
}

function ClearFunction() {
    ClearSection.addEventListener('click', (event) => {
        cubics.forEach(item => {
            tryCounts = 0;
            item.innerText = '';
        })
    });
}