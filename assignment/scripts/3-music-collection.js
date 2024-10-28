console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection = [];
function addToCollection(collection, title, artist, yearPublished){
  //add title/artist/yearPublished to the given collecion
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(record)
  return record;

}

addToCollection(myCollection, 'American Idiot', 'Green Day', 2004);
console.log(myCollection);
addToCollection(myCollection, 'The Beautiful and Damned', 'G-Eazy', 2017)
console.log(myCollection);
addToCollection(myCollection, 'Disgusting', 'Beartooth', 2015)
console.log(myCollection)
addToCollection(myCollection, 'These Things Happen', 'G-Eazy', 2014)
console.log(myCollection)
addToCollection(myCollection, 'Under Pressure', 'Logic', 2014)
console.log(myCollection)
addToCollection(myCollection, 'General Admission', 'MGK', 2015)
console.log(myCollection)

function showCollection(collection){
  // create a loop that cycles through the argument clause array.
  for ( i=0; i < collection.length; i++){
    //console log each item in array
    console.log(`By ${collection[i].title} ${collection[i].artist}  published in  ${collection[i].yearPublished}`);
  }
  //return each found item.
  return collection;
}
console.log(showCollection(myCollection));

function findByArtist(collection, artist){
  //Declare an empty Array
  let matchingArtistByAlbum = [];
  //loop through a collection and push found title into empty array
  for ( i=0; i < collection.length; i++ ){
    if (collection[i].artist === artist){
      matchingArtistByAlbum.push(collection[i])
    }
  }
  //return the array.
  return matchingArtistByAlbum;

  
}
console.log(findByArtist(myCollection, 'MGK'));
console.log(findByArtist(myCollection, 'G-Eazy'));
console.log(findByArtist(myCollection, 'AFI'))

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
