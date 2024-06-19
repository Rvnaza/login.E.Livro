const campoLogin = document.getElementById('username');
const campoSenha = document.getElementById('password');
const campoNovoLogin = document.getElementById('newusername');
const campoNovaSenha = document.getElementById('newpassword');
const campoRepSenha = document.getElementById('reppassword');

function logar() {

    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = 'Usuario ou senha incorreta'
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        // Lógica para verificar as credenciais de login
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                break;
            }
        }
    }
    alert(mensagem)
    window.location.href = 'home.html'
}

function cadastrar() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        // Lógica para registrar o usuário
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };

        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        if (existe(usuario.login, bancoDeDados)) {
            alert("Usuário já cadastrado anteriormente!")
        }
        else {
            bancoDeDados.push(usuario);
            localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
            alert("Usuário cadastrado com sucesso!");
        }
        
    }
    

    else {
        alert("As senhas são diferentes!");
    }
}
function existe(login, bancoDeDados){
    for(let usuario of bancoDeDados){
        if(login == usuario.login){
            return true
        }
    }
    return false
}

function logout(){
    window.location.href = 'index.html'
}

const campoNomeLivro = document.getElementById('nomeLivro');
const campoAutorLivro = document.getElementById('autorLivro');
const campoGeneroLivro = document.getElementById('generoLivro');
const campoIsbnLivro = document.getElementById('isbnLivro');
const campoReIsbnLivro = document.getElementById('reIsbnLivro');

function cadastrarLivro(){
    
    if (campoIsbnLivro.value == campoReIsbnLivro) {
        // Lógica para registrar o livro
        const Livros = {
            livro: campoNomeLivro.value,
            autor: campoAutorLivro.value,
            genero: campoGeneroLivro.value,
            isbn: campoIsbnLivro.value,
            reIsbn: campoReIsbnLivro.value
        };

        let bancoDeDados2 = JSON.parse(localStorage.getItem("bancoDeDados2"));
        if (bancoDeDados2 == null) {
            bancoDeDados2 = [];
        }
        if (existe2(Livros.livro, bancoDeDados2)) {
            alert("Livro já cadastrado anteriormente!")
        }
        else {
            bancoDeDados2.push(Livros);
            localStorage.setItem("bancoDeDados2", JSON.stringify(bancoDeDados2));
            alert("Livro cadastrado com sucesso!");
        }
        
    }
    function existe2(livro, bancoDeDados2){
        for(let Livros of bancoDeDados2){
            if(livro == Livros.livro){
                return true
            }
        }
        return false
    }
}