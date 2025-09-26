var posts=["2025/03/13/first-interview/","2025/01/09/selenium-bot/","2024/12/24/hello-world/","2025/09/19/takana-cubic-update-log/","2025/01/28/takana-cubic-instruction/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };