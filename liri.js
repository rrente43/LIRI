var keys = require('./keys.js');
var spotify = require('spotify');
const omdb = new (require('omdbapi'))('3ac3e325');
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: 'f014d48708294a5e98d503f73cb2c5d6',
    clientSecret: '64df16862e0943ce879db7145c272c89',
    redirectUri: 'liri-login://callback'
  });

  
  spotifyApi.getArtistAlbums('').then(
    function(data) {
      console.log('Artist albums', data.body);
    },
    function(err) {
      console.error(err);
    }
  );

var bandsintown = require('bandsintown')('codingbootcamp');


 
bandsintown
  .getArtistEventList('Skrillex')
  .then(function(events) {
    // return array of events
  });

var getMovie = function(movieName){
omdb.get({
   title:movieName
    
}).then(res => {
    console.log('got response:', res);
}).catch(console.error);  
}




var playSpotify = function(songName){
  spotify.search({ type: 'track', query: songName }, 
    function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);
    
    });  
}



var select = function(caseData, functionData){
    switch(caseData){
        case 'spotify':
            playSpotify(functionData);
            break;
        
        case 'movie':
            getMovie(functionData);
            break;

        default:
            console.log("Liri doesn't understand bro, try searching for a movie");
    }
}

var runThis = function(argOne, argTwo){
    console.log(argOne,argTwo);
    select(argOne,argTwo)
};


console.log("2nd and rest of it = "+ process.argv[2]+ process.argv.slice(3).join(" "));

runThis(process.argv[2], process.argv.slice(3).join(" ")  );

