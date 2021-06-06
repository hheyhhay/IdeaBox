var savedIdeas=[];
var currentIdea = "";


var saveBtn = document.querySelector(".save-btn");
var titleInput = document.querySelector('.js-title');
var bodyInput = document.querySelector('.js-paragraph');
var commentText = document.querySelector('.comment-area');
var wholeCard = document.querySelector('.whole-card');
var commentCardSection = document.querySelector('.comment-card-container');
var starImage = document.querySelector('.star');
var deleteImage = document.querySelector('.delete');
var cardTop = document.querySelector('.top-of-comment');

saveBtn.addEventListener('click', savesCard);
commentCardSection.addEventListener('click', fillStar);
//Create a querySelector for the saved button
//create an eventListener
//querySelect als the idea title and the idea body field - specifically the .value
//The event listner on click on the save button, should populate a new idea card w/
//the value of idea & body. - the eventHandler
// To store into the DM - we will need to create a new Object instance,
//push that into ideas array. in the function create OI.
//

saveBtn.disabled = true; //setting button state to disabled

titleInput.addEventListener('input', enableButton);
bodyInput.addEventListener('input', enableButton);
// wholeCard.addEventListener('click')

function enableButton() {
  if ((titleInput.value === "") || (bodyInput.value === "")) {
    saveBtn.disabled = true;
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
};


//
function renderCard(){
//hTML uppdate will be here?
var ideaHTML = "";
for (var i = 0; i<savedIdeas.length; i++){
    ideaHTML += `<div class="whole-card" id="${savedIdeas[i].id}">
    <div class="top-of-comment">
    <input type="image" src = "images/star.svg" name="star" class = "btTxt submit star" />
    <input type="image" src = "images/delete.svg" name"delete" class = "btTxt submit delete" />
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
  // }  if (titleInput.value === "" || bodyInput.value === "") {
  //
    }
  }
  //when the saved button is clicked the input boxes clears.

  //if the (titleInput.value & bodyInput.values) {
// than titleInput.value & bodyInput.values = none;}




function fillStar(event) {
  var favoritedCard = event.target.parentNode.parentNode;

  if (event.target.className === "btTxt submit star") {

    for (var i = 0; i < savedIdeas.length; i++) {
      if (savedIdeas[i].id === Number(favoritedCard.id)) {
        console.log(savedIdeas[i].star)

        if (savedIdeas[i].star === false) {
          savedIdeas[i].star = true;
          console.log(savedIdeas[i].star)
          starImage.classList.add('hidden')
          favoriteStar();
        } else {
          savedIdeas[i].star = false;
          favoriteStar();
        }

      }
    }
  }
}

function favoriteStar() {
  console.log(this)
  if (this.star === true) {
    starImage.classList.add('hidden');
    deleteImage.classList.add('hidden');
    cardTop.innerHTML += `<input type="image" src = "images/star-active.svg" name="star" class = "btTxt submit star" />
    <input type="image" src = "images/delete.svg" name"delete" class = "btTxt submit delete"/>`
  } else if (this.star === false) {
      starImage.classList.remove('hidden');
      deleteImage.classList.remove('hidden');
      cardTop.innerHTML += `<input type="image" src = "images/star.svg" name="star" class = "btTxt submit star" />
      <input type="image" src = "images/delete.svg" name"delete" class = "btTxt submit"/>`
    }
}
}















///
