import TimeAgo, { DateInput } from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US');

export default function formatTimeAgo(time: string | DateInput) {
  if (!time) {
    return ''
  }
  if (typeof time === 'string') {
    time = new Date(time)
  }
  return timeAgo.format(time)
}