// ============================================
// BEGINNER FRIENDLY JAVASCRIPT
// ============================================

// PART 1: Generate input fields using FOR LOOP
function generateInputs() {
    // Get number of subjects
    let num = parseInt(document.getElementById("numSubjects").value);
    
    // Check if input is valid
    if (num <= 0) {
        alert("Enter a number greater than 0");
        return;
    }
    
    // Get the section where we will add inputs
    let section = document.getElementById("marksSection");
    
    // Clear old inputs
    section.innerHTML = "";
    
    // FOR LOOP: Create input for each subject
    for (let i = 1; i <= num; i++) {
        section.innerHTML += `
            <label>Subject ${i}:</label>
            <input type="number" id="subject${i}" min="0" max="100">
        `;
    }
    
    // Show the calculate button
    document.getElementById("calculateBtn").style.display = "block";
}

// ============================================

// PART 2: Calculate result using LOOP and IF-ELSE
function calculateResult() {
    // Get number of subjects
    let num = parseInt(document.getElementById("numSubjects").value);
    
    // Step 1: Add all marks using FOR LOOP
    let total = 0;
    for (let i = 1; i <= num; i++) {
        let mark = parseInt(document.getElementById("subject" + i).value);
        total = total + mark;
    }
    
    // Step 2: Calculate average
    let average = total / num;
    average = parseFloat(average.toFixed(2));
    
    // Step 3: Find grade using IF-ELSE
    let grade;
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    
    // Step 4: Check Pass or Fail using IF-ELSE
    let status;
    if (average >= 40) {
        status = "PASS";
    } else {
        status = "FAIL";
    }
    
    // Step 5: Display result
    let resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `
        <div class="result-box">
            <p><strong>Total Marks:</strong> ${total}</p>
            <p><strong>Average:</strong> ${average}</p>
            <p><strong>Grade:</strong> ${grade}</p>
            <p class="${status.toLowerCase()}"><strong>Result: ${status}</strong></p>
        </div>
    `;
}