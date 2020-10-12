export default function dateFunc(todaysDate) {
  // let today = todaysDate;
  switch (todaysDate) {
    case 1:
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    case 2:
      return ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
    case 3:
      return ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];
    case 4:
      return ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
    case 5:
      return ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
    case 6:
      return ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    default:
      return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
}
