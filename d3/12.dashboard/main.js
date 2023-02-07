import { makeChart as initArcChart } from './charts/big_percentage_arc_chart.js';
import { makeBoard as initTextBoard } from './charts/text-board.js';
import {
  getBtsWriteRatioData,
  getBtsComposeRatioData,
} from './services/bts_data.js';

const initCharts = async () => {
  const colorScheme = d3.schemeTableau10;

  const wirteRatio = await getBtsWriteRatioData();
  initArcChart(
    '#write-arc-chart',
    wirteRatio,
    colorScheme,
    '멤버 작사 참여 비율'
  );

  const composeRatio = await getBtsComposeRatioData();
  initArcChart(
    '#compose-arc-chart',
    composeRatio,
    colorScheme,
    '멤버 작곡 참여 비율'
  );

  initTextBoard('#total-song-board', 226, colorScheme);
  initTextBoard('#total-album-board', 38, colorScheme);
};

initCharts();
