export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number)
  const finalHours = hours % 12 || 12
  const amPm = hours < 12 ? 'AM' : 'PM'
  const paddedHours = finalHours < 10 ? `0${finalHours}` : finalHours
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
  return `${paddedHours}:${paddedMinutes} ${amPm}`
}