
// Code




    
function initializeNavigation() {

    var btnHome = document.getElementById("btnHome");
    if (btnHome) {
        btnHome.addEventListener("click", function() {
            window.location.href = "/";
        });
        document.getElementById("btnCourses").addEventListener("click", function() {
            window.location.href = "/courses";
        });
    
        document.getElementById("btnAbout").addEventListener("click", function() {
            window.location.href = "/about";
        });
    }


    var card = document.getElementById("card");
    if (card) {
        card.addEventListener("click", function() {
            window.location.href = "/coursDetail";
        });
    }
    
    
    var applyButton = document.getElementById("apply");
    if (applyButton) {
        applyButton.addEventListener("click", function() {
            window.location.href = "/apply";
        });
    }

}


window.onload = initializeNavigation;
