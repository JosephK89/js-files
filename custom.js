function convertDateFormat(dateStr) {
    var parts = dateStr.split("/");
    return parts[2] + "-" + parts[1] + "-" + parts[0];
}

function convertDateFormat2(dateStr) {
    var parts = dateStr.split("/");
    return parts[2] + "-" + parts[0] + "-" + parts[1];
}

document.querySelector('#book').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Read the date
    var date = document.getElementById('date_booking').value;
    var dates = date.split(" - ");
    var startDate = dates[0];
    var endDate = dates[1];

    // Convert the start and end dates
    startDate = convertDateFormat(startDate);
    endDate = convertDateFormat(endDate);
    
    // Read the number of adults
    var adults = document.getElementById('adults_booking').value;

    // Read the number of children
    var children = document.getElementById('childs_booking').value;

    window.location.href = `book.php?check_availability=1&check_in=${startDate}&check_out=${endDate}&ad=${adults}&ch=${children}`;
});

document.querySelector('#search').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Read the date
    var date = document.getElementById('dates').value;
    var dates = date.split(" - ");
    var startDate = dates[0];
    var endDate = dates[1];

    // Convert the start and end dates
    startDate = convertDateFormat2(startDate);
    endDate = convertDateFormat2(endDate);
    
    // Read the number of adults
    var adults = document.getElementById('adults').value;

    // Read the number of children
    var children = document.getElementById('childs').value;

    window.location.href = `book.php?check_availability=1&check_in=${startDate}&check_out=${endDate}&ad=${adults}&ch=${children}`;
});