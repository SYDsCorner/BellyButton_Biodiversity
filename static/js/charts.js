// ------------------- //
//    Dropdown menu    //
// ------------------- //

function init() {
    var selector = d3.select("#selDataset");
  
    // Retrieve data from an external data file
    d3.json("static/json/samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
    });
 })}
  
init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

// ---------------------- //
//    Demographic Info    //
// ---------------------- //

function buildMetadata(sample) {
  d3.json("static/json/samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}