var gg = new Audio(browser.runtime.getURL('gg.mp3'));
var Gx2Press = 0;
var preload = new Image();
preload.src = browser.runtime.getURL('gg.gif')

function gg_gifAppear() {
    var width = 64 + Math.random() * (640 - 64);
    var height = width * (240 / 320);
    var leftcorner = Math.random() * (window.innerWidth - width);
    var topcorner = Math.random() * (window.innerHeight - height);
    var image = document.createElement('img');
    image.src = browser.runtime.getURL('gg.gif') + '?' + Date.now();
    image.addEventListener('load', () => {
    });
    document.body.appendChild(image);
    image.style.position = "fixed";
    image.style.zIndex = "2147483647";
    image.style.width = width + "px";
    image.style.height = height + "px";
    image.style.left = leftcorner + "px";
    image.style.top = topcorner + "px";

    gg.addEventListener('ended', () => {
        image.remove();   
    }, { once: true });
}

window.addEventListener('keyup', (event)=> {
    console.log("Key:", event.key);
    console.log("Code:", event.code);

    if (event.code === "KeyG") {
        var now = Date.now();

        if (now - Gx2Press < 1000) {
                if (gg.paused == true) {
                    gg.addEventListener('playing', () => {
                    gg_gifAppear();
                }, { once: true });
            }
             gg.play();
             gg.volume = 0.2;
        }

        Gx2Press = now
    }
});
