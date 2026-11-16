function needsCharging(devices) {
  let need = [];

  for (let i = 0; i < devices.length; i++) {
    if (devices[i][1] < 20) {
      need.push(devices[i][0]);
    }
  }

  return need;
}

