// Final Grade Calculator

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  // Input
  let Scripting1 = +document.getElementById("Scripting1").value;
  let Programming1 = +document.getElementById("Programming1").value;
  let Scripting2 = +document.getElementById("Scripting2").value;
  let Programming2 = +document.getElementById("Programming2").value;
  let Project = +document.getElementById("Project").value;

  // Process
  let FinalGrade =
    (Scripting1 + Programming1 + Scripting2 + Programming2 + Project) / 5;

  // Output
  document.getElementById("output").innerHTML = FinalGrade;
  document.getElementById("final-ltr1").innerHTML = getLetterGrade(FinalGrade);
  document.getElementById("final-ltr2").innerHTML = getLetterGrade(Scripting1);
  document.getElementById("final-ltr3").innerHTML =
    getLetterGrade(Programming1);
  document.getElementById("final-ltr4").innerHTML = getLetterGrade(Scripting2);
  document.getElementById("final-ltr5").innerHTML =
    getLetterGrade(Programming2);
  document.getElementById("final-ltr6").innerHTML = getLetterGrade(Project);
}

function getLetterGrade(percentGrade) {
  if (percentGrade >= 90) {
    return "A";
  } else if (percentGrade >= 75) {
    return "B";
  } else if (percentGrade >= 60) {
    return "C";
  } else if (percentGrade >= 50) {
    return "D";
  } else {
    return "F";
  }
}
