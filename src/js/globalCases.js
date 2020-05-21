import $ from 'jquery';
// eslint-disable-next-line import/no-unresolved
import moment from 'moment';
import formatNumber from './tools/numberFormat';

const display = () => {
  moment.locale('id');
  $('.data-global .date').text(
    `Last Update:  ${moment().format('MMMM Do YYYY, h:mm:ss')}`,
  );
};

const updateTime = () => {
  display();
  setTimeout(() => {
    updateTime();
  }, 1000);
};

const displayErrorGlobalCases = (err) => {
  $('.data-global')
    .text(`Maaf Terdapat Kesalahan ${err}`)
    .css('text-align', 'center')
    .css('align-items', 'center')
    .css('justify-content', 'center');
};

const globalCases = (data) => {
  updateTime();
  $('.ifected-data').append(formatNumber(data.confirmed.value));
  $('.died-data').append(formatNumber(data.deaths.value));
  $('.recover-data').append(formatNumber(data.recovered.value));
};

export { globalCases, displayErrorGlobalCases };
