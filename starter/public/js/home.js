const button3 = document.querySelector("#button3"); 
const user_song = document.querySelector("#song");
const user_song_display = document.querySelector("#song_display")
//const user_artist = document.querySelector("#artist")

button3.addEventListener("click", (_) => {
  console.log('here');
  user_song_display.innerHTML = '<a href = "https://open.spotify.com/search/${user_song}"> Link to Your Song </a>';
  
  
  //let myKey = 'BQD0ftLlm6iMnI6UXECOWqwTiiQP6BcWkwmI3wqb5zXVuw5bHu0P5Mxhh_bJrEivrGYD3cEr2OJ2rFgQB8GDk1PlavsBTw28ud5MSyJTsThOwzQD1cHij7eoA9TN7ogJOripN2DMOVx6B86Bu4FPGRvqZXiFHXXfBkjx';
  //let song_topic = user_song.value; 
  //let artist_topic = user_artist.value;
 // let myQuery = `https://api.spotify.com/v1/search?q=track:${song_topic}&q=artist:${artist_topic}&type=track`;
  //https://api.spotify.com/v1/search?q=track:"' + despacito + '"%20artist:"' + bieber + '"&type=track
 // fetch(myQuery).then((response) => response.json()).then(json => {
 // console.log(json.data[0].images.original.url);
 // user_song_display.innerHTML = ""
});



