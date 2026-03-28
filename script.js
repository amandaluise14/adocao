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
    let termo = document.getElementById('termo').checked;

    document.getElementById('erroNome').textContent ='';
    document.getElementById('erroEmail').textContent ='';
    document.getElementById('erroTelefone').textContent ='';
    document.getElementById('erroCpf').textContent = '';
    document.getElementById('erroIdade').textContent ='';
    document.getElementById('erroCidade').textContent ='';
    document.getElementById('erroQuintal').textContent ='';

    if (nome.length < 3) {

        document.getElementById('erroNome').textContent ='Nome deve ter pelo menos 3 caracteres.';
        valido = false;
    }

    if (!email.includes('@')){

        document.getElementById('erroEmail').textContent = 'Email inválido';
        valido = false
    }

    if (telefone.length < 10){

         document.getElementById('erroTelefone').textContent = "Telefone inválido";
         valido = false;
    }

    if (cpf ===  " "){

         document.getElementById('erroCpf').textContent = "CPF é obrigatório";
         valido = false;
    }

    let cpfExistentes = ["12345678900", "13239936909"];

    if(cpfExistentes.includes(cpf)){
        alert("CPF já cadastrado!");
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

    if(horas > 8){
        alert("O animal ficará muito tempo sozinho! Justifique melhor.");
    }

    if (moradia === " "){

         alert('Selecione uma moradia para continuar');
         valido = false;
    }

    if(moradia === "apartamento" && permiteAnimais === ""){
        alert("Informe se o apartamento permite animais!");
        valido = false;  
    }

    if (quintal ===  " "){

         document.getElementById('erroQuintal').textContent = "Selecione um para continuar";
         valido = false;
    }

    if(moradia === "casa" && quintal === "sim" && quintalSeguro === ""){
        alert("Informe se o quintal é seguro!");
        valido = false;
    }

    if(moradia === "apartamento" && quintal === "sim"){
        alert("Apartamento não pode ter quintal!");
        valido = false;
    }

    if (antes ===  " "){

         document.getElementById('erroAntes').textContent = "Selecione um para continuar";
         valido = false;
    }

    if(financeiro === "nao"){
        alert("Sem condições financeiras para adoção.");
        valido = false;
    }

    if(decisao === "hoje"){
        alert("Decisão impulsiva! Pense bem antes de continuar.");
    }

    if (motivo.length < 10 || motivo.includes === "quero" || motivo.includes === "porque sim" ){

         alert('O motivo precisa ter no minímo 10 caracteres e não ser genérico');
         valido = false;
    }

    if (!termo){

         alert("Aceite os termos!");
         valido = false;
    }

     if (antes.value === "nao"){
          alert("Você poderá ter acompanhamento da ONG");
          valido = false;
     }

    if (valido){

        let resultado = document.getElementById('resultado');

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
} )