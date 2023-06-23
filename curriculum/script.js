function age(id) {
    var birth = new Date(2000, 10, 17);
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    document.getElementById(id).textContent = age;
}