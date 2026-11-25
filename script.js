// Questions button event listener
document.addEventListener("DOMContentLoaded", function () {

    const questionsButton = document.getElementById("questionsButton");

    if (questionsButton) {
        questionsButton.addEventListener("click", function () {
            alert("If you have questions, contact me at:\naly3@hawk.illinoistech.edu");
        });
    }

});


// Google Maps initialization
function initMap() {

    // Center of Illinois Institute of Technology
    const school = {
        lat: 41.8349,
        lng: -87.6270
    };

    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        center: school,
        zoom: 15,
        mapTypeControl: true,
        mapTypeId: "roadmap"
    });

    // Location markers
    const locations = [
        {
            position: school,
            title: "Illinois Institute of Technology",
            information: "My university in Chicago!"
        },
        {
            position: {
                lat: 41.8369,
                lng: -87.6260
            },
            title: "McCormick Tribune Campus Center",
            information: "A central gathering place on campus."
        },
        {
            position: {
                lat: 41.8315,
                lng: -87.6285
            },
            title: "IIT Main Building",
            information: "One of the main buildings on campus."
        }
    ];

    // Create an information window
    const infoWindow = new google.maps.InfoWindow();

    // Add markers and click events
    locations.forEach(function (location) {

        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
        });

        marker.addListener("click", function () {

            infoWindow.setContent(
                "<h3>" + location.title + "</h3><p>" +
                location.information + "</p>"
            );

            infoWindow.open(map, marker);

        });

    });

}