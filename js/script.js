// Ini Script JS
function submitForm() {
    // Cara Mendapatkan Form
    let form = document.forms['contact-form'];
    // Cara Mendapatkan Inputnya
    let userName = form['user-name'].value;

    // Conditional Validationnya
    if (userName == '') {
        alert('Periksa Kembali Inputan Anda')
    } else {
        alert('Selamat Datang ' + userName)
    }
}

document.getElementById('send-button').addEventListener("click", () => submitForm());

let indexSlide = 1; // [0, 1, 2];
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
    console.log('indexSLide ' + indexSlide);
    console.log('nilai n =' + n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-img');
    if (n > listImage.length) indexSlide = 1; // Reset Index Bannernya

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('jumlah gambar ' + listImage.length);
}

setInterval(() => nextSlide(1), 3000);