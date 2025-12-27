//hamburger menu toggler

const menu = document.getElementById("menu")
const navbar = document.getElementById("nav-bar")


menu.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
})

function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

   
   if (!name || name.length < 8){
       alert("Your Name must be at least 8 char.");
       return false;
   }

   if (!email.includes("@")){
       alert("Invalid Email");
       return false;
   }

   if(!password || password.length < 6){
    alert("Invalid Password");
    return false;
   }

   alert("Form Submitted successfully.")
   return true;
}