const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const password = document.getElementById('password');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');


form.addEventListener("submit", (e)=> {
    e.preventDefault()

        checkInput();
    });

function checkInput(){
    
    const firstnameValue=firstname.value.trim();
    const lastnameValue =lastname.value.trim();
    const emailValue =email.value.trim();
    const passwordValue= password.value.trim();

    if(firstnameValue === ''){
        setFailFor(firstname, 'firstname cannot be blank')
    }
    else{
        setSuccessFor(firstname)
    }


}

function setFailFor(firstname, message){
    const formInput=input.parentElement;
    const span =formInput.querySelctor('span')
    span.innerText= message
    formInput.className='.form-input.error input';

}
function setSuccessFor(input){
    const formInput =input.parentElement;
    formInput.className ='form-input success'
}
