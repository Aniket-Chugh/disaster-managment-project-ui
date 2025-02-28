import React, { useState, useRef } from "react";
import Navbar from './Navbar'; // Adjust path if necessary

const DisasterManagement = () => {
  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);

  const handleSOS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const sosMessage = `SOS: Need help at (${latitude}, ${longitude})`;
          fetch("http://localhost:3002/send-sos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: sosMessage, latitude, longitude }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) alert("SOS sent successfully!");
              else alert("Failed to send SOS: " + data.message);
            })
            .catch((err) => {
              console.error("Error:", err);
              alert("Failed to send SOS. Try again later.");
            });
        },
        (error) => {
          alert("Error retrieving location. Enable location services.");
        }
      );
    } else alert("Geolocation is not supported by your browser.");
  };

  const startRecording = () => {
    setRecording(true);
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      let finalTranscript = "";

      recognition.onresult = (event) => {
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalTranscript += transcript;
          else interimTranscript += transcript;
        }
        setTranscription(finalTranscript + interimTranscript);
        setDescription(finalTranscript + interimTranscript);
      };

      recognition.start();
      recognition.onend = () => setRecording(false);
    } else alert("Browser does not support speech recognition.");
  };

  const stopRecording = () => setRecording(false);

  const capturePhoto = () => {
    if (cameraActive && videoRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
      setCameraActive(false);
    }
  };

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setCameraActive(true);
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing camera:", err));
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Use Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold text-orange-500">Immediate Action for Immediate Help</h1>
            <p>Stay informed. Stay safe. We’re here for you.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-8">
        {/* Voice Recorder Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-orange-500">Record Your Notes</h2>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={startRecording}
              className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
              disabled={recording}
            >
              {recording ? "Recording..." : "Start Recording"}
            </button>
            <button
              onClick={stopRecording}
              className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
              disabled={!recording}
            >
              Stop Recording
            </button>
          </div>
          <p className="mt-4">{transcription || "Your voice input will appear here..."}</p>
        </section>

        {/* Report Disaster Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-orange-500">Report Disaster</h2>
          <form>
            <textarea
              className="w-full p-4 mt-4 bg-gray-700 rounded-lg"
              rows="4"
              placeholder="Describe the disaster..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <button className="mt-4 bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600">
              Submit Report
            </button>
          </form>
        </section>

        {/* Camera Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-orange-500">Capture Photo</h2>
          <div className="mt-4">
            {cameraActive ? (
              <div>
                <video ref={videoRef} autoPlay className="w-full max-w-lg mx-auto" />
                <button
                  onClick={capturePhoto}
                  className="mt-4 bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  Capture Photo
                </button>
              </div>
            ) : (
              <button
                onClick={startCamera}
                className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Activate Camera
              </button>
            )}
          </div>
          {photo && (
            <div className="mt-4">
              <img src={photo} alt="Captured" className="w-full max-w-lg mx-auto" />
            </div>
          )}
        </section>

        {/* SOS Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-orange-500">Emergency Assistance</h2>
          <button
            onClick={handleSOS}
            className="mt-4 bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            Send SOS
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2025 Disaster Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DisasterManagement;
