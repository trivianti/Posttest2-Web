// let nm = document.getElementById("nm").value;
// let adress = document.getElementById("adress").value;
// let email = document.getElementById("eml").value;
// let Gender = document.querySelector("#Gender").value;
// let package = document.querySelector('input[name="radio"]:checked').value;

// Fungsi simpan data pada session storage
function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nm');
    const userInputEmail = document.getElementById('email');
    const userInputAddress = document.getElementById('almt');
    const userInputGender = document.querySelector('#gender');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    const userInputCheckbox = document.getElementsByName('checkbox');
    
    
    
    let nm = sessionStorage.getItem("nm");
    let email = sessionStorage.getItem("email");
    let checkbox = sessionStorage.getItem("checkbox") || [];
    let almt = sessionStorage.getItem("almt");
    let radio = sessionStorage.getItem("radio");
    let gender = sessionStorage.getItem('#gender');


      // push 
      nm = userInputNama.value || nm;
     
      email = userInputEmail.value || email;
     
      almt = userInputAddress.value || almt;
      
      gender = userInputGender.value || gender;
    
      radio = userInputRadio.value || radio;
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }

      let data ={
        'nm': nm,
        'email': email,
        'checkbox' : checkbox,
        'almt' : almt,
        'radio' : radio,
        'gender' : gender
       }

       sessionStorage.setItem("data", JSON.stringify(data));
}