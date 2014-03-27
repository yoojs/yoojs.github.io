// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "img/dan212-2.png",
        "img/dan212-4.png",
        "img/dan212-8.png",
        "img/dan212-16.png",
        "img/dan212-32.png",
        "img/dan212-64.png",
        "img/dan212-128.png",
        "img/dan212-256.png","img/dan212-512.png","img/dan212-1024.png",
        "img/dan212-2048.png"
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
