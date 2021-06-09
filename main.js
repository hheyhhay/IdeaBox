
var savedIdeas=[];
var currentIdea = "";
var deletedIdea = "";


var saveBtn = document.querySelector(".save-btn");
var titleInput = document.querySelector('.js-title');
var bodyInput = document.querySelector('.js-paragraph');
var commentText = document.querySelector('.comment-area');
var wholeCard = document.querySelector('.whole-card');
var commentCardSection = document.querySelector('.comment-card-container');
var cardTop = document.querySelector('.top-of-comment');


saveBtn.disabled = true;
saveBtn.addEventListener('click', savesCard);
titleInput.addEventListener('input', enableButton);
bodyInput.addEventListener('input', enableButton);
commentCardSection.addEventListener('click', function() {
  modifiesCard(event)
});


function loadLocalStorage() {
  var savedIdeasValue = [];
  var parsedIdea;
  savedIdeasValues = Object.values(localStorage);
  for (var i = 0; i<savedIdeasValues.length; i++){
    // localStorage.getItem(savedIdeasValues[i]);
    parsedIdea = JSON.parse(savedIdeasValues[i]);
    savedIdeas.push(parsedIdea);
  } renderCard();
}

// window.onload = loadLocalStorage();
window.addEventListener('load', loadLocalStorage)


function enableButton() {
  if (!titleInput.value || !bodyInput.value) {
    saveBtn.classList.remove('cursor-change');
    saveBtn.classList.add('button-change');
  } else if (titleInput.value !== ""){
    saveBtn.disabled = false;
    saveBtn.classList.add('cursor-change');
    saveBtn.classList.remove('button-change');
  }
}

function savesCard(){
 currentIdea = new Idea(titleInput.value, bodyInput.value);
 savedIdeas.push(currentIdea);
 renderCard();
 clearsInput();
 enableButton();
 currentIdea.saveToStorage();
};


// function loadLocalStorage() {
//   // for (var i = 0; savedIdeas.length; i++);
//   // var savedIdeasValues = Object.values(localStorage);
//   // var savedIdeasValues = localStorage.getItem('savedIdea')
//   // var parsedObject = JSON.parse(savedIdeasValues);
//   // parsedObject = savedIdeas
//
//   var savedIdeasValues = localStorage.getItem('savedIdea');
//   var parsedObject = JSON.parse(savedIdeasValues);
//   savedIdeas.concat(parsedObject);
//   renderCard();
// }
// function showSavedCards() {
//   var retrievedIdea = localStorage.getItem(savedIdea);
//   var parsedObject = JSON.parse(retrievedIdea);
//   savedIdeas = parsedObject;
//
//   // console.log(parsedObject)
//
//   renderCard();
// }



// saveToStorage() {
//   var stringifiedCard = JSON.stringify(savedIdeas)
//   localStorage.setItem("saved", stringifiedCard);
// }

function modifiesCard(event){
  var selectedCard = event.target.parentNode.parentNode;
  // var ideaHTML = ""
  if (event.target.className === "btTxt submit delete-btn") {
    for (var i = 0; i<savedIdeas.length; i++) {
       if (savedIdeas[i].id === Number(selectedCard.id)) {
          var deleteIdea = savedIdeas[i];
          var currentIdea = new Idea(deleteIdea.title, deleteIdea.body);
          savedIdeas.splice(i, 1);
          renderCard();
          currentIdea.deleteFromStorage(deleteIdea.id);
         }
      }
    } else if (event.target.className === "btTxt submit star") {
        for (var i = 0; i < savedIdeas.length; i++) {
          if (savedIdeas[i].id === Number(selectedCard.id)) {
            if (savedIdeas[i].star === false) {
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
      }
  }

function renderCard(){
var ideaHTML = "";
for (var i = 0; i<savedIdeas.length; i++){
    ideaHTML += `<div class="whole-card" id= "${savedIdeas[i].id}">
    <div class="top-of-comment">
    <input type="image" src = "${savedIdeas[i].starSrc}" name="star" class = "btTxt submit star" />
    <input type="image" src = "images/delete.svg" name= "delete" class = "btTxt submit delete-btn" />
    </div>
    <div class="comment-area">
     <h2 class="card-title">${savedIdeas[i].title}</h2>
   <p class="card-body" >${savedIdeas[i].body}</p>
    </div>
    <div class="comment-section">
      <input type="image" src = "images/comment.svg" name="comment" class= "btTxt submit comment"/>
      <p>Comment</p>
    </div>
  </div>`;
  }
  commentCardSection.innerHTML = ideaHTML;
};


function clearsInput(){
  if (titleInput.value && bodyInput.value){
    titleInput.value = null;
    bodyInput.value = null;
    }
  }


function favoriteStar(selectedCard) {
  if (selectedCard.star){
    selectedCard.starSrc = 'images/star-active.svg';
    renderCard();
    selectedCard.updateIdea();
  } else if (!selectedCard.star){
    selectedCard.starSrc = 'images/star.svg';
    renderCard();
    selectedCard.updateIdea();
  }
};





















///
