import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

    const player = new Player(iframe);

    player.on('timeupdate', throttle(onTimeUpdate, 1000));

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

function onTimeUpdate ({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
}
   
function resumeCurrentTime() {
    if (localStorage.getItem('videoplayer-current-time')) {
       player.setCurrentTime(localStorage.getItem("videoplayer-current-time")); 
    }
}
resumeCurrentTime();

