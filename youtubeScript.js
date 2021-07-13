// ==UserScript==
// @name         Youtube 2x Speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// ==/UserScript==

const ClickButton = (buttons, buttonInnerHtml) => {
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].innerHTML == buttonInnerHtml){
            buttons[i].click();
            return;
        }
    }
}

const main = () => {
    'use strict';

    console.log('function working');

    if (!window.location.href.includes("watch")) return;

    console.log('passed url check');

    // Checking for "Music" or "Music Video" tags.
    const musicTags = [
        "Music (TV Genre)",
        "Music Video (TV Genre)"
    ];

    var metaTags = document.getElementsByTagName('meta');
    for (let i = 0; i < metaTags.length; i++){
        if (musicTags.includes(metaTags[i].content)) return;
    }

    let settingsButtonClick = document.querySelector('.ytp-settings-button').click();

    let innerSettingsButtons = document.querySelectorAll('.ytp-menuitem-label');
    ClickButton(innerSettingsButtons, 'Playback speed');

    let playbackSpeedButtons = document.querySelectorAll('.ytp-menuitem-label');
    ClickButton(playbackSpeedButtons, '2');
};

main();