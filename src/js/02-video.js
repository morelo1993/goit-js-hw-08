import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

const playerElem = document.getElementById("vimeo-player");
const player = new Vimeo(playerElem);

player.on(
    "timeupdate",
    throttle(() => {
        player.getCurrentTime()
            .then(currentTime => {
                localStorage.setItem("videoplayer-current-time", currentTime);
            });
    }, 1000)
);

const savedTime = localStorage.getItem("videoplayer-current-time");
savedTime === null
    ? player.setCurrentTime(0)
    : player.setCurrentTime(savedTime);