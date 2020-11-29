function cleanUp() {
  var delayDailyDays = 1 // Enter # of days before messages from "Daily" label are moved to trash
  var delayQuarterlyDays = 90 // Enter # of days before messages from "Quarterly" label are moved to trash
  
  var maxDate = new Date();
  
 
  maxDate.setDate(maxDate.getDate()-delayDailyDays);
  var label = GmailApp.getUserLabelByName("Daily");
  var threads = label.getThreads();
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()<maxDate)
      {
        threads[i].moveToTrash();
      }
  }
  
  maxDate.setDate(maxDate.getDate()-delayQuarterlyDays);
  var label = GmailApp.getUserLabelByName("Quarterly");
  var threads = label.getThreads();
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()<maxDate)
      {
        threads[i].moveToTrash();
      }
  }
}