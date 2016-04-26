// ==UserScript==
// @name     Gmail reply at top
// @include     https://mail.google.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require  https://gist.githubusercontent.com/BrockA/2625891/raw/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a major design
    change introduced in GM 1.0.
    It restores the sandbox.
*/

waitForKeyElements (".gB.acO", actionFunction);

function actionFunction (jNode) {
    replydiv = jNode.parent();
    replydiv.prependTo(replydiv.parent()); 
    setTimeout(function () {$(".Tm.aeJ").scrollTop(0);}, 500);
}
