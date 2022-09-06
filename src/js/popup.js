    // Get the modal
    var popup = document.getElementById("popup");

    // Get the button that opens the modal
    var openPopup = document.getElementById("open-popup");

    // Get the <span> element that closes the modal
    var closePopup = document.getElementsByClassName("close-popup")[0];

    // When the user clicks the button, open the modal 
    openPopup.onclick = function () {
        popup.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    closePopup.onclick = function () {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
