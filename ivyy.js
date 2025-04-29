document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('.radio-input input[type="radio"]');
    const submitBtn = document.querySelector('#submitBtn');
    const successMessage = document.querySelector('.result.success');
    const errorMessage = document.querySelector('.result.error');
    const radioContainer = document.querySelector('.radio-input');
    const labels = document.querySelectorAll('.radio-input label');

    // Tambahkan event listener untuk tombol submit
    submitBtn.addEventListener('click', function() {
        const selectedRadio = document.querySelector('.radio-input input[type="radio"]:checked');
        
        if (selectedRadio) {
            // Reset label untuk warna sebelumnya
            labels.forEach(label => {
                label.classList.remove('correct', 'wrong');
            });

            // Jika jawaban benar
            if (selectedRadio.value === 'value-2') {
                successMessage.classList.add('show');
                errorMessage.classList.remove('show');

                selectedRadio.nextElementSibling.classList.add('correct');
                radioContainer.classList.add('correct');
                radioContainer.classList.remove('wrong');
            } else { // Jawaban salah
                successMessage.classList.remove('show');
                errorMessage.classList.add('show');

                selectedRadio.nextElementSibling.classList.add('wrong');
                radioContainer.classList.remove('correct');
                radioContainer.classList.add('wrong');
            }
        } else {
            alert('Pilih jawaban terlebih dahulu!');
        }
    });
});