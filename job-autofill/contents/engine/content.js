// ================================
// Semantic Autofill Engine – Orchestrator
// ================================

// Toggle for console debugging
const DEBUG = false;

function log(...args) {
  if (DEBUG) console.log("[Autofill]", ...args);
}

// -------------------------------
// Core Autofill Loop
// -------------------------------
function runAutofill(profile) {
  if (!profile) return;

  const elements = document.querySelectorAll(
    "input, textarea, [role='textbox'], [role='combobox']"
  );

  elements.forEach((el) => {
    // Never overwrite user-filled values
    if (el.value || el.dataset.autofilled) return;

    const signature = getSignature(el);
    if (!signature) return;

    const fieldKey = detectFieldKey(signature);
    if (!fieldKey) return;

    const value = profile[fieldKey];
    if (!value) return;

    log("Detected field:", fieldKey, el);

    // Checkbox groups (ethnicity, veteran, consent, etc.)
    if (el.type === "checkbox") {
      handleCheckbox(el, value);
      return;
    }

    // Custom dropdowns (Workday / Greenhouse style)
    if (el.getAttribute("role") === "combobox") {
      fillDropdown(el, value);
      el.dataset.autofilled = "true";
      return;
    }

    // Text inputs / textareas
    fill(el, value);
    el.dataset.autofilled = "true";
  });
}

// -------------------------------
// Checkbox Handling
// -------------------------------
function handleCheckbox(el, value) {
  // Only auto-check if user explicitly opted in
  if (value !== true && value !== "Yes") return;

  if (!el.checked) {
    el.click();
    el.dataset.autofilled = "true";
  }
}

// -------------------------------
// Dropdown Handling
// -------------------------------
function fillDropdown(el, value) {
  try {
    el.click();

    setTimeout(() => {
      const options = document.querySelectorAll('[role="option"]');
      for (const option of options) {
        if (
          option.innerText
            .toLowerCase()
            .includes(value.toLowerCase())
        ) {
          option.click();
          break;
        }
      }
    }, 300);
  } catch (e) {
    log("Dropdown fill failed", e);
  }
}

// -------------------------------
// Observe DOM Changes (Step-Agnostic)
// -------------------------------
const observer = new MutationObserver(() => {
  chrome.storage.sync.get("profile", ({ profile }) => {
    runAutofill(profile);
  });
});

// Start observing immediately
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// -------------------------------
// Initial Run (for already-loaded fields)
// -------------------------------
chrome.storage.sync.get("profile", ({ profile }) => {
  runAutofill(profile);
});
