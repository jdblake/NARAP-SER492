<!-- this file serves as the code for creating each graph shown on the data pages -->
<template>
  <v-row justify="center">
    <v-dialog max-width="1200" max-height="300" v-model="dialog">
      <v-card>
        <v-card-title style="font-size: 20px" v-if="title">{{title}}</v-card-title>
        <v-btn style="position: absolute; right: 0; top: 0;" @click="dialog = false" icon color="black"><v-icon>mdi-close</v-icon></v-btn>
        <div class="row justify-center">
        <apexchart
          width="900"
          height="600"
          type="pie"
          :options="chartOptions"
          :series="chartSeries"
        />
        </div>
        <div class="row justify-center">
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style scoped>
.chart-holder {
    padding: 0;
}

</style>
<!-- Javascript creation of graphs -->
<script>
export default {
  props: ['dialog', 'series', 'title'],
  computed: {
    chartSeries() {
      if (!this.series) {
        return [];
      }
      const tempSeries = [];
      const tempLabels = [];
      Object.keys(this.series).forEach((key) => {
        tempSeries.push(this.series[key]);
        tempLabels.push(key);
      });
      return tempSeries;
    },
    chartOptions() {
      const dd = {
        labels: [],
        plotOptions: {
          pie: {
            distributed: true,
          },
        },
        colors: ['#58508d', '#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F', '#F15854', '#4D4D4D'],
        responsive: [{
          breakpoint: 400,
          options: {
            chart: {
              height: 350,
              width: 270,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
        legend: {
          position: 'bottom',
        },
      };
      if (this.series) {
        const tempSeries = [];
        const tempLabels = [];
        Object.keys(this.series).forEach((key) => {
          tempSeries.push(this.series[key]);
          tempLabels.push(key);
        });
        dd.labels = tempLabels;
      }
      return dd;
    },
  },
};
</script>
