var savedIdeas=[];
var currentIdea = "";


var saveBtn = document.querySelector(".save-btn");
var titleInput = document.querySelector('.js-title');
var bodyInput = document.querySelector('.js-paragraph');
var commentText = document.querySelector('.comment-area');
var wholeCard = document.querySelector('.whole-card');
var commentCardSection = document.querySelector('.comment-card-container');
// var deleteBtn = document.querySelector('.js-comment')

saveBtn.addEventListener('click', savesCard);

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
commentCardSection.addEventListener('click', deletesCard);

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


function deletesCard(event){
  var selectedCard = event.target.parentNode.parentNode;
  var ideaHTML = ""
  if (event.target.className === "btTxt submit delete-btn") {
    for (var i = 0; i<savedIdeas.length; i++) {
      console.log(savedIdeas[i].id, 'array.id');
      console.log(selectedCard.id, 'selected card id');
       if (savedIdeas[i].id === Number(selectedCard.id)) {
          savedIdeas.splice(i, 1);
          renderCard();
         }
      }
    }
  }



function renderCard(){

var ideaHTML = "";
for (var i = 0; i<savedIdeas.length; i++){
    ideaHTML += `<div class="whole-card" id= "${savedIdeas[i].id}">
    <div class="top-of-comment">
    <input type="image" src = "images/star.svg" name="star" class = "btTxt submit" />
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


























///
