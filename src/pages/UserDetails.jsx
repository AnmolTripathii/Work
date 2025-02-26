import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '../store/useStore';

const UserDetails = () => {
  const navigate = useNavigate();
  const { selectedUser } = useStore();

  if (!selectedUser) {
    navigate('/');
    return null;
  }

  const formattedAddress = `${selectedUser.address.suite} ${selectedUser.address.street}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`;

  return (
    <div className="max-w-2xl mx-auto bg-gray-900  p-6">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-400 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </button>
        <h2 className="text-2xl font-bold text-white">User Details</h2>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 space-y-4 shadow-lg">
        <div>
          <h3 className="text-sm font-medium text-gray-400">Name</h3>
          <p className="mt-1 text-lg text-gray-300">{selectedUser.name}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-400">Email</h3>
          <p className="mt-1 text-lg text-gray-300">{selectedUser.email}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-400">Address</h3>
          <p className="mt-1 text-lg text-gray-300">{formattedAddress}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-400">Company</h3>
          <p className="mt-1 text-lg text-gray-300">{selectedUser.company.name}</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/note')}
        className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};

export default UserDetails;
