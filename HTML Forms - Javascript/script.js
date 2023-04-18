function signup(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let province = document.getElementById('province').value;

    console.log(
        'Name: ' + name,
        'Surname: ' + surname,
        'Email: ' + email,
        'Province: ' + province
    )
}
