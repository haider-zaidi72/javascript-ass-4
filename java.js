 function validateForm() {
            // Get all input values
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const age = document.getElementById("age").value;
            const cnic = document.getElementById("cnic").value;
            const roll = document.getElementById("roll").value;
            const message = document.getElementById("message").value;

            // Check if any field is empty
            if (!firstName || !lastName || !age || !cnic || !roll || !message) {
                alert("Please fill all empty fields");
            } else {
                alert("Form submitted successfully!");
               
            }
        }




function clrChange(){
let r = Math.round(Math.random()*255)
let g = Math.round(Math.random()*255)
let b = Math.round(Math.random()*255)

    let text=document.getElementById("clr")
     text.style.backgroundColor=`rgb(${r},${g},${b})`;


}
function generateRandomNumber() {
            // Generate random number between 1 and 100
            const randomNum = Math.round(Math.random() * 100) + 1;
            document.getElementById("randomNumber").textContent = randomNum;
            }