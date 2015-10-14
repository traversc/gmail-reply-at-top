// ==UserScript==
// @name     Gmail reply at top
// @namespace     http://mail.google.com
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a major design
    change introduced in GM 1.0.
    It restores the sandbox.
*/

waitForKeyElements (".gB.acO", actionFunction);

function actionFunction (jNode) {
    //jNode.css ("background", "yellow"); // example
    replydiv = jNode.parent();
    replydiv.prependTo(replydiv.parent()); 
    setTimeout(function () {$(".Tm.aeJ").scrollTop(0);}, 500);
}