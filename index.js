const fileInput = document.getElementById('file-upload');
const fileChosen = document.getElementById('file-chosen');
const uploadForm = document.getElementById('upload-form');
const uploadButton = uploadForm.querySelector('button[type="submit"]');
const uploadStatus = document.getElementById('upload-status');
const progressBar = document.getElementById('progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');
const progressPercent = document.getElementById('progress-percent');

fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        const fileNames = Array.from(this.files).map(file => file.name).join(', ');
        fileChosen.textContent = fileNames;
        uploadButton.disabled = false;
    } else {
        fileChosen.textContent = 'No files chosen';
        uploadButton.disabled = true;
    }
});

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    uploadButton.disabled = true;
    progressBarContainer.classList.remove('hidden');
    progressBar.style.width = '0%';
    progressPercent.textContent = '0%';
    
    // Simulate file upload with progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        progressPercent.textContent = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            uploadStatus.classList.remove('hidden');
            fileChosen.textContent = 'No files chosen';
            fileInput.value = '';
            setTimeout(() => {
                progressBarContainer.classList.add('hidden');
                uploadStatus.classList.add('hidden');
                progressBar.style.width = '0%';
                progressPercent.textContent = '0%';
            }, 5000);
        }
    }, 500);
});
