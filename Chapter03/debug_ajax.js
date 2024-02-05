// Function to handle the response and update the DOM with GeoJSON data
function debugCallback(response) {
    // Parse the response as JSON and return a Promise
    return response.json().then(function (data) {
        // Update the DOM with GeoJSON data
        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(data));
    });
}

// Function to initiate the Ajax call and handle the result
function debugAjax() {
    // Fetch GeoJSON data from the specified URL
    fetch("data/MegaCities.geojson")
        .then(function (response) {
            // Call the debugCallback function and wait for it to complete
            return debugCallback(response);
        })
        .then(function () {
            // Update the DOM with additional GeoJSON data
            document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData));
        })
        .catch(function (error) {
            // Log and handle any errors that occur during the fetch operation
            console.error('Error fetching GeoJSON: ', error);
        });
}

// Initial insertion of GeoJSON data
document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ');

// Call the debugAjax function
debugAjax();