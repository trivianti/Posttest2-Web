const tombol = document.getElementsByClassName("submit");
tombol.onclick = login;

function login(e) {
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    
    const loc_email = localStorage.getItem("Email")
    const loc_pass =  localStorage.getItem("Password")
    
    if(email.value == loc_email && pass.value == loc_pass){
        alert("Berhasil Login !");
        window.location.href = "beranda.html";
    }else{
        alert("Gagal Masuk !!");
    }
};
