const instructionText = document.querySelector('.instruction-text');
const level = document.querySelectorAll('.difficulty');
const shuffleBtn = document.querySelector('.shuffle-btn');
const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');
const ancientsContainer = document.querySelector('.ancients-container');
const difficultyContainer = document.querySelector('.difficulty-container');
const currentState = document.querySelector('.current-state');

const firstStageGreenDot = document.querySelector('.first-stage-green');
const firstStageBrownDot = document.querySelector('.first-stage-brown');
const firstStageBlueDot = document.querySelector('.first-stage-blue');
const secondStageGreenDot = document.querySelector('.second-stage-green');
const secondStageBrownDot = document.querySelector('.second-stage-brown');
const secondStageBlueDot = document.querySelector('.second-stage-blue');
const thirdStageGreenDot = document.querySelector('.third-stage-green');
const thirdStageBrownDot = document.querySelector('.third-stage-brown');
const thirdStageBlueDot = document.querySelector('.third-stage-blue');


import brownCards from './brownCards.js';
import blueCards from './blueCards.js';
import greenCards from './greenCards.js';
import ancientsData from './Ancients.js';
import difficultiesData from './Difficulties.js';

export {
    brownCards,
    blueCards,
    greenCards,
    ancientsData,
    difficultiesData
  };

/// нажатие на уровень 

let SelectedLevel;

difficultyContainer.onclick = function(event) {
    let target = event.target;
    if (target.className != 'difficulty') return;
    chooseLevel(target);
};

function chooseLevel(level) {
    if (SelectedLevel) {
        SelectedLevel.classList.remove('difficulty-active');
    }
    SelectedLevel = level;
    SelectedLevel.classList.add('difficulty-active');

    instructionText.textContent = 'Shuffle cards';

    shuffleBtn.classList.remove('shuffle-non-active');
  };

/// нажатие на shuffle cards 

function shuffleCardsBtn() {
    
    shuffleBtn.classList.add('shuffle-inactive');
    deck.classList.remove('deck-inactive');
    lastCard.classList.remove('last-card-inactive');
    currentState.classList.remove('current-state-inactive');
    instructionText.textContent = 'Your deck is ready!';
}  

shuffleBtn.addEventListener('click', shuffleCardsBtn);

/// возвращает рандомное число

function getRandomNum(arr) {
    return Math.floor(Math.random() * (arr.length - 1)) + 1;
  };

/// создание колод карт для каждого этапа

let firstStageDeck = [];
let secondStageDeck = [];
let thirdStageDeck = [];

let greenCardsList = greenCards;
let brownCardsList = brownCards;
let blueCardsList = blueCards;

function CardsForStages(ancient) {
    
    for (let i = 0; i < ancient.firstStage.greenCards; i++) {
        firstStageDeck.push(greenCardsList[getRandomNum(greenCardsList)]);
        greenCardsList = greenCardsList.filter(item => !firstStageDeck.includes(item));
    }

    for (let i = 0; i < ancient.firstStage.brownCards; i++) {
        firstStageDeck.push(brownCardsList[getRandomNum(brownCardsList)]);
        brownCardsList = brownCardsList.filter(item => !firstStageDeck.includes(item));
    }

    for (let i = 0; i < ancient.firstStage.blueCards; i++) {
        firstStageDeck.push(blueCardsList[getRandomNum(blueCardsList)]);
        blueCardsList = blueCardsList.filter(item => !firstStageDeck.includes(item));
    }

    for (let i = 0; i < ancient.secondStage.greenCards; i++) {
        secondStageDeck.push(greenCardsList[getRandomNum(greenCardsList)]);
        greenCardsList = greenCardsList.filter(item => !secondStageDeck.includes(item));
    }
    
    for (let i = 0; i < ancient.secondStage.brownCards; i++) {
        secondStageDeck.push(brownCardsList[getRandomNum(brownCardsList)]);
        brownCardsList = brownCardsList.filter(item => !secondStageDeck.includes(item));
    }

    for (let i = 0; i < ancient.secondStage.blueCards; i++) {
        secondStageDeck.push(blueCardsList[getRandomNum(blueCardsList)]);
        blueCardsList = blueCardsList.filter(item => !secondStageDeck.includes(item));
    }

    for (let i = 0; i < ancient.thirdStage.greenCards; i++) {
        thirdStageDeck.push(greenCardsList[getRandomNum(greenCardsList)]);
        greenCardsList = greenCardsList.filter(item => !thirdStageDeck.includes(item));
    }

    for (let i = 0; i < ancient.thirdStage.brownCards; i++) {
        thirdStageDeck.push(brownCardsList[getRandomNum(brownCardsList)]);
        brownCardsList = brownCardsList.filter(item => !thirdStageDeck.includes(item));
    }

    for (let i = 0; i < ancient.thirdStage.blueCards; i++) {
        thirdStageDeck.push(blueCardsList[getRandomNum(blueCardsList)]);
        blueCardsList = blueCardsList.filter(item => !thirdStageDeck.includes(item));
    }

};

/// нажатие на древнего и формирование колоды

let selectedAncient;

let greenDeckFirstStage = [];
let brownDeckFirstStage = [];
let blueDeckFirstStage = [];
let greenDeckSecondStage = [];
let brownDeckSecondStage = [];
let blueDeckFSecondStage = [];
let greenDeckThirdStage = [];
let brownDeckThirdStage = [];
let blueDeckThirdStage = [];

