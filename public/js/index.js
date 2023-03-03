// alert('hello world')

const contactForm = document.querySelector('#c-form');
let firstName = document.getElementById('firstname');
let email = document.getElementById('email');
let lastName = document.getElementById('lastname');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value
    }
    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        try {
            if(xhr.responseText === 'success'){
                firstName.value = '';
                lastName.value = '';
                email.value = '';
                message.value = '';
            }else{
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
        // if(xhr.responseText === 'success'){
        //     firstName.value = '';
        //     lastName.value = '';
        //     email.value = '';
        //     message.value = '';
        // }else{
        //     console.log()
        //     // alert("Something went wrong, please try again..")
        // }
    }
    xhr.send(JSON.stringify(formData));
});