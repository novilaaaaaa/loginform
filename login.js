const correctEmail = 'jwd@gmail.com';
const correctPassword = '1234';

const messageContainer = document.getElementById('message-container');

function cekLogin() {
    const userEmail = document.getElementById('fEmail').value;
    const userPassword = document.getElementById('fPassword').value;

    if (userEmail !== correctEmail || userPassword !== correctPassword) {
        messageContainer.innerHTML = '<p class="error-message">Login gagal, Email atau Password salah!</p>';
    } else {
        messageContainer.innerHTML = '<p class="success-message">Login berhasil . . .</p>';
        window.location.href = 'order.html'; // Fungsi Baris Ini Redirect ke halaman order.html setelah login berhasil
    }
}
