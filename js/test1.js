
function calculateGrade() {
  const userInput = parseFloat(prompt("Enter the student's mark (between 0 and 100):"));
  if (isNaN(userInput) || userInput < 0 || userInput > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
    return;
  }
  let grade;
  if (userInput > 79) {
    grade = 'A';
  } else if (userInput >= 60) {
    grade = 'B';
  } else if (userInput >= 50) {
    grade = 'C';
  } else if (userInput >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  alert(`The student's grade is: ${grade}`);
}
calculateGrade();
