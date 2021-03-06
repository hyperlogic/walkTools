//
//  walkToolsStats.js
//  version 0.1
//
//  Created by David Wooldridge, Summer 2015
//  Copyright © 2015 David Wooldridge.
//
//  Presents animation statistics for walkTools
//
//  Editing tools available here: https://s3-us-west-2.amazonaws.com/davedub/high-fidelity/walkTools/walk.js
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

WalkToolsStats = function() {
    var that = {};
    var _visible = false;

    // web window
    var url = Script.resolvePath('../html/walkToolsStats.html');
    var webView = new WebWindow('walkTools Stats', url, 390, 940, false);
    webView.setPosition(200, 0);
    webView.setVisible(_visible);

    that.updateStats = function(updatedStats) {
        webView.eventBridge.emitScriptEvent(JSON.stringify({
            type: "updateStats",
            stats: updatedStats
        }));
    }

    that.setVisible = function(visible) {
        _visible = visible;
        webView.setVisible(_visible);
        if (_visible) {
            Window.setFocus();
            //webView.raise();
        }
    }

    return that;
};
walkToolsStats = WalkToolsStats();