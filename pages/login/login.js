const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const senhaInput = document.getElementById("senhaInput");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verficar email
    if(emailInput.value === "" || !validarEmail(emailInput.value)){
        alert('Email não encontrado na base de dados');
        return;
    }

    //Verificar senha
    if(!validarSenha(senhaInput.value, 8)){
        alert('Senha incorreta!');
        return;
    }

    //Se os campos estiverem corretos, envia o form
    form.submit();
    window.location.replace("/pages/dashboard/paginaDashboard.html");
});

//Valida email
function validarEmail(email){
    const emailRegex = new RegExp(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

// Validar senha
function validarSenha(senha, digitos){
    if(senha.length >= digitos){
        //senha valida
        return true;
    }

    //senha invalida
    return false;
}