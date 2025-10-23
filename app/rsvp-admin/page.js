'use client';

import { useState, useEffect } from 'react';

export default function RSVPAdmin() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/rsvp-list');
      const data = await response.json();
      
      if (data.success) {
        setSubmissions(data.submissions);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch RSVP submissions');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (submissions.length === 0) return;

    const headers = ['Name', 'Email', 'City', 'Phone', 'Event', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        `"${sub.name}"`,
        `"${sub.email}"`,
        `"${sub.city}"`,
        `"${sub.phone}"`,
        `"${sub.eventTitle}"`,
        `"${sub.formattedDate}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `rsvp-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading RSVP submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RSVP Submissions</h1>
                <p className="text-gray-600">The Glow Edit Open House - November 8, 2025</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={fetchSubmissions}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Refresh
                </button>
                {submissions.length > 0 && (
                  <button
                    onClick={exportToCSV}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Export CSV
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {submissions.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No RSVP submissions yet</h3>
                <p className="text-gray-600">RSVP submissions will appear here when guests register for the event.</p>
              </div>
            ) : (
              <div>
                <div className="mb-4 text-sm text-gray-600">
                  Total submissions: <span className="font-semibold text-gray-900">{submissions.length}</span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Guest Information
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact Details
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Submitted
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {submissions.map((submission, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{submission.name}</div>
                              <div className="text-sm text-gray-500">{submission.city}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm text-gray-900">{submission.email}</div>
                              <div className="text-sm text-gray-500">{submission.phone}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {submission.formattedDate || new Date(submission.submittedAt).toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a
                              href={`mailto:${submission.email}?subject=The Glow Edit Open House - RSVP Confirmation&body=Hi ${submission.name},%0D%0A%0D%0AThank you for RSVPing to The Glow Edit Open House!%0D%0A%0D%0AEvent Details:%0D%0ADate: November 8, 2025%0D%0ATime: 1-5 PM%0D%0ALocation: Rhij Aesthetics, Cedar Rapids, IA%0D%0A%0D%0AWe can't wait to see you there!%0D%0A%0D%0ABest regards,%0D%0ARhij Aesthetics`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Send Confirmation
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}