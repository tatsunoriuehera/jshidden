
  'use strict'
document.getElementById("result").style.visibility ="hidden";

function entryChange1(){
		var radio = document.getElementsByName("type")
    var result = document.getElementById("result")
    var hide = document.getElementById("hide")

  	if(radio[0].checked) {
  		result.style.visibility = "hidden";
      hide.style.visibility = "visible";
      alert("解除しました");
  	}else{
  		result.style.visibility = "visible";
      hide.style.visibility = "hidden";
  	}
    //オンロードさせ、リロード時に選択を保持
  	window.onload = entryChange1;
  }

  function entryChange2(){
        alert("配達にしました");
  }
  function entryChange3(){
        alert("引荷にしました");
  }
  function entryChange4(){
        alert("ヤマトにしました");
  }
