var posts=["2024/06/30/hello-world/","2024/07/05/KSSOLV-3-0-structure/","2024/07/04/program-day2/","2024/07/03/matlab中的面向对象编程/","2024/07/03/程序编写日记/","2024/07/05/英语六级day1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };