document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('photo-upload');
    const profileIcon = document.querySelector('.profile-photo i');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileIcon.style.backgroundImage = `url(${e.target.result})`;
                profileIcon.style.backgroundSize = 'cover';
                profileIcon.style.backgroundPosition = 'center';
                profileIcon.style.color = 'transparent';
            };
            reader.readAsDataURL(file);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('photo-upload');
    const uploadButton = document.getElementById('upload-button');
    const profileIcon = document.querySelector('.profile-photo i');

    // Habilita o botão "Enviar Foto" ao selecionar um arquivo
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Atualiza a pré-visualização
                profileIcon.style.backgroundImage = `url(${e.target.result})`;
                profileIcon.style.backgroundSize = 'cover';
                profileIcon.style.backgroundPosition = 'center';
                profileIcon.style.color = 'transparent';

                // Habilita o botão de envio
                uploadButton.disabled = false;
            };
            reader.readAsDataURL(file);
        }
    });

    // Ação do botão "Enviar Foto"
    uploadButton.addEventListener('click', () => {
        profileIcon.style.backgroundImage = '';
            profileIcon.style.color = '#ccc'; // Retorna a cor do ícone
            fileInput.value = ''; // Limpa o input
            uploadButton.disabled = true; // Desativa o botão novamente
        const file = fileInput.files[0];
        if (file) {
            // Simula o envio da foto
            alert('Foto enviada com sucesso!');
        } else {
            alert('Por favor, selecione uma foto antes de enviar.');
        }
    });
});
