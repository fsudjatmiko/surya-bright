// script.js - SuryaBright UI interactions

document.addEventListener('DOMContentLoaded', function() {
  // Buy form animation
  const buyForm = document.querySelector('.buy-form');
  if (buyForm) {
    buyForm.addEventListener('submit', function(e) {
      e.preventDefault();
      buyForm.innerHTML = '<h2 style="color:#2196f3;">Thank you!<br>Your request has been received.</h2>';
    });
  }

  // Profile battery animation
  const battery = document.querySelector('.battery');
  if (battery) {
    let percent = 0;
    const target = parseInt(battery.textContent);
    battery.textContent = '0%';
    const interval = setInterval(() => {
      percent++;
      battery.textContent = percent + '%';
      if (percent >= target) clearInterval(interval);
    }, 18);
  }
});
