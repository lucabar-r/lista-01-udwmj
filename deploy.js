function iniciarInstanciaCloud(nomeInstancia, tipo, sistemaOperacional) {
    console.log(`Iniciando provisionamento da máquina: ${nomeInstancia}...\n`);
    
    if (sistemaOperacional === 'Linux') {
        console.log(`[SUCESSO] Instância ${tipo} com Linux configurada e ativa.`);
        console.log(`[LOG] Endereço IP atribuído e regras de rede aplicadas.`);
    } else {
        console.log(`[AVISO] O sistema ${sistemaOperacional} necessita de configurações adicionais.`);
    }
}

const dadosServidor = ['ServidorWeb-AWS', 't2.micro', 'Linux'];

iniciarInstanciaCloud(dadosServidor[0], dadosServidor[1], dadosServidor[2]);