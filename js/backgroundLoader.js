var background = document.getElementById('background');

getData("server/agent/bing.php?index=0&number=6", function(response){
  var response = JSON.parse(response.responseText),
      image = response.images[0],
      imageUrl = image.url;

      background.style.background = "url('" + imageUrl + "')" + " " + "no-repeat";
});
