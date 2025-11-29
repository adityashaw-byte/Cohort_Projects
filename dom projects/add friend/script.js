var a = document.querySelector("#hirebtn");
var check = 0;

a.addEventListener("click", function () {
    if (check == 0) {
        a.innerHTML = "Hired";
        a.style.backgroundColor = "#0A2A6B";  // back to blue
        check = 1;
    }
    
    else if (check==1){
        a.innerHTML = "Lay off";
        a.style.backgroundColor = "red";     // red on layoff
        check = 2;
    }

    else  {
        a.innerHTML = "Hire now";
        a.style.backgroundColor = "#0A2A6B";  // back to blue
        check = 0;
    }
});
