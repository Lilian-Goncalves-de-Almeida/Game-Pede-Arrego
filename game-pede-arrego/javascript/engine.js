// Variables

const labelAnswer = document.getElementById("answer-label");
const equation = document.getElementById("equation");
const pontuationText = document.getElementById("pontuation");
const winScreen = document.querySelector(".win-container");
const titleCardScreen = document.getElementById("win-text-title");
const textCardScreen = document.getElementById("win-text");

const accountsLevel1 = [
    {"account":"1+1","answer": "2"},
    {"account":"1+2","answer": "3"},
    {"account":"1+3","answer": "4"}
];

const accountsLevel2 = [
    {"account":"1x1","answer": "1"},
    {"account":"1x2","answer": "2"},
    {"account":"1x3","answer": "3"}
];

const accountsLevel3 = [
    {"account":"1x23","answer": "23"},
    {"account":"1x45","answer": "45"},
    {"account":"1x56","answer": "56"}
];


const accountsLevel4 = [
    {"account":"2x1","answer": "2"},
    {"account":"3x1","answer": "3"},
    {"account":"4x2","answer": "8"},
    {"account":"5x1","answer": "5"},
    {"account":"2x3","answer": "6"}
];

const accountsLevel5 = [
    {"account":"6÷2","answer": "3"},
    {"account":"8÷4","answer": "2"},
    {"account":"10÷5","answer": "2"},
    {"account":"12÷3","answer": "4"},
    {"account":"15÷5","answer": "3"}
];

const accountsLevel6 = [
    {"account":"2²","answer": "4"},
    {"account":"3²","answer": "9"},
    {"account":"2³","answer": "8"},
    {"account":"4²","answer": "16"},
    {"account":"5¹","answer": "5"}
];

const accountsLevel7 = [
    {"account":"2+3+1","answer": "6"},
    {"account":"4x2+3","answer": "11"},
    {"account":"10-4+2","answer": "8"},
    {"account":"5x3-2","answer": "13"},
    {"account":"6+6/2","answer": "9"}
];

const accountsLevel8 = [
    {"account":"12x3","answer": "36"},
    {"account":"15÷3","answer": "5"},
    {"account":"18x2","answer": "36"},
    {"account":"24÷6","answer": "4"},
    {"account":"9x5","answer": "45"}
];

const accountsLevel9 = [
    {"account":"3³","answer": "27"},
    {"account":"2⁴","answer": "16"},
    {"account":"5²","answer": "25"},
    {"account":"4³","answer": "64"},
    {"account":"6²","answer": "36"}
];

const accountsLevel10 = [
    {"account":"(3+2)x4","answer": "20"},
    {"account":"(6-2)x5","answer": "20"},
    {"account":"(5+5)÷2","answer": "5"},
    {"account":"10+(3x2)","answer": "16"},
    {"account":"8x(2+1)","answer": "24"}
];

const accountsLevel11 = [
    {"account":"2x3+4-1","answer": "9"},
    {"account":"5x4÷2+3","answer": "13"},
    {"account":"7+6x3-2","answer": "23"},
    {"account":"12÷3+5x2","answer": "14"},
    {"account":"9-2+8x2","answer": "23"}
];

const accountsLevel12 = [
    {"account":"(6+3)²÷3","answer": "27"},
    {"account":"(4²)x3+5","answer": "53"},
    {"account":"(9-3)x4²","answer": "144"},
    {"account":"(2³)x5-4","answer": "36"},
    {"account":"10+(3x3)²","answer": "91"}
];

const accountsLevel13 = [
    {"account":"(5+3x2)²-8÷4","answer": "67"},
    {"account":"(4x3)÷2+10-5","answer": "67"},
    {"account":"(6+4)x3²-7","answer": "83"},
    {"account":"(8/2)³+6-5x2","answer": "56"},
    {"account":"(2⁵+4x3)÷2","answer": "20"}
];





