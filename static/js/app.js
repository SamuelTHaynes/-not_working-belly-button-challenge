// URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// D3 to get data
function sampleData(stuff) {
    d3.json(url).then(data); {
        const sample_ids = data.sample_ids;
        const labels = data.otu_ids;
        const hovertxt = data.otu_labels;
        console.log(data);

        var data = [
            {
                x: sample_ids,
                y: labels,
                type: 'bar'
            }
        ];
        Plotly.newPlot('myDiv', data);

    };
}


