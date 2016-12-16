function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    console.log(xmlhttp)
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               document.getElementById("content").innerHTML = atob(JSON.parse(xmlhttp.responseText).content);
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
           }
        }
    };

    xmlhttp.open("GET", "https://api.github.com/repos/adfaure/clog/readme", true);
    xmlhttp.send();
}

loadXMLDoc()