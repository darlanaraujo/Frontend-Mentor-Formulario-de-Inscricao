const modal = document.querySelector('#modal');
const label = document.querySelector('#label');

const inputEmail = document.querySelector('#inputEmail');
const btnEnviar = document.querySelector('#btnEnviar');
const btnVoltar = document.querySelector('#btnVoltar');

const validaEmail = (email) => {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};
btnEnviar.addEventListener('click', () => {
    let email = inputEmail.value;

    if(validaEmail(email)) {
        modal.classList.add('sucesso');
    } else {
        label.classList.add('erro');
    }
});

// const validacaoEmail = () => {
//     let email = inputEmail.value;
//     let usuario = email.substring(0, email.indexOf('@'));
//     let dominio = email.substring(email.indexOf('@')+ 1, email.length);

//     if((usuario.length >= 1) &&
//     (dominio.length >= 3) &&
//     (usuario.search('@') == -1) &&
//     (dominio.search('@') == -1) &&
//     (usuario.search(' ') == -1) &&
//     (dominio.search(' ') == -1) &&
//     (dominio.search('.') != -1) &&
//     (dominio.indexOf('.') >= 1) &&
//     (dominio.lastIndexOf('.') < dominio.length -1)
//     ) {
//         modal.classList.add('sucesso');
//     } else {
//         label.classList.add('erro');
//     }
// };
// btnEnviar.addEventListener('click', validacaoEmail);


btnVoltar.addEventListener('click', () => {
    location.reload();
});

