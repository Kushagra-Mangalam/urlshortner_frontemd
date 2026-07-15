import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

interface URLResponse {
  id: number;
  original_url: string;
  short_code: string;
  created_at: string;
}

function App() {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [shortenedUrl, setShortenedUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl) return;

    setIsLoading(true);
    setError('');
    setShortenedUrl('');
    setCopied(false);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post<URLResponse>(`${backendUrl}/shorten`, {
        original_url: originalUrl
      });

      const generatedCode = response.data.short_code;
      setShortenedUrl(`${backendUrl}/${generatedCode}`);
      setOriginalUrl('');
    } catch (err) {
      console.error(err);
      setError('Failed to shorten the url. please check if the server is running or not');
    } finally {
      setIsLoading(false);
    }

  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>SnapURL</h1>
        <p>Shorten your link instantly</p>
      </header>

      <main className="app-main">
        <form onSubmit={handleSubmit} className="shortner-form">
          <input
            type="url"
            placeholder="Paste your long url here"
            value={originalUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOriginalUrl(e.target.value)}
            required
            className="url-input"
          />
          <button type="submit" disabled={isLoading} className="submit-btn">
            {isLoading ? 'Shortening...' : 'Shorten'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {shortenedUrl && (
          <div className="result-container">
            <p className="result-title">Your short link is ready:</p>
            <div className="result-box">
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="short-link">
                {shortenedUrl}
              </a>
              <button onClick={handleCopy} className={`copy-btn ${copied ? 'copied' : ''}`}>
                {copied ? (
                  <>
                    <svg className="copy-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="copy-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App;