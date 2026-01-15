'use client';

import { useState } from 'react';

export default function RSVPTestPage() {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const testRSVPSystem = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      // Test the Google Sheets RSVP endpoint
      const response = await fetch('/api/rsvp-sheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          city: 'Test City',
          phone: '555-0123',
          eventTitle: 'Test Event'
        })
      });

      const result = await response.json();
      setTestResult({
        success: response.ok,
        status: response.status,
        data: result
      });

    } catch (error) {
      setTestResult({
        success: false,
        status: 'Error',
        data: { message: error.message }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testFetchSubmissions = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      const response = await fetch('/api/rsvp-list-sheets');
      const result = await response.json();
      
      setTestResult({
        success: response.ok,
        status: response.status,
        data: result
      });

    } catch (error) {
      setTestResult({
        success: false,
        status: 'Error',
        data: { message: error.message }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">RSVP System Test</h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Test Submission</h2>
              <p className="text-gray-600">Test if RSVP submissions work with Google Sheets</p>
              <button
                onClick={testRSVPSystem}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
              >
                {isLoading ? 'Testing...' : 'Test RSVP Submission'}
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Test Fetch</h2>
              <p className="text-gray-600">Test if submissions can be retrieved</p>
              <button
                onClick={testFetchSubmissions}
                disabled={isLoading}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
              >
                {isLoading ? 'Testing...' : 'Test Fetch Submissions'}
              </button>
            </div>
          </div>

          {testResult && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Test Result:</h3>
              <div className={`p-4 rounded-lg ${testResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center mb-2">
                  <span className={`w-3 h-3 rounded-full mr-2 ${testResult.success ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="font-medium">Status: {testResult.status}</span>
                </div>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                  {JSON.stringify(testResult.data, null, 2)}
                </pre>
              </div>
            </div>
          )}

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Google Sheets Setup Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-yellow-700">
              <li>Go to <a href="https://script.google.com" className="underline">script.google.com</a> and create a new project</li>
              <li>Copy the Google Apps Script code from the project files</li>
              <li>Deploy as Web App with execute permissions for "Anyone"</li>
              <li>Copy the Web App URL to GOOGLE_SHEETS_URL environment variable</li>
              <li>Create a Google Sheet and get its CSV export URL for GOOGLE_SHEETS_CSV_URL</li>
              <li>Add both environment variables to your deployment</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}