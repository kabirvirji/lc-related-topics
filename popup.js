var topics = null
chrome.tabs.executeScript(null, {file: './foreground.js'}, () => {
    console.log('injected')
    chrome.storage.local.get(['topics'], function(result) {
        console.log('Value currently is ' + result.topics[1]);
        topics = result.topics
        console.log(topics)
    });
})

document.getElementById('submit').onclick = function check() {
    
    var checked_topics = []
    var correct = 1
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
      checked_topics.push(checkboxes[i].value)
    }
    console.log(checked_topics, topics)
    if (checked_topics.length != topics.length) {
        alert(false)
    } else {
        // check all elements
        for (var j = 0; j < checked_topics.length; j++) {
            if (!topics.includes(checked_topics[j])) {
                alert(false)
                correct = 0
                break
            }
        }
        if (correct == 1) {
            alert(true)
        }
    }
 }


