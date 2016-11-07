var background = document.getElementById('background'),
    bgCopyright = background.firstElementChild;

getData("server/agent/bing.php?index=0&number=1", function(response){
  var response = JSON.parse(response.responseText),
      image = response.images[0],
      imageUrl = image.url,
      imageCopyright = image.copyright;

      background.style.background = "url('" + imageUrl + "')" + " " + "no-repeat";
      bgCopyright.innerHTML = imageCopyright;
});
