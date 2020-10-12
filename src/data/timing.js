let today = new Date();
let time = today.getHours();
const timing = [
  { time },
  {
    time: time + 1 > 24 ? time + 1 - 24 : time + 1,
  },
  {
    time: time + 2 > 24 ? time + 2 - 24 : time + 2,
  },
  {
    time: time + 3 > 24 ? time + 3 - 24 : time + 3,
  },
  {
    time: time + 4 > 24 ? time + 4 - 24 : time + 4,
  },
  {
    time: time + 5 > 24 ? time + 5 - 24 : time + 5,
  },
  {
    time: time + 6 > 24 ? time + 6 - 24 : time + 6,
  },
  {
    time: time + 7 > 24 ? time + 7 - 24 : time + 7,
  },
  {
    time: time + 8 > 24 ? time + 8 - 24 : time + 8,
  },
  {
    time: time + 9 > 24 ? time + 9 - 24 : time + 9,
  },
  {
    time: time + 10 > 24 ? time + 10 - 24 : time + 10,
  },
  {
    time: time + 11 > 24 ? time + 11 - 24 : time + 11,
  },
  {
    time: time + 12 > 24 ? time + 12 - 24 : time + 12,
  },
  {
    time: time + 13 > 24 ? time + 13 - 24 : time + 13,
  },
  {
    time: time + 14 > 24 ? time + 14 - 24 : time + 14,
  },
  {
    time: time + 15 > 24 ? time + 15 - 24 : time + 15,
  },
  {
    time: time + 16 > 24 ? time + 16 - 24 : time + 16,
  },
  {
    time: time + 17 > 24 ? time + 17 - 24 : time + 17,
  },
  {
    time: time + 18 > 24 ? time + 18 - 24 : time + 18,
  },
  {
    time: time + 19 > 24 ? time + 19 - 24 : time + 19,
  },
  {
    time: time + 20 > 24 ? time + 20 - 24 : time + 20,
  },
  {
    time: time + 21 > 24 ? time + 21 - 24 : time + 21,
  },
  {
    time: time + 22 > 24 ? time + 22 - 24 : time + 22,
  },
  {
    time: time + 23 > 24 ? time + 23 - 24 : time + 23,
  },
];
export default timing;
