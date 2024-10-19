const userDate = document.getElementById("date");
const result = document.getElementById("result");
const calculate = document.getElementById("calculate");

userDate.addEventListener("change", () => {
    const today = new Date();
    const birthDate = new Date(userDate.value);
    // Calculate age based on the entered birth date
    const age = calculateAge(today, birthDate);
    
    // Display the result
    result.textContent = `Your age is ${age} years old.`;
});

// Function to calculate age
function calculateAge(currentDate, birthDate) {
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}