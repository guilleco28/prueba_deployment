var HttpClient = function() {
    this.get = function(url, cb) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                cb(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", url, true );            
        anHttpRequest.send( null );
    }
}


var client = new HttpClient();
client.get('http://192.168.0.111:8000/getPoll', function(response) {
    var jsonResponse = JSON.parse(response)
    var pollId = jsonResponse.id

    showPoll(pollId)
});


var showPoll = function(pollId) {
    // Create pinpoll script
    var scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.async = true;
    scriptElement.src = 'https://tools.pinpoll.com/global.js'
    document.body.appendChild(scriptElement);
    // Create poll div
    var divEncuesta = document.createElement('div');
    divEncuesta.setAttribute('data-pinpoll-id', pollId);
    // Create poll div parent
    var divPadre = document.createElement('div');
    divPadre.setAttribute('style', 'height:200px;width:500px;');
    divPadre.appendChild(divEncuesta);
    document.body.appendChild(divPadre);

    setTimeout(function() {
        var answers = document.getElementById("answer_314941");
        console.log(answers);
      }, 10000);
    
}


