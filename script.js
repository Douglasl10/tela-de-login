const form = document.querySelector('form');
const newButton = document.getElementById('button');
const newName = document.getElementById('nome');
const newPassword = document.getElementById('senha');
const confirmPassword = document.getElementById('confirmarSenha');
const newText = document.getElementById('text');

form.addEventListener('submit', function(e) {
    e.preventDefault();
   

    if(newPassword.value !== confirmPassword.value) {
        alert('As senhas não coincidem!');
    } else {
        newText.textContent = 'Cadastro realizado com sucesso!';
        form.reset();
    }

    
})

function login(){
   newButton.addEventListener('click', function(){
    window.location.href = 'index2.html';
   })
}

login();



