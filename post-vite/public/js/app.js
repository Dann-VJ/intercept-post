if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}

const isOnline = () => {
    if (navigator.onLine) {
        alert('Conexión restablecida');
    } else {
        alert('Conexión perdida');
    }
}

window.addEventListener('online', isOnline);
window.addEventListener('offline', isOnline);

isOnline();