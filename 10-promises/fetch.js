let url = "http://myapp.herokuapp.com/houses";

fetch(url).then(r => r.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));