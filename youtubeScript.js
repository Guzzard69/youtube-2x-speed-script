// ==UserScript==
// @name         Youtube 2x Speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A script to automatically set Youtube videos to 2x playback speed.
// @author       Guzzard
// @include      https://www.youtube.com*
// @include      https://www.youtube.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
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

    if (!window.location.href.startsWith("https://www.youtube.com/watch")) return;

    console.log('passed url check');

    // Checking for "Music" or "Music Video" tags.
    const musicTags = [
        "Music (TV Genre)",
        "Music Video (TV Genre)"
    ];

    var metaTags = document.getElementsByTagName('meta');
    for (let i = 0; i < metaTags.length; i++){
        if (musicTags.includes(metaTags[i].content)){
            console.log('Script not loaded: the current video was flagged as music.')
        };
    }

    let settingsButtonClick = document.querySelector('.ytp-settings-button').click();

    let innerSettingsButtons = document.querySelectorAll('.ytp-menuitem-label');
    ClickButton(innerSettingsButtons, 'Playback speed');

    let playbackSpeedButtons = document.querySelectorAll('.ytp-menuitem-label');
    ClickButton(playbackSpeedButtons, '2');
};

waitForKeyElements (
    '.ytp-settings-button',
    main
);