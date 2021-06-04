var savedIdeas=[];
var currentIdea = "";


var saveBtn = document.querySelector(".save-btn");
var titleInput = document.querySelector('.js-title');
var bodyInput = document.querySelector('.js-paragraph');
var commentText = document.querySelector('.comment-area');
var wholeCard = document.querySelector('.whole-card');
var commentCardSection = document.querySelector('.comment-card-container');


saveBtn.addEventListener('click', savesCard)

//Create a querySelector for the saved button
//create an eventListener
//querySelect als the idea title and the idea body field - specifically the .value
//The event listner on click on the save button, should populate a new idea card w/
//the value of idea & body. - the eventHandler
// To store into the DM - we will need to create a new Object instance,
//push that into ideas array. in the function create OI.
//

function savesCard(){
 currentIdea = new Idea(titleInput.value, bodyInput.value);
 console.log('title', titleInput.value);
 console.log('body', bodyInput.value);
 console.log('currentIdea', currentIdea)
 savedIdeas.push(currentIdea);
 console.log(savedIdeas);
renderCard();
};


//
function renderCard(){
//hTML uppdate will be here?
var ideaHTML = "";
for (var i = 0; i<savedIdeas.length; i++){
    ideaHTML += `<div class="whole-card">
    <div class="top-of-comment">
      <svg class="image-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.93 16.49"><defs><style>.cls-1{fill:#f16139;}</style></defs><title>Artboard 30</title><g id="background"><polygon class="cls-1" points="8.28 2.85 9.91 6.13 13.53 6.66 10.91 9.22 11.53 12.83 8.28 11.13 5.04 12.83 5.66 9.22 3.03 6.66 6.66 6.13 8.28 2.85"/></g></svg>
      <svg class="image-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.18 17.72"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 31</title><g id="background"><polygon class="cls-1" points="13.13 5.87 12.43 5.16 8.97 8.61 5.53 5.16 4.82 5.87 8.27 9.32 4.82 12.77 5.53 13.48 8.97 10.03 12.43 13.48 13.13 12.77 9.68 9.32 13.13 5.87"/></g></svg>
     <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.93 16.49"><defs><style>.cls-1{fill:#f16139;}</style></defs><title>Artboard 30</title><g id="background"><polygon class="cls-1" points="8.28 2.85 9.91 6.13 13.53 6.66 10.91 9.22 11.53 12.83 8.28 11.13 5.04 12.83 5.66 9.22 3.03 6.66 6.66 6.13 8.28 2.85"/></g></svg> -->
    </div>
    <div class="comment-area">
     <h2 class="card-title">${savedIdeas[i].title}</h2>
   <p class="card-body" >${savedIdeas[i].body}</p>
    </div>
    <div class="comment-section">
      <svg class="image-size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.71 19.71"><defs><style>.cls-1{fill:#fff;stroke:#353567;stroke-miterlimit:10;}.cls-2{fill:#353567;}</style></defs><title>abacus-v1Artboard 41</title><g id="background"><circle class="cls-1" cx="9.76" cy="9.76" r="5.58"/><polygon class="cls-2" points="5.65 9.37 5.65 10.14 9.37 10.14 9.37 13.86 10.14 13.86 10.14 10.14 13.86 10.14 13.86 9.37 10.14 9.37 10.14 5.65 9.37 5.65 9.37 9.37 5.65 9.37"/></g></svg>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.93 16.49"><defs><style>.cls-1{fill:#f16139;}</style></defs><title>Artboard 30</title><g id="background"><polygon class="cls-1" points="8.28 2.85 9.91 6.13 13.53 6.66 10.91 9.22 11.53 12.83 8.28 11.13 5.04 12.83 5.66 9.22 3.03 6.66 6.66 6.13 8.28 2.85"/></g></svg> -->

      <p>Comment</p>
    </div>
  </div>`;
  }
  commentCardSection.innerHTML = ideaHTML;
};





























///
