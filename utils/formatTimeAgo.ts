import TimeAgo, { DateInput } from 'javascript-time-ago'
const timeAgo = new TimeAgo('en-US')

export default function formatTimeAgo(time: string | DateInput) {
  if (!time) {
    return ''
  }
  if (typeof time === 'string') {
    time = new Date(time)
  }
  return timeAgo.format(time)
}