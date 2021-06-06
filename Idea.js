class Idea{
  constructor(title, body){
    this.id=Date.now();
    this.title  = title;
    this.body = body;
    this.star = false;
    this.starSrc = 'images/star.svg';
  }
  saveToStorage(){
 // should only have one job which is to save the instance to storage
  }
  deleteFromStorage(){

  }
  updateIdea(changes){
    if (changes === 'delete') {
      console.log('will delete this');
    }
// should be able to update the idea’s title, body, or starred state

    console.log('should we use this?')
  }
}
