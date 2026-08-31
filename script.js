function iniciarInstancia() {
    const nomeInstancia = "ServidorWeb-AWS";
    const sistemaOperacional = "Linux";
    const elementoLog = document.getElementById("log-servidor");

    if (sistemaOperacional === 'Linux') {
        elementoLog.textContent = `[SUCESSO] Instância ${nomeInstancia} com ${sistemaOperacional} configurada e ativa.`;
        elementoLog.style.color = "#4caf50";
    } else {
        elementoLog.textContent = `[ERRO] Falha ao provisionar a instância.`;
        elementoLog.style.color = "red";
    }
}
