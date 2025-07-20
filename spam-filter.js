// Spam email blacklist
const spamEmails = [
  "irinademenkova86@gmail.com",
  "dinanikolskaya99@gmail.com",
  "info@shellie.caredogbest.com",
  "info@gamez.easerelief.net",
  "besthuvelr@gmail.com",
];

// Additional spam patterns to check
const spamPatterns = [
  /.*\.ru$/, // Russian domains
  /.*temp.*mail.*/, // Temporary email services
  /.*10minutemail.*/,
  /.*guerrillamail.*/,
  /.*mailinator.*/,
];

// Check if email is in spam list
function isSpamEmail(email) {
  const emailLower = email.toLowerCase().trim();

  // Check exact matches
  if (spamEmails.includes(emailLower)) {
    return true;
  }

  // Check patterns
  for (const pattern of spamPatterns) {
    if (pattern.test(emailLower)) {
      return true;
    }
  }

  return false;
}

// Add email validation to contact form
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const emailInput = document.querySelector("#email");

  if (contactForm && emailInput) {
    contactForm.addEventListener("submit", function (e) {
      const emailValue = emailInput.value;

      if (isSpamEmail(emailValue)) {
        e.preventDefault();

        // Show fake success message to fool spammers
        const submitBtn = contactForm.querySelector(".submit-btn");
        const btnText = submitBtn.querySelector(".btn-text");
        const btnLoading = submitBtn.querySelector(".btn-loading");

        // Simulate loading
        btnText.style.display = "none";
        btnLoading.style.display = "inline";
        submitBtn.disabled = true;

        setTimeout(() => {
          btnText.style.display = "inline";
          btnLoading.style.display = "none";
          submitBtn.disabled = false;
          alert("Thank you! Your message has been sent successfully.");
          contactForm.reset();
        }, 2000);

        return false;
      }
    });
  }
});
