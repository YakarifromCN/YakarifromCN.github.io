var posts=["2024/12/30/初、中级日语语法复盘/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };