function validarFormulario(event) {
    
    // Impede o envio do formulário para realizar validação

    event.preventDefault();

    //  campos do formulário

    const nomeInput = document.querySelector('.nome input');
    const cpfInput = document.querySelector('.cpf input');
    const emailInput = document.querySelector('.email input');
    const senhaInput = document.querySelector('.senha input');
    const confirmaSenhaInput = document.querySelector('.confirmaSenha input');

    // armazena mensagens de erro

    let mensagensErro = [];

    // Validações 
    
    if (!nomeInput.value.trim()) {
        mensagensErro.push('O campo Nome é obrigatório.');
    }

    
    if (!cpfInput.value.trim()) {
        mensagensErro.push('O campo CPF é obrigatório.');
    } else if (!validarCPF(cpfInput.value)) {
        mensagensErro.push('O CPF inserido não é válido.');
    }

   
    if (!emailInput.value.trim()) {
        mensagensErro.push('O campo E-mail é obrigatório.');
    } else if (!validarEmail(emailInput.value)) {
        mensagensErro.push('O e-mail inserido não é válido.');
    }

    if (!senhaInput.value.trim()) {
        mensagensErro.push('O campo Senha é obrigatório.');
    } else if (senhaInput.value.length < 6) {
        mensagensErro.push('A senha deve ter pelo menos 6 caracteres.');
    }

    if (confirmaSenhaInput.value !== senhaInput.value) {
        mensagensErro.push('As senhas não correspondem.');
    }

    //  mensagens de erro 

    if (mensagensErro.length > 0) {
        alert(mensagensErro.join('\n'));
    } else {
        
        alert('Cadastro realizado com sucesso!');
    }
}


document.querySelector('.formulario').addEventListener('submit', validarFormulario);


function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    const calcDigito = (soma, peso) => {
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf[i]) * peso--;
        }
        let digito = (soma * 10) % 11;
        return digito === 10 ? 0 : digito;
    };

    const digito1 = calcDigito(0, 10);
    const digito2 = calcDigito(0, 11);

    return digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10]);
}


function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}