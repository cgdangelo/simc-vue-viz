<template>
  <PlayerPanelSection title="Results">
    <PlayerPanelResultsDirectedMetricsTable :items="outgoingMetrics"/>

    <PlayerPanelResultsDirectedMetricsTable
      :items="incomingMetrics"
      incoming
    />

    <PlayerPanelResultsTankMetricsTable
      v-if="drawTankCharts"
      :items="tankMetrics"
    />

    <PlayerPanelResultsResourcesTable :items="resourceChanges"/>
  </PlayerPanelSection>
</template>

<script>
import PlayerPanelResultsDirectedMetricsTable from './PlayerPanelResultsDirectedMetricsTable'
import PlayerPanelResultsResourcesTable from './PlayerPanelResultsResourcesTable'
import PlayerPanelResultsTankMetricsTable from './PlayerPanelResultsTankMetricsTable'
import PlayerPanelSection from './PlayerPanelSection'

export default {
  name: 'PlayerPanelResults',

  components: {
    PlayerPanelResultsResourcesTable,
    PlayerPanelResultsDirectedMetricsTable,
    PlayerPanelSection,
    PlayerPanelResultsTankMetricsTable
  },

  props: {
    incomingMetrics: {
      type: Array,
      required: true
    },

    outgoingMetrics: {
      type: Array,
      required: true
    },

    resourceChanges: {
      type: Array,
      required: true
    },

    tankMetrics: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    drawTankCharts () {
      return this.tankMetrics.length > 0
    }
  }
}
</script>
