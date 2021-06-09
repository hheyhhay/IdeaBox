class Idea{
  constructor(currentIdea){
    this.currentIdea;
    this.id= currentIdea.id || Date.now();
    this.title  = currentIdea.title;
    this.body = currentIdea.body;
    this.star = currentIdea.star || false;
    this.starSrc = currentIdea.starSrc || 'images/star.svg';
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
    var strKey;
    strKey = JSON.stringify(deleteIdea.id)
    localStorage.removeItem(strKey);


  }
  updateIdea(){
    var strKey;
    var strValue;
    strKey = JSON.stringify(selectedCard.id)
    strValue = JSON.stringify(selectedCard)
    localStorage.setItem(strKey, strValue);
  }
}
