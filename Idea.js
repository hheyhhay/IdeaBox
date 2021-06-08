class Idea{
  constructor(title, body){
    this.id=Date.now();
    this.title  = title;
    this.body = body;
    this.star = false;
    this.starSrc = 'images/star.svg';
  }

  // saveToStorage() {
  //   for (var i = 0; i<savedIdeas.length; i++) {
  //     currentIdea = savedIdeas[i];
  //     var strIdea = JSON.stringify(currentIdea);
  //     // var strIdea = JSON.stringify(savedIdeas);
  //     // var savedIdea = savedIdeas[i].id;
  //     localStorage.setItem('savedIdea', strIdea);
  // //have it show up saved ideas
  // }

  saveToStorage() {
    var strIdea = JSON.stringify(savedIdeas);
    localStorage.setItem('savedIdea', strIdea);
  }


  // deleteFromStorage(){
  //   var localStorage.removeItem
  // }

  updateIdea(changes){
    if (changes === 'delete') {
      console.log('will delete this');
    }
// should be able to update the idea’s title, body, or starred state

    console.log('should we use this?')
  }
}
