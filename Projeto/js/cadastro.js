document.addEventListener('DOMContentLoaded', () => {
    const photoInput = document.getElementById('photo-upload');
    const previewImg = document.getElementById('preview');
    const uploadBtn = document.getElementById('upload-btn');

    // Visualizar a imagem selecionada
    photoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                previewImg.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });

    // Simular envio da foto
    uploadBtn.addEventListener('click', () => {
        if (photoInput.files.length > 0) {
            alert('Foto enviada com sucesso!');
            photoInput.value = ''; // Reseta o input após envio
            previewImg.src = "https://via.placeholder.com/100"; // Retorna à imagem padrão
        } else {
            alert('Por favor, adicione uma foto antes de enviar.');
        }
    });
});
