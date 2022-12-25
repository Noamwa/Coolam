chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log({ tabId, changeInfo, tab })
    if (changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(
            tabId,     // integer
            { message: 'complete' },   // any
            {}    // optional object
        )
    }
});