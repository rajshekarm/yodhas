function autofill(profile) {
  const fields = document.querySelectorAll(
    "input, textarea, [role='textbox'], [role='combobox']"
  );

  fields.forEach(el => {
    if (el.value) return;

    const sig = getSignature(el);
    const key = detectFieldKey(sig);
    if (!key) return;

    const value = profile[key];
    if (!value) return;

    fill(el, value);
  });
}

const observer = new MutationObserver(() => {
  chrome.storage.sync.get("profile", ({ profile }) => {
    if (profile) autofill(profile);
  });
});

observer.observe(document.body, { childList: true, subtree: true });
