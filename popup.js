document.addEventListener('DOMContentLoaded', function() {
    const getTitleButton = document.getElementById('getTitleButton');
    const titleDisplay = document.getElementById('titleDisplay');
    
    getTitleButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const currentTab = tabs[0];
        const tabTitle = currentTab.title;
        titleDisplay.textContent = `Current Tab's Title: ${tabTitle}`;
      });
    });
  });
  