
const getGivenDateDifference = (dateOne,dateTwo) =>{
var diffMs = (dateOne - dateTwo); // milliseconds between now & Christmas
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
return(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes")
}
export default getGivenDateDifference