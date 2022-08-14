const EventEmitter = require('events');
console.log(EventEmitter);

//create a 2 events handlers
eventMusic = new EventEmitter();
eventComposer = new EventEmitter();


//create a event listener
eventMusic.on('play', (...songs) => {
    console.log('playing: ' + songs);
});

eventComposer.on('composers', (...names) => {
    console.log('Composers: ' + names);
});

//emit an event
eventMusic.emit('play', 'song1', 'song2', 'song3');
eventComposer.emit('composers', 'Johann Sebastian Bach', 'Johannes Brahms', 'Chopin');