const csvUrl = 'https://raw.githubusercontent.com/andrew-barry/interactive-website-graphs/main/inputs/test_graphic_csv.csv';

Papa.parse(csvUrl, {
  download: true,
  header: true,
  dynamicTyping: true,
  complete: function(results) {
    const data = results.data.filter(row => row.Year);
    const years = data.map(row => row['Year']);
    const categories = Object.keys(data[0]).filter(k => k !== 'Year');
    const colors = window.REGEN_THEME.colors;

    const traces = categories.map((cat, i) => ({
      x: years,
      y: data.map(row => row[cat]),
      name: cat,
      hoverinfo: 'x+y+name',
      line: { width: 0.5, color: colors[i % colors.length] },
      fillcolor: colors[i % colors.length],
      type: 'scatter',
      mode: 'none',
      stackgroup: 'one',
      fill: 'tonexty'
    }));

    Plotly.newPlot('chart', traces, window.REGEN_THEME.layout);
  }
});
