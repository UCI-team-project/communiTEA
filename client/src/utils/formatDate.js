export default function formatDate(date) {
  let oldDate = new Date(date)
  let options = { year: 'numeric', month: 'long', day: 'numeric' }
  let formattedDate = oldDate.toLocaleDateString('en-US', options)
  let formattedTime = oldDate.toLocaleTimeString('en-US')
  const newDate = formattedDate + ' ' + formattedTime

  return newDate
}
