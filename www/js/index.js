var contPessoas = 0;
var contVacas = 0;
var contOvnis = 0;
var divNumeroPessoas = document.querySelector('div#numeroPessoas');
var btIncrementarPessoas = document.querySelector('#incrementarPessoas');
var btResetarPessoas = document.querySelector('#resetarPessoas');
var divNumeroVacas = document.querySelector('div#numeroVacas');
var btIncrementarVacas = document.querySelector('#incrementarVacas');
var btResetarVacas = document.querySelector('#resetarVacas');
var divNumeroOvnis = document.querySelector('div#numeroOvnis');
var btIncrementarOvnis = document.querySelector('#incrementarOvnis');
var btResetarOvnis = document.querySelector('#resetarOvnis');

document.addEventListener('deviceready', function() {
    console.debug('PRONTO: ' + device.platform);
    contPessoas = parseInt(localStorage['contPessoas'] || 0);
    divNumeroPessoas.textContent = contPessoas;
    btIncrementarPessoas.addEventListener('click', function() {
        contPessoas++;
        localStorage['contPessoas'] = contPessoas;
        divNumeroPessoas.textContent = contPessoas;
    });
    btResetarPessoas.addEventListener('click', function() {
        contPessoas = 0;
        localStorage['contPessoas'] = contPessoas;
        divNumeroPessoas.textContent = contPessoas;
    });
    contVacas = parseInt(localStorage['contVacas'] || 0);
    divNumeroVacas.textContent = contVacas;
    btIncrementarVacas.addEventListener('click', function() {
        contVacas++;
        localStorage['contVacas'] = contVacas;
        divNumeroVacas.textContent = contVacas;
    });
    btResetarVacas.addEventListener('click', function() {
        contVacas = 0;
        localStorage['contVacas'] = contVacas;
        divNumeroVacas.textContent = contVacas;
    });
    contOvnis = parseInt(localStorage['contOvnis'] || 0);
    divNumeroOvnis.textContent = contOvnis;
    btIncrementarOvnis.addEventListener('click', function() {
        contOvnis++;
        localStorage['contOvnis'] = contOvnis;
        divNumeroOvnis.textContent = contOvnis;
    });
    btResetarOvnis.addEventListener('click', function() {
        contOvnis = 0;
        localStorage['contOvnis'] = contOvnis;
        divNumeroOvnis.textContent = contOvnis;
    });
});
