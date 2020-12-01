// from data.js
var tableData = data;

// YOUR CODE HERE!
tableData.forEach(appendTable);

var submitInput = d3.select("#filter-btn");
submitInput.on("click", function(){
    d3.select("tbody").html("");
    d3.event.preventDefault();
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData);
    filteredData.forEach(appendTable);
});

function appendTable(report) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        if (key === "comments"){
            cell.attr("class", "record-comments")
        };
    });
};
