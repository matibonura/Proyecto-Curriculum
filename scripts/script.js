document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        var nav = document.querySelector(".nav");
        var ul = nav.querySelector("ul");
        ul.classList.toggle("active");
            
        // También podemos agregar "active" a los elementos <li> dentro de <ul>
        var lis = ul.querySelectorAll("li");
        lis.forEach(function(li) {
            li.classList.toggle("active");
        });
        }
})
