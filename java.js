 function validateForm() {
            // Get all input values
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let age = document.getElementById("age").value;
            let cnic = document.getElementById("cnic").value;
            let roll = document.getElementById("roll").value;
            let message = document.getElementById("message").value;

            const cardHTML = `
                <div class="student-card">
                    <h3>Student Information</h3>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>CNIC:</strong> ${cnic}</p>
                    <p><strong>Roll #:</strong> ${roll}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>`
// Display the card
                document.getElementById("studentCardContainer").innerHTML = cardHTML;

            // Check if any field is empty
            // if (!firstName || !lastName || !age || !cnic || !roll || !message) {
            //     alert("Please fill all empty fields");
            // } else {
                               
            // }
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

function Credential (){
    // get all input values
    let userID =document.getElementById("userID").value
    let passWord = document.getElementById("passWord").value
 // check if fields are not filled
 if (!userID || !passWord){
    alert("Please enter the user ID and Password");
 } else{
    alert("Your are logedin");
 }
}