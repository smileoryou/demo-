(function() {
  //清空浏览器的的内容
  var countdown = 60;
  var t1 = null;
  var flag = true;
  // new invokeSettime("#btnCode");
  $("#btnCode").on("click", function(e) {
    if (countdown == 60 && flag) {
      flag = false;
      t1 = setInterval(function() {
        settime("#btnCode");
      }, 1000);
      // settime("#btnCode");
      function settime(obj) {
        if (countdown == 60) {
          $(obj).css({ color: "#eeeeee" }); // 发送的颜色#24a1ee
          countdown--;
          $.getJSON(
            "https://www.easy-mock.com/mock/5b0bbb8c57fbcf7910d2537d/test/first",
            function(data) {
              console.log(data.data.projects[0]);
              document.getElementById("inputTel").value =
                data.data.projects[0]["name"];
            }
          );
        } else {
          if (countdown == 0) {
            $(obj).text("发送验证码");
            $(obj).css({ color: "#24a1ee" }); // 发送的颜色#24a1ee
            clearInterval(t1);
            countdown = 60;
            flag = true;
            return;
          } else {
            countdown--;
            $(obj).text("(" + countdown + ") s 重新发送");
          }
        }
      }
    } else {
      flag = false;
      return;
    }
  });

  $("#formDiv").on("click", ".closeInfo", function(e) {
    $(this)
      .siblings("input")
      .val("");
    $(this)
      .siblings()
      .focus();
  });

  //添加表单验证
  $("#formDiv").on("blur", "input[type='input']", function(e) {
    var Dom = $(this);
    var $parent = $(this).parent();
    switch (Dom.attr("id")) {
      // case "inputName":
      //   // if (this.value == "") {
      //   //   Dom.siblings("label").css("color", "red");
      //   //   Dom.siblings("label").css("font-style", "italic");
      //   //   Dom.siblings("label").text("用户名错误");
      //   // }
      // case "inputID":
      // Dom.blur();
      //   // if (
      //   //   this.value == "" ||
      //   //   (this.value != "" &&
      //   //     !/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
      //   //       this.value
      //   //     ))
      //   // ) {
      //   //   Dom.siblings("label").css("color", "red");
      //   //   Dom.siblings("label").css("font-style", "italic");
      //   //   Dom.siblings("label").text("身份证号错误");
      //   // }
      //   break;
      // case "inputName":
      //   if (this.value == "") {
      //     Dom.siblings("label").css("color", "red");
      //     Dom.siblings("label").css("font-style", "italic");
      //     Dom.siblings("label").text("用户名错误");
      //   }
      //   break;
      case "inputCardName":
        if (this.value == "") {
          Dom.siblings("label").css("color", "red");
          Dom.siblings("label").css("font-style", "italic");
          Dom.siblings("label").text("银行卡错误");
        }
        break;
      case "inputCard":
        if (this.value == "") {
          Dom.siblings("label").css("color", "red");
          Dom.siblings("label").css("font-style", "italic");
          Dom.siblings("label").text("银行卡号错误");
        }
        break;
      case "inputTel":
        if (
          this.value == "" ||
          (this.value != "" && !/^1[3,4,5,7,8]\d{9}$/.test(this.value))
        ) {
          Dom.siblings("label").css("color", "red");
          Dom.siblings("label").css("font-style", "italic");
          Dom.siblings("label").text("手机号错误");
        }
        break;
    }
  });

  $("#formDiv").on("focus", "input[type='input']", function(e) {
    var Dom = $(this);
    Dom.siblings("label").css("color", "#666666;");
    Dom.siblings("label").css("font-style", "normal");
    var $parent = $(this).parent();
    switch (Dom.attr("id")) {
      case "inputName":
        Dom.siblings("label").text("真实姓名");
        break;
      case "inputID":
        Dom.siblings("label").text("身份证号");
        break;
    }
  });
  //委托点击删除内容

  //为了兼容属性placeholder-shown
  $("input[type='input']").bind("input propertychange change", function(event) {
    $(this)
      .siblings("div")
      .css({ "width": "92%", "margin": "0 auto" });

    $(this)
      .siblings("label")
      .css({ "font-family": "PingFangSC-Regular","font-size": "0.13rem",
        "color": "#999999",
        "letter-spacing": "0",
        "-webkit-transform": "translate(0.1rem) scale(0.9)",
        "transform": "translate(0.1rem) scale(0.9)"
      });

      $(this)
      .siblings("a")
      .css({ "display": "-webkit-box !important"});
  });


// 静止用户获取焦点
$("#inputName").on("focus", function(){
$(this).blur();
});
$("#inputID").on("focus", function(){
  $(this).blur();
  })


})();
