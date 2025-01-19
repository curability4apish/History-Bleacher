chrome.tabs.onRemoved.addListener(() => {
  const DaysAgo = new Date();
  DaysAgo.setDate(DaysAgo.getDate() - 2);
  chrome.history.deleteRange({
    startTime: 0,
    endTime: DaysAgo.getTime()
  }, () => {
    console.log('History older than 2 days deleted.');
  });
});
