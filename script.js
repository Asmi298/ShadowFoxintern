document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector(".overlay");
    var popupbox = document.querySelector(".popupbox");
    var playerDetails = document.getElementById("playerDetails");
    var closeButton = document.getElementById("closeButton");
    var contactLink = document.getElementById("contactLink");

    // Function to show player details
    function show(id) {
        overlay.style.display = "block";
        popupbox.style.display = "block";

        var name, role;

        switch(id) {
            case 'dh':
                name = "Dhoni";
                role = "Batsman";
                break;
            case 'ru':
                name = "Ruturaj Gaikwad";
                role = "Batsman";
                break;
            case 'ja':
                name = "Jadeja";
                role = "Bowler";
                break;
            case 'shiv':
                name = "Shivam Dube";
                role = "Bowler";
                break;
            case 'math':
                name = "Matheesa Pathirana";
                role = "Batsman";
                break;
            case 'rah':
                name = "Rahman";
                role = "Batsman";
                break;
            default:
                name = "Unknown";
                role = "Unknown";
        }

        playerDetails.innerHTML = `<p>Name: ${name}</p><p>Role: ${role}</p>`;
    }
    function closePopup() {
        overlay.style.display = "none";
        popupbox.style.display = "none";
    }
    document.querySelectorAll('.pic').forEach(function(image) {
        image.addEventListener('click', function() {
            show(image.id);
        });
    });
    closeButton.addEventListener('click', function() {
        closePopup();
    });
    contactLink.addEventListener('click', function() {
        alert('Contact us at: investor@chennaisuperkings.com'); l
    });
});