const levels = [accountsLevel1, accountsLevel2, accountsLevel3, accountsLevel4, accountsLevel5, accountsLevel6, accountsLevel7, accountsLevel8, accountsLevel9, accountsLevel10, accountsLevel11, accountsLevel12, accountsLevel13];

var textLabel = "";
var pontuation = 0;
var life = 3;
var accountActual = "";
var level = 0;
var randomAccount = 0;

var heartImage = "";

// Functions
function answer() {
    textLabel = labelAnswer.value;
    labelAnswer.value = "";
    checkAnswer();
    changeEquation();
}

function changeEquation(){
    randomAccount = Math.floor(Math.random() * accountsLevel1.length);
    equation.innerHTML = levels[level][randomAccount].account;
}

function pedirArrego(){
    pontuation = Math.round(pontuation/2);
    changePontuation(pontuation);
    loseLife();
    if(pontuation==1){
        pontuation=0;
    }
    if(level>0){
        level-=1;
    }else{
        level = 0;
    }
    changeEquation();
}

function checkAnswer(){
    if(textLabel == levels[level][randomAccount].answer){
        pontuation+=100;
        if(level<levels.length-1){
            level+=1;
        }else{
            changeTextPopUpScreen("PARABÉNS",`Você ganhou! Pontos: ${pontuation}`);screenWinOrLoseAlert();
        }
    }
    else{
        pontuation = 0;
        loseLife();
        level=0;
    }
    changePontuation(pontuation);
}

function changePontuation(numberPontuation){
    pontuationText.innerHTML = `${numberPontuation}`;
}

function loseLife(){
    if(life>0){
        heartImage = document.getElementById(`heart-red-${life}`);
        heartImage.style.opacity = 0;
        life-=1;
    }else{
        changeTextPopUpScreen(`Pontos: ${pontuation}`,"Não foi dessa vez...");
        screenWinOrLoseAlert();
        
    }

}

function addLife(){
    heartImage = document.getElementById(`heart-red-${life}`);
    heartImage.style.opacity = 1;
    life+=1;
}

function addAllLifes(){
    heartImage = document.getElementById(`heart-red-1`);
    heartImage.style.opacity = 1;
    heartImage = document.getElementById(`heart-red-2`);
    heartImage.style.opacity = 1;
    heartImage = document.getElementById(`heart-red-3`);
    heartImage.style.opacity = 1;
}

function screenWinOrLoseAlert(){
    winScreen.classList.remove("hide-object");
}

function correctAnswerAlert(){
    
}

function nextLevel(){
    winScreen.classList.add("hide-object");
    level = 0;
    life = 3;
    pontuation = 0;
    addAllLifes();
    changePontuation(pontuation);
    changeEquation();
}

function changeTextPopUpScreen(titleCard, textCard){
    titleCardScreen.innerText = `${titleCard}`;
    textCardScreen.innerText = `${textCard}`;
}


changeEquation();


/*  TODO LIST

OK - 1 - Criar listas de contas aleatórias para os níveis
OK - 2 - Pegar a resposta do label quando clicar em "Responder"
    OK - 2.1 - Zerar a label ao clicar em qualquer botão
OK - 3 - Animar os botões para quando clicar
OK - 4 - Fazer a verificação da resposta
OK - 5 - Pontuação
    OK - 5.1 - Zerar pontuação quando errar
    OK - 5.2 - Aumentar pontuação quando acertar
    OK - 5.3 - Meiar a pontuação quando apertar arrego
OK - 6 - Vidas
    OK - 6.1 - Se errar perde uma vida
    OK - 6.2 - Se apertar arrego perde uma vida
7 - Sortear uma questão da lista
8 - Nível
    8.1 - Somar 1 ao nível para ir para uma lista de maior dificuldade
    8.2 - Subtrair 1 ao nível para ir para uma lista de menor dificuldade (pede arrego)
    8.3 - Volta a primeira lista quando erra
9 - mudar a questão quando pedi arrego

*/