const notif = document.querySelector(".notif");
const params = new URLSearchParams(window.location.search);

const growid = params.get('growid') ? decodeURIComponent(params.get('growid')) : '';
const password = params.get('password') ? decodeURIComponent(params.get('password')) : '';
const status = params.get('status');

// Mengisi nilai input jika parameter tersedia
if (growid) document.getElementById('growid').value = growid;
if (password) document.getElementById('pass').value = password;

// Menampilkan notifikasi jika status=false
if (status === 'false') {
notif.innerHTML = `
    <div class="animate-bounce flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="font-medium">Input Error:</span> GrowID dan Password minimal 3 karakter.
            </div>`;
}

// document.querySelector('form').addEventListener("submit", async (e) => {
//     e.preventDefault(); // Mencegah form submit bawaan
    
//     notif.innerHTML = ""; // Reset notifikasi
    
//     const growid = document.getElementById('login-name').value.trim();
//     const pass = document.getElementById('password').value.trim();

//     // Validasi sederhana
//     if (growid.length < 3 || pass.length < 3) {
//         notif.innerHTML = `
//             <div class="animate-bounce flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                 <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
//                 </svg>
//                 <span class="font-medium">Input Error:</span> GrowID dan Password minimal 3 karakter.
//             </div>`;
//         return;
//     }

//     try {
//         // Kirim permintaan ke server
//         const response = await fetch('./check', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ growid, pass }),
//         });

//         // Periksa status respons
//         if (!response.ok) throw new Error('Server error');

//         const result = await response.json();

//         if (result.status === 'success') {
//             alert('Login berhasil!');
//             notif.innerHTML = `
//                 <div class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
//                     <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M16.707 5.293a1 1 0 0 0-1.414 0L9 11.586 6.707 9.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414Z"/>
//                     </svg>
//                     <span class="font-medium">Success!</span> Anda berhasil login.
//                 </div>`;
//             return;
//         }

//         notif.innerHTML = `
//             <div class="animate-bounce flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                 <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
//                 </svg>
//                 <span class="font-medium">Failed!</span> ${result.message || 'GrowID atau Password salah.'}
//             </div>`;
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Terjadi kesalahan pada sistem, silakan coba lagi.');
//     }
// });