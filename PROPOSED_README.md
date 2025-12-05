# SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App

Real-time transcription of Windows system audio to text via a floating, always-on-top GUI. Utilizes offline Vosk models for privacy.

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App/ci.yml?style=flat-square)](https://github.com/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App?style=flat-square)](https://codecov.io/github/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App)
[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Python%2CVosk%2CTkinter%2CWASAPI-blue?style=flat-square)](https://www.python.org/)
[![Lint/Format](https://img.shields.io/badge/Lint%2FFormat-Ruff-orange?style=flat-square)](https://github.com/astral-sh/ruff)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square)](https://creativecommons.org/licenses/by-nc/4.0/)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App?style=flat-square)](https://github.com/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App)

--- 

**Star ⭐ this Repo!**

--- 

## BLUF (Bottom Line Up Front)

A privacy-focused, offline system audio transcriber for Windows, converting real-time audio streams into text with a configurable, always-on-top GUI.

## Architecture Diagram

mermaid
graph TD
    A[Windows System Audio Input (WASAPI)] --> B(Audio Capture Module)
    B --> C{Audio Processing & Buffering}
    C --> D(Vosk Speech Recognition Engine - Offline)
    D --> E[Text Output Module]
    E --> F[Tkinter GUI (Always-On-Top)]
    F --> G(User Interface - Display Text)
    G --> H(Configuration Settings)
    H --> F
    D --> I(Model Management)


## Table of Contents

*   [Features](#features)
*   [Architecture](#architecture)
*   [Getting Started](#getting-started)
*   [Development](#development)
*   [Contributing](#contributing)
*   [License](#license)
*   [AI Agent Directives](#ai-agent-directives)

## Features

*   **Real-Time Transcription:** Captures and transcribes system audio as it plays.
*   **Offline Vosk Models:** Ensures privacy and functionality without internet dependency.
*   **Always-On-Top GUI:** A floating window for continuous visibility.
*   **Configurable Interface:** Adjust window position, size, and font.
*   **Cross-Platform Potential:** Core logic designed for Windows but adaptable.
*   **Privacy First:** No external audio data is sent over the network.

## Getting Started

### Prerequisites

*   **Python:** Version 3.10+ installed.
*   **pip:** Package installer for Python.
*   **uv:** (Recommended) Python package manager.
*   **Vosk Models:** Download desired language models for offline recognition.

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App.git
    cd SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App
    

2.  **Set up a virtual environment (Recommended):**
    bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows: .venv\Scripts\activate
    

3.  **Install dependencies using uv:**
    bash
    uv pip install -r requirements.txt
    
    *Alternatively, using pip:*
    bash
    pip install -r requirements.txt
    

4.  **Download Vosk Models:**
    Place the downloaded Vosk language model folders into the `models/` directory (create if it doesn't exist).

### Running the Application

bash
python main.py


## Development

### Development Setup

Follow the installation steps above. Ensure you have the necessary build tools if required by specific Python packages.

### Testing

Automated tests are managed with `pytest`.

bash
pytest


### Linting & Formatting

This project uses `Ruff` for lightning-fast linting and formatting.

bash
ruff check .
ruff format .


### Principles

*   **SOLID:** Adherence to the SOLID design principles for maintainable and scalable code.
*   **DRY:** Don't Repeat Yourself – ensure code is modular and reusable.
*   **YAGNI:** You Ain't Gonna Need It – focus on current requirements.

--- 

## Contributing

Contributions are welcome! Please refer to the [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) file for detailed guidelines.

## License

This project is licensed under the CC BY-NC 4.0 License - see the [LICENSE](LICENSE) file for details.

## AI Agent Directives

<details>
<summary>Click to expand AI Agent Directives</summary>

This repository is managed under the **Apex Technical Authority** framework, adhering to late 2025 standards.

*   **CORE PYTHON STACK (DECEMBER 2025):**
    *   **Environment & Package Management:** `uv` (recommended for its speed and efficiency in dependency resolution and management).
    *   **Linting & Formatting:** `Ruff` (for ultra-fast code analysis and formatting).
    *   **Testing Framework:** `Pytest` (for comprehensive unit and integration testing).
    *   **Python Version:** 3.10+

*   **KEY LIBRARIES:**
    *   **Speech Recognition:** `vosk` (utilizing offline models).
    *   **GUI Framework:** `tkinter` (for native, cross-platform GUI development).
    *   **Audio Capture:** `sounddevice` / `pyaudio` (or platform-specific APIs like WASAPI on Windows) for audio stream handling.

*   **ARCHITECTURAL PATTERNS:**
    *   **Modular Monolith:** The codebase is structured to allow for clear separation of concerns within a single deployable unit. Components include:
        *   `AudioCapture`: Handles WASAPI or equivalent audio input.
        *   `TranscriptionEngine`: Manages Vosk model loading and speech-to-text processing.
        *   `GUI`: Tkinter-based interface with always-on-top functionality.
        *   `ConfigManager`: Handles application settings and persistence.
    *   **SOLID Principles:** Applied rigorously to ensure code quality, maintainability, and extensibility.
    *   **DRY Principle:** Emphasized to reduce redundancy and improve code reuse.

*   **VERIFICATION COMMANDS:**
    *   **Run Tests:** `pytest`
    *   **Lint Code:** `ruff check .`
    *   **Format Code:** `ruff format .`
    *   **Install Dependencies:** `uv pip install -r requirements.txt`
    *   **Run Application:** `python main.py`

*   **FUTURE CONSIDERATIONS:**
    *   **Performance Optimization:** Continuous monitoring and optimization of audio processing and transcription throughput.
    *   **Model Management:** Streamlined downloading and updating of Vosk models.
    *   **Cross-Platform Support:** Refactoring audio capture and GUI elements for broader compatibility if required.

</details>
