const form = document.getElementById("form");
const nomeInput = document.getElementById("nomeInput");
const cpfInput = document.getElementById("cpfInput");
const emailInput = document.getElementById("emailInput");
const senhaInput = document.getElementById("senhaInput");
const confirmaSenha_Input = document.getElementById("confirmaSenha_Input");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verificar nome vazio
    if(nomeInput.value === ""){
        alert('Preencha seu nome!');
        return;
    }

    //Verficar cpf
    if(cpfInput.value === "" || !validarCPF(cpfInput.value)){
        alert('Preencha seu CPF!');
        return;
    }

    //Verficar email
    if(emailInput.value === "" || !validarEmail(emailInput.value)){
        alert('Preencha seu Email!');
        return;
    }

    //Verificar senha
    if(!validarSenha(senhaInput.value, 8)){
        alert('A senha precisa de no minimo 8 digitos!');
        return;
    }

    //Verificar confirmação senha
    if(!validarConfirmar_Senha(senhaInput.value, confirmaSenha_Input.value)){
        alert('As senhas precisam ser iguais!')
        return;
    }

    //Se os campos estiverem corretos, envie o form
    form.submit();
    window.location.replace("/pages/login/paginaLogin.html");
});


//Valida cpf
function validarCPF(cpf){
    const cpfRegex = new RegExp(
        /^\d{11}$/
    );

    if(cpfRegex.test(cpf)){
        return true;
    }
    
    return false;
}

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

//Validar confirmação senha
function validarConfirmar_Senha(senha, senhaConfirmada){
    if(senhaConfirmada == senha){
        //senha confirmada
        return true
    }

    //senha nao confirmada
    return false
}