// Configuração do redirecionamento
document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enterButton');
    
    // Aqui você coloca o link do seu servidor
    const serverLink = 'https://seuserver.com'; // SUBSTITUA POR SEU LINK
    
    enterButton.addEventListener('click', function() {
        // Efeito de loading no botão
        const originalText = enterButton.querySelector('.button-text').textContent;
        enterButton.querySelector('.button-text').textContent = 'CONECTANDO...';
        enterButton.style.opacity = '0.7';
        enterButton.disabled = true;
        
        // Redireciona após 1.5 segundos (para dar tempo do efeito visual)
        setTimeout(() => {
            window.location.href = serverLink;
        }, 1500);
    });
    
    // Efeito de digitação no subtítulo
    const subtitle = document.querySelector('.cyber-subtitle');
    const originalSubtitle = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalSubtitle.length) {
            subtitle.textContent += originalSubtitle.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Inicia o efeito de digitação após 1 segundo
    setTimeout(typeWriter, 1000);
});
