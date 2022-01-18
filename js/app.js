const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
toggle.onclick = function() {
    menu.classList.add("is-show");
  }
window.onclick = function(e){  
  console.log(e.target) 
  if (!menu.contains(e.target) && !e.target.matches('.toggle')) {
    menu.classList.remove("is-show")
  }
};