ancientsContainer.onclick = function(event) {
    
    let target = event.target;
    if (target.className != 'ancient-card') return;
    chooseAncient(target);
    
    if (target.id == 'azathoth') {
        CardsForStages(ancientsData[0])
    } else if (target.id == 'cthulhu') {
        CardsForStages(ancientsData[1])
    } else if (target.id == 'iogSothoth') {
        CardsForStages(ancientsData[2]);
    } else CardsForStages(ancientsData[3]);

    for (let i = 0; i < firstStageDeck.length; i++) {
        if (firstStageDeck[i].color == 'green') {
            greenDeckFirstStage.push(firstStageDeck[i])
        } else if (firstStageDeck[i].color == 'brown') {
            brownDeckFirstStage.push(firstStageDeck[i])
        } else blueDeckFirstStage.push(firstStageDeck[i])
    }    

    for (let i = 0; i < secondStageDeck.length; i++) {
        if (secondStageDeck[i].color == 'green') {
            greenDeckSecondStage.push(secondStageDeck[i])
        } else if (secondStageDeck[i].color == 'brown') {
            brownDeckSecondStage.push(secondStageDeck[i])
        } else blueDeckFSecondStage.push(secondStageDeck[i])
    }   

    for (let i = 0; i < thirdStageDeck.length; i++) {
        if (thirdStageDeck[i].color == 'green') {
            greenDeckThirdStage.push(thirdStageDeck[i])
        } else if (thirdStageDeck[i].color == 'brown') {
            brownDeckThirdStage.push(thirdStageDeck[i])
        } else blueDeckThirdStage.push(thirdStageDeck[i])
    }  

    firstStageGreenDot.textContent = (greenDeckFirstStage.length);
    firstStageBrownDot.textContent = (brownDeckFirstStage.length);
    firstStageBlueDot.textContent = (blueDeckFirstStage.length);
    secondStageGreenDot.textContent = (greenDeckSecondStage.length);
    secondStageBrownDot.textContent = (brownDeckSecondStage.length);
    secondStageBlueDot.textContent = (blueDeckFSecondStage.length);
    thirdStageGreenDot.textContent = (greenDeckThirdStage.length);
    thirdStageBrownDot.textContent = (brownDeckThirdStage.length);
    thirdStageBlueDot.textContent = (blueDeckThirdStage.length);

    console.log(firstStageDeck)
    console.log(secondStageDeck)
    console.log(thirdStageDeck)

    /// показывает колоду при клике на рубашку
    
    deck.onclick = function() {
        
        const firstStageText = document.querySelector('.first');
        const secondStageText = document.querySelector('.second');
        const thirdStageText = document.querySelector('.third');
        
        if (firstStageDeck.length >= 1) {
            lastCard.style.backgroundImage = `url(${firstStageDeck[0].cardFace})`;
            firstStageDeck.shift();
            firstStageText.classList.add('stage-text-act');
        } else if (secondStageDeck.length >= 1) {
            lastCard.style.backgroundImage = `url(${secondStageDeck[0].cardFace})`;
            secondStageDeck.shift();
            firstStageText.classList.remove('stage-text-act');
            secondStageText.classList.add('stage-text-act');
        } else if (thirdStageDeck.length >= 1) {
            lastCard.style.backgroundImage = `url(${thirdStageDeck[0].cardFace})`;
            thirdStageDeck.shift();
            secondStageText.classList.remove('stage-text-act');
            thirdStageText.classList.add('stage-text-act');
        } 

        /// трекер

        if (greenDeckFirstStage.length != 0 && firstStageText.classList.contains('stage-text-act')) {
            firstStageGreenDot.textContent = (greenDeckFirstStage.length - 1);
            greenDeckFirstStage.shift()
        } else if (greenDeckFirstStage.length === 0 && brownDeckFirstStage != 0) {
            firstStageBrownDot.textContent = (brownDeckFirstStage.length - 1);
            brownDeckFirstStage.shift()
        } else if (brownDeckFirstStage.length === 0 && blueDeckFirstStage != 0) {
            firstStageBlueDot.textContent = (blueDeckFirstStage.length - 1);
            blueDeckFirstStage.shift()
        };

        if (greenDeckSecondStage.length != 0 && secondStageText.classList.contains('stage-text-act')) {
            secondStageGreenDot.textContent = (greenDeckSecondStage.length - 1);
            greenDeckSecondStage.shift()
        } else if (greenDeckSecondStage.length === 0 && brownDeckSecondStage != 0) {
            secondStageBrownDot.textContent = (brownDeckSecondStage.length - 1);
            brownDeckSecondStage.shift()
        } else if (brownDeckSecondStage.length === 0 && blueDeckFSecondStage != 0) {
            secondStageBlueDot.textContent = (blueDeckFSecondStage.length - 1);
            blueDeckFSecondStage.shift()
        };

        if (greenDeckThirdStage.length != 0 && thirdStageText.classList.contains('stage-text-act')) {
            thirdStageGreenDot.textContent = (greenDeckThirdStage.length - 1);
            greenDeckThirdStage.shift()
        } else if (greenDeckThirdStage.length === 0 && brownDeckThirdStage != 0) {
            thirdStageBrownDot.textContent = (brownDeckThirdStage.length - 1);
            brownDeckThirdStage.shift()
        } else if (brownDeckThirdStage.length === 0 && blueDeckThirdStage != 0) {
            thirdStageBlueDot.textContent = (blueDeckThirdStage.length - 1);
            blueDeckThirdStage.shift()
        };
    }; 
};

function chooseAncient(anCard) {
    if (selectedAncient) {
        selectedAncient.classList.remove('ancient-card-active');
    }
    selectedAncient = anCard;
    selectedAncient.classList.add('ancient-card-active');

    instructionText.textContent = 'Choose difficulty level';

    level.forEach((element) => {
        element.classList.remove('diff-inactive');
    }); 
  };