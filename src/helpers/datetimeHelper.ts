import moment from 'moment';

export const getDateString = (datetime: Date): string => {
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const momentObj = moment(datetime);

  if (momentObj.isSame(today, 'day')) {
    return 'Today';
  } else if (momentObj.isSame(yesterday, 'day')) {
    return 'Yesterday';
  }
  return moment(datetime).format('MMM DD');
};

export const getDataIndex = (datetime: Date): string => {
  return moment(datetime).format('MMMDD');
};
