(function() {
  //清空浏览器的的内容
  var countdown = 60;
  var t1 = null;
  var flag = true;
  // new invokeSettime("#btnCode");
  $("#btnSend").on("click", function(e) {
    if (countdown == 60 && flag) {
      flag = false;
      t1 = setInterval(function() {
        settime("#btnSend");
      }, 1000);
    } else {
      flag = false;
      return;
    }
    function settime(obj) {
      $(obj).css({ color: "#eeeeee" });
      if (countdown == 0) {
        $(obj).text("发送");
        $(obj).css({ color: "#FFFFFF;" });
        clearInterval(t1);
        countdown = 60;
        flag = true;
        return;
      } 
      else {
        countdown--;
        $(obj).text(countdown + "s发送");
      }
    }
  });
})();
