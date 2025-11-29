var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    var image = val.querySelector("img");   // <-- Always pick the img

    val.addEventListener("mouseenter", function () {
        image.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        image.style.opacity = 0;
    });

    val.addEventListener("mousemove", function (dets) {
        image.style.left = dets.clientX + "px";
      
    });
});
