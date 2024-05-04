let nomeUsuario = "Gabriel";
let xpUsuario = 6001;
let nivelUsuario = "";

switch(true) {
    case xpUsuario < 1000:
        nivelUsuario = "Ferro";
        break;
    case xpUsuario >= 1000 && xpUsuario <= 2000:
        nivelUsuario = "Bronze";
        break;
    case xpUsuario >= 2001 && xpUsuario <= 5000:
        nivelUsuario = "Prata";
        break;
    case xpUsuario >= 6001 && xpUsuario <= 7000:
        nivelUsuario = "Ouro";
        break;
    case xpUsuario >= 7001 && xpUsuario <= 8000:
        nivelUsuario = "Platina";
        break;
    case xpUsuario >= 8001 && xpUsuario <= 9000:
        nivelUsuario = "Ascendente";
        break;
    case xpUsuario >= 9001 && xpUsuario <= 10000:
        nivelUsuario = "Imortal";
        break;
    case xpUsuario >= 10001:
        nivelUsuario = "Radiante";
        break;
}

console.log("O Herói de nome " + nomeUsuario, "está no nível de " + nivelUsuario);