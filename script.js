let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementById('moradia').value;
    let quintal = document.getElementById('quintal').value;
    let antes = document.getElementById('antes').value;
    let horas = document.getElementById('horas').value;
    let motivo = document.getElementById('motivo').value;
    let termo = document.getElementById('termo').value;

    document.getElementById('erroNome').textContent ='';
    document.getElementById('erroEmail').textContent ='';
    document.getElementById('erroTelefone').textContent ='';
    document.getElementById('erroCpf').textContent ='';
    document.getElementById('erroIdade').textContent ='';
    document.getElementById('erroCidade').textContent ='';
    document.getElementById('erroQuintal').textContent ='';
    document.getElementById('erroAntes').textContent ='';
    document.getElementById('erroHoras').textContent ='';
    document.getElementById('erroTermo').textContent ='';


    if (nome.length < 3) {

        document.getElementById('erroNome').textContent ='Nome deve ter pelo menos 3 caracteres.';
        valido = false;
    }

    if (!email.includes('@')){

        document.getElementById('erroEmail').textContent = 'Email inválido';
        valido = false
    }

    if (telefone.length < 8){

         document.getElementById('erroTelefone').textContent = "Telefone inválido";
         valido = false;
    }

    if (cpf.trim() ===  ' '){

         document.getElementById('erroCpf').textContent = "CPF inválido";
         valido = false;
    }

    if (cidade === " "){

         alert("Insira uma cidade para continuar");
         valido = false;
    }

    if (idade < 18) {
        document.getElementById('erroIdade').textContent ='Você precisa ter 18 anos ou mais para enviar o formulário!';
        valido = false;
    }

    if (moradia === " "){

         alert('Selecione uma moradia para continuar');
         valido = false;
    }

    if (quintal.trim() ===  ' '){

         document.getElementById('erroQuintal').textContent = "Selecione um para continuar";
         valido = false;
    }

    if (antes.trim() ===  ' '){

         document.getElementById('erroAntes').textContent = "Selecione um para continuar";
         valido = false;
    }

    if (motivo.length < 10){

         alert('O motivo precisa ter no minímo 10 caracteres');
         valido = false;
    }

    if (!termo){

         document.getElementById('erroTermo').textContent = "Aceite os termos!";
         valido = false;
    }

     if (moradia.value === "ap"){
            alert("O local permite animais?");
                valido = false;
            }

    if (valido){

        let resultado = document.getElementById('resultado')

        resultado.innerHTML = `

        Dados enviados: <br>
        Nome: ${nome} <br>
        Email: ${email} <br>
        Telefone: ${telefone} <br>
        CPF: ${cpf} <br>
        Idade: ${idade} <br>
        Cidade: ${cidade} <br>
        Moradia: ${moradia} <br>
        Horas: ${horas} <br>
        Motivo: ${motivo} <br>
        `;
        form.reset();
        
    }

})