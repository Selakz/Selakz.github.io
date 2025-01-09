var posts=["2024/12/24/hello-world/","2025/01/09/selenium-bot/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };