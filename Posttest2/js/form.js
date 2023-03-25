form()
function form(){
    let data = sessionStorage.getItem("data");
    data = JSON.parse(data);
    const nm = data['nm'];
    const email = data['email'];
    const checkbox = data['checkbox'];
    const almt = data['almt'];
    const radio = data['radio'];
    const gender = data['gender'];
    
    const userInputNama = document.getElementById('nm_form');
    const userInputEmail = document.getElementById('email_form');
    const userInputCheckbox = document.getElementById('checkbox_form');
    const userInputAlmt = document.getElementById('almt_form');
    const userInputRadio = document.getElementById('radio_form');  
    const userInputGender = document.getElementById('gender_form');

    userInputNama.innerHTML =     "Nama                                     : " + nm;
    userInputEmail.innerHTML =    "Email                                    : " + email;
    userInputAlmt.innerHTML =   "Alamat                                   : " + almt;
    userInputRadio.innerHTML =    "Jenis Keanggotaan                        : " + radio;
    userInputGender.innerHTML=     "Jenis Kelamin                            : " + gender;
    userInputCheckbox.innerHTML = "Jenis Buku Yang Diminati                 : " + checkbox;

}