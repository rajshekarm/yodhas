// ================================
// Utils – Field Detection & Filling
// ================================

// -------------------------------
// Build Field Signature (WHAT clues)
// -------------------------------
function getSignature(el) {
  let labelText = "";

  // Try to find associated label
  const label =
    el.closest("div")?.querySelector("label") ||
    document.querySelector(`label[for="${el.id}"]`);

  if (label) labelText = label.innerText;

  const signature = `
    ${labelText}
    ${el.getAttribute("aria-label") || ""}
    ${el.placeholder || ""}
    ${el.name || ""}
    ${el.id || ""}
  `
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

  return signature;
}

// -------------------------------
// Field Meaning Detector (WHAT)
// -------------------------------
function detectFieldKey(signature) {
  if (!signature) return null;

  for (const fieldKey in FIELD_MAP) {
    const keywords = FIELD_MAP[fieldKey];

    for (const keyword of keywords) {
      if (signature.includes(keyword.toLowerCase())) {
        return fieldKey;
      }
    }
  }

  return null;
}

// -------------------------------
// Generic Fill (Text / Textarea)
// -------------------------------
function fill(el, value) {
  try {
    el.focus();
    el.value = value;

    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    el.dispatchEvent(new Event("blur", { bubbles: true }));
  } catch (e) {
    console.warn("[Autofill] Text fill failed", e);
  }
}

// -------------------------------
// Dropdown Fill (Workday / ATS style)
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
    console.warn("[Autofill] Dropdown fill failed", e);
  }
}

// -------------------------------
// Checkbox Group Fill
// (Ethnicity, Veteran, Consent, etc.)
// -------------------------------
function fillCheckboxGroup(value) {
  if (!value) return;

  const labels = document.querySelectorAll("label");

  labels.forEach((label) => {
    const text = label.innerText.toLowerCase();

    if (text.includes(value.toLowerCase())) {
      const checkbox = label.querySelector("input[type='checkbox']");
      if (checkbox && !checkbox.checked) {
        checkbox.click();
      }
    }
  });
}

// -------------------------------
// 🔌 AI-READY HOOK (Optional Future)
// -------------------------------
// This is intentionally NOT used yet.
// Later, you can plug in AI here without
// touching content.js
//
// async function aiDetectFieldKey(signature) {
//   // Call OpenAI / local model / etc.
//   return { fieldKey, confidence }
// }

// -------------------------------
// Exports (implicitly global for content.js)
// -------------------------------
// getSignature
// detectFieldKey
// fill
// fillDropdown
// fillCheckboxGroup
