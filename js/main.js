function myfunc() {
  var x = document.getElementById("mynav");
  if (x.className === "nav") {
    x.className += " res";
  }else{
    x.className = "nav"
  }
}
