function openFile() {
    document.getElementById('fileInput').click();
}

function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('editor').value = e.target.result;
        };
        reader.readAsText(file);
    }
}

function saveFile() {
    const text = document.getElementById('editor').value;
    const filename = prompt('Enter the filename:', 'untitled.txt');

    if (filename) {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }
}

function updateFont() {
    const font = document.getElementById('fontSelect').value;
    document.getElementById('editor').style.fontFamily = font;
}

function updateSize() {
    const size = document.getElementById('sizeSelect').value;
    document.getElementById('editor').style.fontSize = size;
}

function alignText(alignment) {
    document.getElementById('editor').style.textAlign = alignment;
}
// Add this to script.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch((error) => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}
