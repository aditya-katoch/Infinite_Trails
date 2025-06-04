document.getElementById("s1").addEventListener("click", function() {
  window.open("s1.html" , "_self"); 
});
document.getElementById("s2").addEventListener("click", function() {
  window.open("s2.html" , "_self"); 
});
document.getElementById("s3").addEventListener("click", function() {
  window.open("s3.html" , "_self"); 
});
document.getElementById("s4").addEventListener("click", function() {
  window.open("s4.html" , "_self"); 
});




document.getElementById("k1").addEventListener("click", function() {
  window.open("k1.html" , "_self"); 
});
document.getElementById("k2").addEventListener("click", function() {
  window.open("k2.html" , "_self"); 
});





document.getElementById("sp1").addEventListener("click", function() {
  window.open("sp1.html" , "_self"); 
});
document.getElementById("sp2").addEventListener("click", function() {
  window.open("sp2.html" , "_self"); 
});




document.getElementById("d1").addEventListener("click", function() {
  window.open("d1.html" , "_self"); 
});
document.getElementById("d2").addEventListener("click", function() {
  window.open("d2.html" , "_self"); 
});




document.getElementById("dh1").addEventListener("click", function() {
  window.open("dh1.html" , "_self"); 
});
document.getElementById("dh2").addEventListener("click", function() {
  window.open("dh2.html" , "_self"); 
});




document.getElementById("g1").addEventListener("click", function() {
  window.open("G1.html" , "_self"); 
});
document.getElementById("g2").addEventListener("click", function() {
  window.open("G2.html" , "_self"); 
});




document.getElementById("l1").addEventListener("click", function() {
  window.open("l1.html" , "_self"); 
});
document.getElementById("l2").addEventListener("click", function() {
  window.open("l2.html" , "_self"); 
});
document.getElementById("l3").addEventListener("click", function() {
  window.open("l3.html" , "_self"); 
});





document.getElementById("DJ1").addEventListener("click", function() {
  window.open("DJ1.html" , "_self"); 
});
document.getElementById("DJ2").addEventListener("click", function() {
  window.open("DJ2.html" , "_self"); 
});




document.getElementById("uk1").addEventListener("click", function() {
  window.open("uk1.html" , "_self"); 
});
document.getElementById("uk2").addEventListener("click", function() {
  window.open("uk2.html" , "_self"); 
});






document.getElementById("kerala").addEventListener("click", function() {
  window.open("kerala.html" , "_self"); 
});





document.getElementById("dar1").addEventListener("click", function() {
  window.open("dar1.html" , "_self"); 
});
document.getElementById("dar2").addEventListener("click", function() {
  window.open("dar2.html" , "_self"); 
});





document.getElementById("goa1").addEventListener("click", function() {
  window.open("goa1.html" , "_self"); 
});
document.getElementById("goa2").addEventListener("click", function() {
  window.open("goa2.html" , "_self"); 
});

document.querySelectorAll(".callback").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.stopPropagation(); // 🔒 Prevents triggering the outer div's click
    window.open("https://packages.infinitehospitality.in", "_self");
  });
});
