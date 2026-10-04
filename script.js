// @ts-nocheck
// Pengaturan Pop-up Login
const modal = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Fungsi Salin Skrip
function salinKode(teks) {
    navigator.clipboard.writeText(teks).then(() => {
        alert('Skrip berhasil disalin ke clipboard!');
    }).catch(() => {
        alert('Skrip: ' + teks);
    });
}
// Menangani formulir login saat ditekan
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login berhasil!');
});
