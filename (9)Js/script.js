// Using var to declare students array
var students = [];

// Function to add a student
function addStudent() {
  // Using let to create a new student object
  let student = {
    id: students.length + 1,
    name: "Student " + (students.length + 1),
  };

  // Adding the new student to the students array
  students.push(student);

  // Displaying the updated student list
  displayStudents();

  // Performing arithmetic operations using the new student's ID
  performArithmeticOperations(student.id);
}

// Function to display students
function displayStudents() {
  var studentListDiv = document.getElementById("studentList");
  studentListDiv.innerHTML = "";

  // Using let to loop through students array
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    studentListDiv.innerHTML +=
      "<p>Student ID: " + student.id + ", Name: " + student.name + "</p>";
  }
}

// Function to perform arithmetic operations
function performArithmeticOperations(id) {
  // Define a constant for the example
  var ac = 3;

  // Perform arithmetic operations
  var addition = id + ac; // Addition
  var subtraction = id - ac; // Subtraction
  var multiplication = id * ac; // Multiplication
  var division = id / ac; // Division
  var modulus = id % ac; // Modulus

  // Display results
  var operationsResultDiv = document.getElementById("arithmeticResults");
  operationsResultDiv.innerHTML = `
        <p>Addition (ID + ac): ${addition}</p>
        <p>Subtraction (ID - ac): ${subtraction}</p>
        <p>Multiplication (ID * ac): ${multiplication}</p>
        <p>Division (ID / ac): ${division}</p>
        <p>Modulus (ID % ac): ${modulus}</p>
    `;

  // Trigger animation
  operationsResultDiv.classList.add("show");
}
