function calculateGrade(marks) {
  if(marks >= 79 ){
    return 'A';
  } else if(marks <79 && marks >60) {
    return 'B'
  } else if(marks <60 && marks >50) {
    return 'C'
  } else if(marks >40 && marks <49) {
    return 'D'
  } else {
    return 'E'
  }
}

