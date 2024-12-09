// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('foto');
    const previewContainer = document.createElement('div');
    previewContainer.classList.add('preview-container');
    document.querySelector('.form-container').appendChild(previewContainer);

    // Atualiza a pré-visualização da imagem
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewContainer.innerHTML = `<img src="${e.target.result}" alt="Pré-visualização da Foto">`;
            };
            reader.readAsDataURL(file);
        } else {
            previewContainer.innerHTML = '';
        }
    });
});

// Evento para o botão "Criar Mídia"
document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.querySelector('.create-media-btn');

    createButton.addEventListener('click', () => {
        alert('Mídia Social do Pet criada com sucesso!');
    });
});
