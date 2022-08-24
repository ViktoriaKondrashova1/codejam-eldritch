const ancientCard = document.querySelectorAll('.ancient-card');
const instructionText = document.querySelector('.instruction-text');
const level = document.querySelectorAll('.difficulty');
const shuffleBtn = document.querySelector('.shuffle-btn');
const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');
const ancientsContainer = document.querySelector('.ancients-container');
const difficultyContainer = document.querySelector('.difficulty-container');

import blueCardsAssets from '../../../assets/MythicCards/blue';
import greenCardsAssets from '../../../assets/MythicCards/green';
import brownCardsAssets from '../../../assets/MythicCards/brown';
import Ancients from '../assets/Ancients/index';


let SelectedAncient;

ancientsContainer.onclick = function(event) {
    let target = event.target;
    if (target.className != 'ancient-card') return;
    chooseAncient(target);
};

function chooseAncient(anCard) {
    if (SelectedAncient) {
        SelectedAncient.classList.remove('ancient-card-active');
    }
    SelectedAncient = anCard;
    SelectedAncient.classList.add('ancient-card-active');

    instructionText.textContent = 'Choose difficulty level';

    level.forEach((element) => {
        element.classList.remove('diff-inactive');
    }); 
  };


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