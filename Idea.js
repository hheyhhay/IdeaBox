class Idea{
  constructor(title, body){
    this.id=Date.now();
    this.title  = title;
    this.body = body;
    this.star = false;
    this.starSrc = 'images/star.svg';
  }
  saveToStorage(){
    for (var i = 0; i<savedIdeas.length; i++){
      currentIdea = savedIdeas[i];
      var strIdea = JSON.stringify(currentIdea);
      var savedIdea = savedIdeas[i].id;
      localStorage.setItem(savedIdea, strIdea)
  }
}



  deleteFromStorage(){

console.log('will delete');


  // need to iterate through the savedIdeas array to find the ID that has been deleted
  // will need to delete the instance from localStorage
    //how to set up a conditional saying if this is not in the array, remove from storage
    //if
  }
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
