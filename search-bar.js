var searchBtn = document.getElementById('search-btn'),
    searchKwd = document.getElementById('search-kwd'),
    url = 'https://'; // use to package url
    searchEngine = {  "baidu": "www.baidu.com",
                      "google": "www.google.com"  };

searchBtn.onclick = function(event){
  url += searchEngine['baidu'] + '/s?wd=' + searchKwd.value;
   window.location.href = url;
}
searchKwd.onkeyup = function(event){
  if(event.keyCode == 13){
    searchBtn.click();
  }
}
