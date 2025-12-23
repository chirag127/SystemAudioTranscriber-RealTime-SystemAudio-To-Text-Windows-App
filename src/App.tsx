import { useState } from 'react'

function App() {
  const [apiKey, setApiKey] = useState('')
  const [transcription, setTranscription] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">System Audio Transcriber</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="flex items-center">
            <label htmlFor="api-key" className="mr-4">API Key:</label>
            <input
              id="api-key"
              type="password"
              className="bg-gray-700 text-white rounded-lg px-4 py-2 w-full"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Transcription</h2>
          <div className="bg-gray-700 rounded-lg p-4 h-64 overflow-y-auto">
            <p>{transcription}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className={`px-6 py-3 rounded-lg font-semibold ${isRecording ? 'bg-red-600' : 'bg-blue-600'}`}
            onClick={() => setIsRecording(!isRecording)}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
