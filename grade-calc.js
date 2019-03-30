const gradeCal = function(score, total) {
  let grade = "";
  let percentage = (score / total) * 100;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return `You got a ${grade} (${percentage})`;
};

console.log(gradeCal(10, 20));
