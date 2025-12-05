---
name: Bug Report
about: Create a detailed report to help us improve SystemAudioTranscriber
title: "[BUG] - A brief, descriptive title"
labels: ["bug", "triage"]
assignees: 'chirag127'
---

### **1. Executive Summary**

(Provide a clear and concise one-sentence summary of the bug.)

---

### **2. System Environment**

(Please complete the following information to help us diagnose the issue.)

*   **Operating System:** [e.g., Windows 11 Pro 23H2]
*   **Python Version:** [e.g., Python 3.10.4]
*   **App Version / Commit SHA:** [e.g., v1.2.0 or `git rev-parse HEAD`]
*   **Vosk Model Used:** [e.g., `vosk-model-small-en-us-0.15`]
*   **Audio Input Device:** [e.g., Default System Loopback, Specific Microphone]

---

### **3. Steps to Reproduce**

(Provide a clear, step-by-step sequence of actions to reliably trigger the bug. Ambiguity here is the biggest blocker to a fast resolution.)

1.  Launch the application via `python main.py`.
2.  Select '...' from the audio device dropdown.
3.  Click the 'Start Transcription' button.
4.  Play audio from [e.g., YouTube, Spotify, system notification sound].
5.  Observe the error/unexpected behavior.

---

### **4. Expected Behavior**

(Describe exactly what you expected to happen after performing the steps above.)

*   The transcribed text should have appeared in the floating window, matching the spoken words.

---

### **5. Actual Behavior**

(Describe what actually happened. Include specific error messages, application crashes, or incorrect output.)

*   The application window froze.
*   The following error was printed to the console: `[PASTE FULL STACK TRACE HERE]`
*   No text appeared, or the transcribed text was completely inaccurate (e.g., "...-...").

---

### **6. Visual Evidence (Screenshots & Logs)**

(If applicable, add screenshots, GIFs, or video recordings to help explain your problem. Please also attach any relevant console output or application logs.)

text
<-- Paste any relevant logs or console output here -->


---

### **7. Additional Context**

(Add any other context about the problem here. For example, did this issue start happening after a recent update? Does it only occur with a specific audio source?)