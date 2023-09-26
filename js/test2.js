function SpeedDetector(speed){
  let speedLimit = 80;
  if(speed < speedLimit ) {
    return 'ok'
  } else if(speed > speedLimit) {
    return '2points'
  }
  
  let DemiritPoints = 5;
  let DeductedPoints = Math.floor((speed - speedLimit)/DemiritPoints);
  if(DeductedPoints > 12) {
    return 'license suspended'
  }
}