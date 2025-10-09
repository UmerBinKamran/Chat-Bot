var list = document.getElementById("list");
var typing = document.getElementById("typing");

function sendMessage() {
  if (event.keyCode === 13) {
    var elem = event.target;
    list.innerHTML += "<li class='message user'>" + elem.value + "</li>";
    typing.style.display = "block";

    if (["hi", "hey", "oye"].indexOf(elem.value.toLowerCase()) !== -1) {
      setTimeout(function () {
        list.innerHTML += "<li class='message bot'>Hello</li>";
      }, 2000);
      setTimeout(function () {
        list.innerHTML += "<li class='message bot'>Kaise Hain Aap?</li>";
        typing.style.display = "none";
      }, 4000);
    } else if (
      ["theek", "fine", "fit"].indexOf(elem.value.toLowerCase()) !== -1
    ) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='message bot'>Me Aapki Kia Madad Kar Sakta Hun?</li>";
        typing.style.display = "none";
      }, 2000);
    } else {
      setTimeout(function () {
        list.innerHTML += "<li class='message bot'>Smjh Nhi Aaraha 😅</li>";
        typing.style.display = "none";
      }, 2000);
    }

    elem.value = "";
    list.scrollTop = list.scrollHeight;
  }
}
