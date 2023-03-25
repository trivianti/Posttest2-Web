addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("daf_nama");
    const password = document.getElementById("daf_pw");
    const email = document.getElementById("daf_email");

    localStorage.setItem("Nama", nama.value);
    localStorage.setItem("Password", password.value);
    localStorage.setItem("Email", email.value);

    alert("Anda Berhasil Terdaftar !");
    window.location.href = "login.html"
});
