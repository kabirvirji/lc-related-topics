var topic_elements = document.getElementsByClassName("tag__2PqS")
var topics = []

const set_topics = (topics, topic_elements) => {
    for (let i = 0; i < topic_elements.length; i++) {
        topics.push(topic_elements[i].innerText)
    }
    console.log(topics)
    chrome.storage.local.set({topics: topics}, function() {
        console.log('the topics are ' + topics);
    })
}

set_topics(topics, topic_elements)