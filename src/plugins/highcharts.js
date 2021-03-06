import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts, { numberFormat } from 'highcharts'
import initXrange from 'highcharts/modules/xrange'
import initHistogram from 'highcharts/modules/histogram-bellcurve'

initXrange(Highcharts)
initHistogram(Highcharts)

const localeNumber = new Intl.NumberFormat().formatToParts(1000.1)

Highcharts.setOptions({
  credits: false,

  chart: {
    backgroundColor: '#111',
    spacing: [25, 50, 25, 25],
    style: {
      fontFamily: 'Roboto, sans-serif'
    }
  },

  lang: {
    decimalPoint: localeNumber.find(part => part.type === 'decimal').value,
    thousandsSep: localeNumber.find(part => part.type === 'group').value
  },

  legend: false,

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true
      },

      tooltip: {
        valueDecimals: 2,
        xDateFormat: '%M:%S'
      }
    },

    areaspline: {
      fillOpacity: 0.25
    },

    bar: {
      borderColor: '#000',
      dataLabels: {
        align: 'left',
        format: '{y:,.2f}',
        inside: true,
        style: {
          fontSize: '1rem'
        },
        y: 2
      },
      groupPadding: 0.075,
      pointPadding: 0.075
    },

    pie: {
      dataLabels: {
        formatter () {
          let dataLabel = ''

          if (this.series.data[this.point.x].pet === true) {
            dataLabel = `<b>${this.series.data[this.point.x].source}</b><br />`
          }

          dataLabel += `<span style="color: ${this.point.color}">${this.point.name}</span><br />${numberFormat(
            this.point.y, 1)}%`

          return dataLabel
        },
        style: {
          color: '#fff',
          fontSize: '1rem'
        }
      }
    },

    scatter: {
      dataLabels: false,
      enableMouseTracking: false,
      marker: {
        fillColor: 'transparent'
      }
    }
  },

  title: {
    style: {
      color: '#fff',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textOutline: '1px black'
    }
  },

  xAxis: {
    dateTimeLabelFormats: {
      day: '%M:%S',
      millisecond: '%M:%S',
      minute: '%M:%S',
      second: '%M:%S'
    },
    gridLineColor: 'transparent',
    labels: {
      style: {
        color: '#999',
        fontSize: '1rem',
        whiteSpace: 'nowrap'
      },
      y: 5
    },
    lineWidth: 0,
    tickLength: 0
  },

  yAxis: {
    gridLineColor: '#333',
    labels: {
      style: {
        color: '#999',
        fontSize: '1rem',
        fontWeight: 'bold'
      }
    },
    title: null
  }
})

Vue.filter('numberFormat', numberFormat)

Vue.use(HighchartsVue)
