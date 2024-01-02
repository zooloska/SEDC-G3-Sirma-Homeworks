console.log('****Homework 1****');

let animal = new Object ();
animal.name = '';
animal.kind = '';
console.log (animal);

animal.speak = function () {
    console.log(`${animal.name} says: Hey bro!`);
}

let namelInfo = prompt ("Enter animal name:");
animal.name = namelInfo;
let kindInfo = prompt ('Enter animal kind:');
animal.kind = kindInfo;
animal.speak();


console.log('****Homework 2****');

  function readingStatusCreator (bookTitle, bookAuthor, readingStatus) {
      this.title = bookTitle;
      this.author = bookAuthor;
      this.status = readingStatus;
      
     this.readingInfo = function () {
        return `You've read it the ${this.title} from ${this.author}.`;

        
     }

  }