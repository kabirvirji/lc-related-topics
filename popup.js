chrome.tabs.executeScript(null, {file: './foreground.js'}, () => {
    console.log('injected')
    chrome.storage.local.get(['topics'], function(result) {
        console.log('Value currently is ' + result.topics[1]);
        var topics = result.topics
    });
})

// const check_answers = (topics) => {
// }


