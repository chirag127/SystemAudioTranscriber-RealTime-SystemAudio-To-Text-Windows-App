# SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App

![Build Status](https://img.shields.io/github/actions/workflow/user/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App/ci.yml?style=flat-square&logo=github) ![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App?style=flat-square&logo=codecov)
![Python Version](https://img.shields.io/badge/python-3.10%2B-blue?style=flat-square&logo=python) ![Vosk](https://img.shields.io/badge/vosk-offline--speech--recognition-brightgreen?style=flat-square&logo=vosk)
![License](https://img.shields.io/github/license/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App?style=flat-square&logo=github)
![GitHub Stars](https://img.shields.io/github/stars/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App?style=flat-square&logo=github)


**Live Transcription of Windows System Audio to Text.** This application captures real-time audio from your Windows system, processes it offline using Vosk models, and displays the transcription in a user-friendly, always-on-top GUI.

--- 

### Table of Contents

*   [About The Project](#about-the-project)
*   [Features](#features)
*   [Architecture](#architecture)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
*   [Usage](#usage)
*   [Development](#development)
    *   [Project Structure](#project-structure)
    *   [Running Tests](#running-tests)
*   [Contributing](#contributing)
*   [License](#license)
*   [Contact](#contact)

--- 

## About The Project

`SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App` is designed to provide seamless, real-time audio transcription directly from your Windows operating system. It prioritizes user privacy by leveraging offline Vosk speech recognition models, eliminating the need for an internet connection for transcription services. The application features a non-intrusive, always-on-top graphical user interface (GUI) for immediate access to your transcribed text.

--- 

## Features

*   **Real-Time System Audio Capture:** Captures audio output directly from Windows system streams using WASAPI.
*   **Offline Vosk Transcription:** Utilizes powerful, privacy-focused Vosk models for accurate speech-to-text conversion without an internet connection.
*   **Always-On-Top GUI:** A convenient floating window ensures your transcription is always visible.
*   **Modular Design:** Built with Python, allowing for extensibility and maintainability.
*   **User-Friendly Interface:** Simple and intuitive Tkinter-based GUI.

--- 

## Architecture

mermaid
graph TD
    A[Windows System Audio (WASAPI)] --> B(Audio Capture Module)
    B --> C{Audio Processing & Buffering}
    C --> D(Vosk Speech Recognition Offline Models)
    D --> E[Text Transcription Output]
    E --> F(Tkinter GUI - Always-On-Top)
    F --> G(User Interface Display)


--- 

## Getting Started

### Prerequisites

*   Python 3.10 or higher
*   `pip` (Python package installer)
*   Windows Operating System

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App.git
    cd SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App
    

2.  **Set up a virtual environment (Recommended):**
    bash
    python -m venv venv
    # On Windows:
    .\venv\Scripts\activate
    

3.  **Install dependencies using uv:**
    bash
    uv pip install -r requirements.txt
    
    *(Note: `requirements.txt` will be generated or managed by `uv`'s lock files.)*

4.  **Download Vosk models:**
    Refer to the [Vosk-API documentation](https://alphacephei.com/vosk/models) for instructions on downloading models suitable for your language. Place the downloaded model directory in a location accessible by the application (e.g., a `models` subdirectory).

--- 

## Usage

1.  **Ensure Vosk models are downloaded and configured.**
2.  **Run the application from your activated virtual environment:**
    bash
    python src/main.py --model_path /path/to/your/vosk/model
    
    *(Replace `/path/to/your/vosk/model` with the actual path to your downloaded Vosk model.)*

3.  The always-on-top transcription window will appear, and system audio will begin to be transcribed.

--- 

## Development

### Project Structure


.github/
├── ISSUE_TEMPLATE/
│   └── bug_report.md
├── PULL_REQUEST_TEMPLATE.md
├── ci.yml
├── CONTRIBUTING.md
├── SECURITY.md
└── AGENTS.md

boyut/
└── __init__.py

models/
└── <vosk_model_directory>/

src/
├── __init__.py
├── audio_capture.py
├── gui.py
├── main.py
├── transcription.py
└── utils.py

.gitignore
.gitattributes
LICENSE
README.md
badges.yml
requirements.txt
setup.cfg


### Running Tests

This project uses `Pytest` for testing.

1.  **Run all tests:**
    bash
    pytest
    

2.  **Generate coverage report:**
    bash
    pytest --cov=src
    

--- 

## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

--- 

## License

This project is licensed under the CC BY-NC 4.0 License - see the [LICENSE](LICENSE) file for details.

--- 

## Contact

Chirag Jain - chirag127@users.noreply.github.com

Project Link: [https://github.com/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App](https://github.com/chirag127/SystemAudioTranscriber-RealTime-SystemAudio-To-Text-Windows-App)
