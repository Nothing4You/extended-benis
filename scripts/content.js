"use strict";

function onload(event) {
    // Default function hides the score for a certain time for new posts or comments unless the user is an admin or creator of the post/comment.
    exportFunction(() => true, window.wrappedJSObject.p, {defineAs: "shouldShowScore"});

    // This is the default view for posts in /new, /top, etc.
    window.wrappedJSObject.p.View.Stream.Comments.prototype.template =
        window.wrappedJSObject.p.View.Stream.Comments.prototype.template
            .replace("{\"Punkt\".inflect(c.score)}</span>",
                "{\"Punkt\".inflect(c.score)} <i>({c.up}/{c.down})</i></span>");
};

document.addEventListener("DOMContentLoaded", onload);
