const textArea = document.getElementById('textArea');
const charCounter = document.getElementById('charCounter');
const maxLength = textArea.getAttribute('maxlength');

textArea.addEventListener('input', () => {
  const currentLength = textArea.value.length;
  const remaining = maxLength - currentLength;
  
  charCounter.textContent = `${remaining} characters remaining`;

  if (remaining < 0) {
    charCounter.classList.add('exceeded');
  } else {
    charCounter.classList.remove('exceeded');
  }
});

// Initialize on page load
const initialRemaining = maxLength - textArea.value.length;
charCounter.textContent = `${initialRemaining} characters remaining`;
