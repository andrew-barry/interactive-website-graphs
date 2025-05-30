window.REGEN_THEME = {
  colors: ['#003f3f', '#007373', '#00a3a3', '#cde6e6', '#99bdbd', '#666'],
  layout: {
    margin: { t: 20 },
    xaxis: {
      title: 'Year',
      tickfont: {
        family: 'IBM Plex Mono',
        size: 10.5,
        color: '#444'
      },
      titlefont: {
        family: 'IBM Plex Mono',
        size: 10.5,
        color: '#444'
      }
    },
    yaxis: {
      title: 'Capacity (MW)',
      tickfont: {
        family: 'IBM Plex Mono',
        size: 10.5,
        color: '#444'
      },
      titlefont: {
        family: 'IBM Plex Mono',
        size: 10.5,
        color: '#444'
      },
      hoverformat: '.2f'
    },
    showlegend: true,
    legend: {
      font: {
        family: 'IBM Plex Sans',
        size: 12,
        color: '#444'
      }
    },
    paper_bgcolor: '#f6f4ee',
    plot_bgcolor: '#f6f4ee',
    hovermode: 'x unified'
  }
};
