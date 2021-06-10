/* --------------------------- Side Navigation Bar --------------------------- */
/* Opens Side Navigation */
function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
}

/* Closes Side Navigation */
function closeNav() {
  document.getElementById("sideCart").style.width = "0";
  document.getElementById("mySidenav").style.width = "0";
}

function openCart() {
  document.getElementById("sideCart").style.width = "75%";
}

function closeCart() {
  document.getElementById("sideCart").style.width = "0";
}

function openCartDirect() {
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("sideCart").style.width = "75%";
}

/* ----------------------- Product Page Switch Images ------------------------ */
function productView1() {
  var button1 = document.getElementById("changeDisplay1");
  var bg = document.getElementById("displayImage");
  bg.src = "/img/products/cities and knights.png";
}

function productView2() {
  var button2 = document.getElementById("changeDisplay2");
  var bg = document.getElementById("displayImage");
  bg.src = "/img/products/catan base game.png";
}

function productView3() {
  var button3 = document.getElementById("changeDisplay3");
  var bg = document.getElementById("displayImage");
  bg.src = "/img/products/seafarers.png";
}

function productView4() {
  var button4 = document.getElementById("changeDisplay4");
  var bg = document.getElementById("displayImage");
  bg.src = "/img/products/traders and barbarians.png";
}


/* -------------------------- Check Out Validation --------------------------- */
function formValidation(){
  var firstName = document.forms["billing"]["fName"].value;
  var lastName = document.forms["billing"]["lName"].value;
  var eaddress = document.forms["billing"]["eaddress"].value;
  var address1 = document.forms["billing"]["address1"].value;
  var city = document.forms["billing"]["city"].value;
  var pcode = document.forms["billing"]["pcode"].value;

  if ((firstName == "")||(lastName == "")||(eaddress == "")||(address1 == "")||(city == "")||(pcode == "")){
    alert("Required Field Misssing");
    return false;
  } else {
    window.location.href="/html/shipping.html"
  }
}

/* -------------------------- Add to Cart --------------------------- */
function addToCartResponsiveButton() {
  var button = document.getElementById("addtocart");
  var content = document.getElementById("notifContent");
  var text = document.getElementById("addToCartText");
  var notification = document.getElementById("notify");
  button.style.backgroundColor = "#A76819";
  button.innerText = "Added to Cart";
  notify.style.width = "20%";

  setTimeout(function(){notify.style.width = "0%"; content.style.visibility = "hidden";}, 2000);
}