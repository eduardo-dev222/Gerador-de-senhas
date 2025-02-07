function gerarSenha() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";

    let caracteres = letras;
    if (document.getElementById("includeNumbers").checked) caracteres += numeros;
    if (document.getElementById("includeSymbols").checked) caracteres += simbolos;

    const tamanho = document.getElementById("length").value;
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    document.getElementById("password").value = senha;
}

function copiarSenha() {
    const passwordField = document.getElementById("password");
    if (passwordField.value) {
        passwordField.select();
        document.execCommand("copy");
        alert("Senha copiada!");
    }
}