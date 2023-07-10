import { throttle } from 'lodash';
import Player from '@vimeo/player';

let frame = document.getElementById('vimeo-player');
let player = new Player(frame);

function play(data) {
    localStorage.setItem('reproductor', data.seconds);
    // console.log(data);
}

player
    .setCurrentTime(localStorage.getItem('reproductor'))
    .then(function (time) {
        // console.log(time);
        time = localStorage.getItem('reproductor');
    });

player.on('timeupdate', throttle(play, 1000));


// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// document.addEventListener('DOMContentLoaded', () => {
//     const vimeoPlayer = new Player(document.getElementById('vimeo-player'));

//     function savePlaybackTime() {
    //         vimeoPlayer.getCurrentTime().then((time) => {
    //         localStorage.setItem('videoPlaybackTime', time);
//         });
//     }

//     vimeoPlayer.on('timeupdate', throttle(savePlaybackTime, 1000));

//     const savedTime = localStorage.getItem('videoPlaybackTime');
//     if (savedTime) {
//         vimeoPlayer.setCurrentTime(savedTime);
//     }
// });
