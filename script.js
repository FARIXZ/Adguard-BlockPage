// Display the current page host in the UI
function displayBlockedUrl() {
  const el = document.getElementById('blockedUrl');
  try {
    const host = window.location.hostname || new URL(window.location.href).hostname || 'Unknown site';
    el.textContent = host;
  } catch (e) {
    el.textContent = 'Unknown site';
  }
}

// Function to set the initial timestamp (page load time)
function setInitialTimestamp() {
  const t = document.getElementById('timestamp');
  const now = new Date();
  t.textContent = 'Blocked at ' + now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
}

// Function to go back
function goBack() {
  // Try different methods to go back
  if (window.history.length > 1) {
    window.history.back();
  } else if (document.referrer) {
    window.location.href = document.referrer;
  } else {
    // Fallback to a safe page
    window.location.href = 'about:blank';
  }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') goBack();
  if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
    e.preventDefault();
    displayBlockedUrl();
    setInitialTimestamp();
  }
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function () {
  displayBlockedUrl();
  setInitialTimestamp();
});

// Add some console easter egg for developers
// Expose minimal debug helpers
window.adguardDebug = { displayBlockedUrl, setInitialTimestamp };
