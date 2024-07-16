// NAMEEN:
// NAMERU:Добавление треков в плейлист

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addToPlaylist`, которая принимает два аргумента: массив с текущим плейлистом и массив новых треков для добавления.

Используя метод `push()`, функция должна добавить новые треки в конец плейлиста.

Перед добавлением, каждый новый трек следует проверять на уникальность без учета регистра букв, чтобы избежать дублирования.

Функция должна возвращать обновленный плейлист.

Примеры запуска функции:
```javascript
addToPlaylist(["imagine dragons - Believer", "Queen - Bohemian Rhapsody"], ["queen - bohemian rhapsody", "Billie Eilish - bad guy"])
// ["imagine dragons - Believer", "Queen - Bohemian Rhapsody", "Billie Eilish - bad guy"]

addToPlaylist(["AC/DC - Thunderstruck"], ["Metallica - Enter Sandman", "ac/dc - thunderstruck"])
// ["AC/DC - Thunderstruck", "Metallica - Enter Sandman"]

addToPlaylist([], ["Eminem - Lose Yourself"])
// ["Eminem - Lose Yourself"]

addToPlaylist(["Linkin Park - In the End"], [])
// ["Linkin Park - In the End"]

addToPlaylist(["Coldplay - Paradise"], ["coldplay - paradise"])
// ["Coldplay - Paradise"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addToPlaylist(playlist, newTracks) {
  for(let track of newTracks){

    let needToAdd = true;

    for(let original of playlist){
      if(original.toLowerCase() === track.toLowerCase()){
        needToAdd = false;
        break;
      }
    }

    if(needToAdd) playlist.push(track)
  }

  return playlist;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addToPlaylist', () => {
  expect(addToPlaylist).to.be.a('function');
});

it('Adds new unique tracks to the playlist ignoring case', () => {
  expect(addToPlaylist(["Track 1", "track 2"], ["Track 3", "TRACK 2"])).to.deep.equal(["Track 1", "track 2", "Track 3"]);
});

it('Returns the original playlist if all new tracks are duplicates ignoring case', () => {
  expect(addToPlaylist(["Track 1", "Track 2"], ["track 1", "TRACK 2"])).to.deep.equal(["Track 1", "Track 2"]);
});

it('Correctly adds tracks to an empty playlist', () => {
  expect(addToPlaylist([], ["New track 1", "new Track 2"])).to.deep.equal(["New track 1", "new Track 2"]);
});

it('Handles adding no new tracks to the playlist', () => {
  expect(addToPlaylist(["Existing track"], [])).to.deep.equal(["Existing track"]);
});

it('Adds a new track with different case when the playlist is empty', () => {
  expect(addToPlaylist([], ["SOLO TRACK"])).to.deep.equal(["SOLO TRACK"]);
});

it('Does not add a duplicate track with different case', () => {
  expect(addToPlaylist(["Song A"], ["song a"])).to.deep.equal(["Song A"]);
});

it('Adds multiple tracks ensuring uniqueness ignoring case', () => {
  expect(addToPlaylist(["Song 1"], ["SONG 2", "Song 3", "song 1"])).to.deep.equal(["Song 1", "SONG 2", "Song 3"]);
});

it('Maintains the order of tracks after adding new ones ignoring case', () => {
  const originalPlaylist = ["First Song", "second song"];
  const newTracks = ["SECOND SONG", "Third Song", "first song"];
  const updatedPlaylist = addToPlaylist(originalPlaylist, newTracks);
  expect(updatedPlaylist[0]).to.equal("First Song");
  expect(updatedPlaylist[updatedPlaylist.length - 1]).to.equal("Third Song");
});

it('Correctly handles adding a track with completely different case', () => {
  expect(addToPlaylist(["song"], ["SONG"])).to.deep.equal(["song"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
