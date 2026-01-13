# 🚀 Universal Job Autofill

A **semantic, step-agnostic Chrome extension** that automatically fills job applications across **Workday, Greenhouse, Lever**, and other ATS platforms — without being tied to page structure or steps.

> Fill once. Apply everywhere.

---

## ✨ Key Features

- ✅ **Step-agnostic** – works with multi-step and single-page applications
- 🧠 **Semantic field detection** – understands *what* a field means, not how it’s built
- 🔁 **Continuous autofill** – fills fields as they appear (Next / Back / Add Another)
- 🔒 **Privacy-first** – all data stays in your browser
- 🧩 **Extensible** – add new fields without changing engine logic
- ⚖️ **Ethically safe** – sensitive fields are opt-in only
- 🌍 **Board-agnostic** – not hardcoded to any ATS

---

## 🧠 How It Works

Popup Profile → Chrome Storage → Semantic Autofill Engine → Job Application Page

The engine continuously:
1. Observes the page for new fields
2. Determines what each field represents (email, job title, visa status, etc.)
3. Fills it using your saved profile (only if you opted in)

---

## 🗂️ Project Structure

```
job-autofill-extension/
├── manifest.json
├── popup.html
├── popup.js
├── fieldMap.js
├── utils.js
└── content.js
```

---

## 📋 Supported Fields

### Personal
- Name, Email, Phone
- LinkedIn, GitHub, Portfolio

### Work Authorization
- Authorized to work in the US
- Visa sponsorship
- 18+ confirmation
- Relocation willingness

### Experience & Education
- Job title, company, dates, description
- Degree, school, field of study

### Voluntary Disclosures (Optional)
- Gender
- Ethnicity
- Veteran status
- Consent checkbox

---

## ➕ Adding New Fields

1. Add field to popup UI
2. Save it in popup.js
3. Map keywords in fieldMap.js

No engine changes required.

---

## 🔧 Installation

1. Download or clone this repo
2. Open Chrome → chrome://extensions
3. Enable Developer Mode
4. Click **Load Unpacked**
5. Select the project folder
6. Fill profile once and start applying

---

## 🛡️ Safety

- Never overwrites filled fields
- Never submits forms
- Never guesses sensitive data
- Manual override always possible

---

## 📄 License

MIT
