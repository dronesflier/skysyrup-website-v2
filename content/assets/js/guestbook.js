const API_URL = 'https://guestbook.skysyrup.dev/comments';
let currentPage = 1;
let loading = false;

async function fetchCaptcha() {
  try {
    const response = await fetch('https://guestbook.skysyrup.dev/generate_captcha');
    const captchaId = response.headers.get('Captcha-ID');
    const blob = await response.blob();

    document.getElementById('captcha-img').src = URL.createObjectURL(blob);
    document.getElementById('captcha-id').value = captchaId;
  } catch (error) {
    console.error('Error fetching CAPTCHA:', error);
    showFormStatus('Error loading CAPTCHA. Please try again.', 'error');
  }
}

async function fetchComments(page) {
  try {
    const response = await fetch(`${API_URL}?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

function appendComments(comments) {
  const container = document.getElementById('comments-container');
  comments.forEach(comment => {
    if (!comment.name || !comment.message) {
      console.warn('Skipping comment due to missing fields:', comment);
      return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.style.cssText = 'padding: 1rem; border-left: 4px solid var(--secondary); background-color: var(--secondarygray); border-radius: 0.25rem;';
    
    let html = `<div style="margin-bottom: 0.5rem;"><strong style="color: var(--secondary);">${escapeHtml(comment.name)}</strong>`;
    
    if (comment.crunchy) {
      html += ` <span style="font-size: 1.2em;">${escapeHtml(comment.crunchy)}</span>`;
    }
    html += '</div>';

    if (comment.websiteLink) {
      html += `<div style="margin-bottom: 0.5rem;"><a href="${escapeHtml(comment.websiteLink)}" target="_blank" rel="noopener noreferrer" style="color: var(--secondary);">website</a></div>`;
    }

    html += `<div style="color: var(--dark); white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(comment.message)}</div>`;

    commentDiv.innerHTML = html;
    container.appendChild(commentDiv);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showFormStatus(message, type) {
  const statusDiv = document.getElementById('form-status');
  statusDiv.textContent = message;
  statusDiv.style.backgroundColor = type === 'error' ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)';
  statusDiv.style.display = 'block';
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 5000);
}

async function submitComment(event) {
  event.preventDefault();

  const nameField = document.getElementById('name');
  const messageField = document.getElementById('message');

  if (!nameField.value.trim()) {
    alert('Name field is required.');
    nameField.focus();
    return;
  }

  if (!messageField.value.trim()) {
    alert('Message field is required.');
    messageField.focus();
    return;
  }

  const commentData = {
    name: nameField.value.trim(),
    crunchy: document.getElementById('crunchy').value,
    websiteLink: document.getElementById('website-link').value,
    email: document.getElementById('email').value,
    message: messageField.value.trim(),
    captcha: document.getElementById('captcha').value,
    captcha_id: document.getElementById('captcha-id').value,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentData),
    });

    const result = await response.json();
    if (response.ok) {
      showFormStatus('Comment submitted successfully! 🎉', 'success');
      document.getElementById('comment-form').reset();
      fetchCaptcha();
      
      // Reload comments
      currentPage = 0;
      document.getElementById('comments-container').innerHTML = '';
      await loadMoreComments();
    } else {
      showFormStatus(`Error: ${result.error || 'Unknown error'}`, 'error');
    }
  } catch (error) {
    console.error('Error submitting comment:', error);
    showFormStatus('An error occurred while submitting the comment.', 'error');
  }
}

async function loadMoreComments() {
  if (loading) return;
  loading = true;
  
  const btn = document.getElementById('load-more-btn');
  const loader = document.getElementById('loader');
  
  btn.style.display = 'none';
  loader.style.display = 'block';

  const comments = await fetchComments(currentPage);
  
  if (comments.length > 0) {
    appendComments(comments);
    currentPage++;
    btn.style.display = 'block';
  } else if (currentPage === 0) {
    // First load with no comments
    const container = document.getElementById('comments-container');
    container.innerHTML = '<p style="color: var(--gray);">no comments yet. be the first to add one!</p>';
  }

  loader.style.display = 'none';
  loading = false;
}

// Initialize
window.addEventListener('load', () => {
  fetchCaptcha();
  loadMoreComments();
  
  document.getElementById('comment-form').addEventListener('submit', submitComment);
  document.getElementById('refresh-captcha-btn').addEventListener('click', fetchCaptcha);
  document.getElementById('load-more-btn').addEventListener('click', loadMoreComments);
});
