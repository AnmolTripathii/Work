import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '../store/useStore';

const CustomNote = () => {
  const navigate = useNavigate();
  const { selectedUser, setCustomNote, customNote } = useStore();
  const [note, setNote] = useState(customNote);

  if (!selectedUser) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomNote(note);
    navigate('/summary');
  };

  return (
    <div className="max-w-2xl mx-auto text-white">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(`/user/${selectedUser.id}`)}
          className="inline-flex items-center text-gray-400 hover:text-gray-200"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </button>
        <h2 className="text-2xl font-bold">Add a Note</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="note" className="block text-sm font-medium text-gray-300 mb-2">
            Custom Note
          </label>
          <textarea
            id="note"
            rows={4}
            className="block w-full rounded-lg p-2 bg-gray-800 border border-gray-600 text-white shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
            placeholder="Enter your note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Finish
        </button>
      </form>
    </div>
  );
};

export default CustomNote;
