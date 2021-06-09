
var savedIdeas=[];
var currentIdea = "";
var deletedIdea = "";
var selectedCard = "";


var saveBtn = document.querySelector(".save-btn");
var titleInput = document.querySelector('.js-title');
var bodyInput = document.querySelector('.js-paragraph');
var commentText = document.querySelector('.comment-area');
var wholeCard = document.querySelector('.whole-card');
var commentCardSection = document.querySelector('.comment-card-container');
var cardTop = document.querySelector('.top-of-comment');
var starBtn = document.querySelector('.show-star-btn');


bodyInput.addEventListener('input', enableButton);
commentCardSection.addEventListener('click', function(){
    modifiesCard(event)
});
saveBtn.disabled = true;
saveBtn.addEventListener('click', savesCard);
titleInput.addEventListener('input', enableButton);
starBtn.addEventListener('click', showStarred);
window.addEventListener('load', loadLocalStorage);


function loadLocalStorage() {
  var savedIdeasValue = [];
  var parsedIdea;
  savedIdeasValues = Object.values(localStorage);
  for (var i = 0; i<savedIdeasValues.length; i++){
    parsedIdea = JSON.parse(savedIdeasValues[i]);
    var currentIdea = new Idea(parsedIdea)
    savedIdeas.push(currentIdea)
  } renderCard(savedIdeas);
}

function removeClass(element, className ){
  element.classList.remove(className);
}

function addClass(element, className){
  element.classList.add(className)
}

function enableButton() {
  if ((titleInput.value === "") || (bodyInput.value === "")) {
    removeClass(saveBtn, 'cursor-change');
    addClass(saveBtn, 'button-change');
    saveBtn.disabled = true;
  } else if (titleInput.value !== "" && bodyInput.value !=="") {
    saveBtn.disabled = false;
    addClass(saveBtn, 'cursor-change')
    removeClass(saveBtn, 'button-change');
  }
}

function savesCard(){
  currentIdea = {title: titleInput.value, body: bodyInput.value}
  currentIdea = new Idea(currentIdea)
 savedIdeas.push(currentIdea);
 renderCard(savedIdeas);
 clearsInput();
 enableButton();
 currentIdea.saveToStorage();
};

function clearsInput(){
  if (titleInput.value && bodyInput.value){
    titleInput.value = null;
    bodyInput.value = null;
    }
  }


function modifiesCard(event){
  selectedCard = event.target.parentNode.parentNode;
  if (event.target.className === "btTxt submit delete-btn") {
      deleteCard();
    } else if (event.target.className === "btTxt submit star") {
      starsCard();
    }
};

function checkCard(){
  for (var i = 0; i<savedIdeas.length; i++){
    if(savedIdeas[i].id === Number(selectedCard.id)){
      return true
    } else {return false}
  }
}

function deleteCard(){
  for (var i = 0; i<savedIdeas.length; i++) {
     if (savedIdeas[i].id === Number(selectedCard.id)) {
        deleteIdea = savedIdeas[i];
        savedIdeas.splice(i, 1);
        renderCard(savedIdeas);
        deleteIdea.deleteFromStorage();
       }
    }
}

function starsCard(){
  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].id === Number(selectedCard.id)) {
      if (!savedIdeas[i].star) {
        savedIdeas[i].star = true;
        selectedCard = savedIdeas[i];
        favoriteStar(selectedCard)
      } else {
        savedIdeas[i].star = false;
        selectedCard = savedIdeas[i];
        favoriteStar(selectedCard)
      }
    }
  }
};

function favoriteStar(selectedCard) {
  if (selectedCard.star){
     selectedCard.starSrc = 'images/star-active.svg';
     renderCard(savedIdeas);
     selectedCard.updateIdea();
  } else if (!selectedCard.star){
    selectedCard.starSrc = 'images/star.svg';
    renderCard(savedIdeas);
    selectedCard.updateIdea();
  }
};

function renderCard(displayCards){
var ideaHTML = "";
for (var i = 0; i<displayCards.length; i++){
    ideaHTML += `<div class="whole-card" id= "${displayCards[i].id}">
    <div class="top-of-comment">
    <input type="image" src = "${displayCards[i].starSrc}" name= "star-images" name="star" class = "btTxt submit star" />
    <input type="image" src = "images/delete.svg" alt= "delete-img" name= "delete" class = "btTxt submit delete-btn" />
    </div>
    <div class="comment-area">
     <h2 class="card-title">${displayCards[i].title}</h2>
   <p class="card-body" >${displayCards[i].body}</p>
    </div>
    <div class="comment-section">
      <input type="image" src = "images/comment.svg" name="comment" alt ="comment-img" class= "btTxt submit comment"/>
      <p>Comment</p>
    </div>
  </div>`;
  }
  commentCardSection.innerHTML = ideaHTML;
};

function clearCard(){
  commentCardSection.innerHTML = "";
}

function showStarred(){
  var favoritedCards = [];
  for (var i =0; i<savedIdeas.length; i++){
    if (savedIdeas[i]['star']){
      clearCard();
      favoritedCards.push(savedIdeas[i])
      renderCard(favoritedCards);
    }
  }
}
