    var feed  = "http://www.npr.org/rss/rss.php?id=1004";
    var fg = new GFdynamicFeedControl(feed, "feedControl");
  }
  /**
   * Use google.load() to load the AJAX Feeds API
   * Use google.setOnLoadCallback() to call loadFeedControl once the page loads
   */
  google.load("feeds", "1");
  google.setOnLoadCallback(loadFeedControl);