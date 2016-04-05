const settings = {
  units: {
    value: 'imperial',
    options: [
      'metric',
      'imperial'
    ]
  },
  location: {
    value: 94066
  }
};

export default function (state = settings, action) {
  return state;
}
