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
