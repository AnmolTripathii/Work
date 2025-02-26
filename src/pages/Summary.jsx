import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, RefreshCw } from 'lucide-react';
import { useStore } from '../store/useStore';

const Summary = () => {
    const navigate = useNavigate();
    const { selectedUser, customNote, reset } = useStore();

    if (!selectedUser || !customNote) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                <p className="text-lg font-semibold text-gray-400">
                    No user data available. Please go back and enter the details.
                </p>
                <button
                    onClick={handleReset}
                    className="mt-6 w-full inline-flex items-center justify-center bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Start Over
                </button>
            </div>
        );
    }

    const handleReset = () => {
        reset();
        navigate('/');
    };

    const formattedAddress = `${selectedUser.address.suite} ${selectedUser.address.street}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`;

    return (
        <div className="max-w-2xl mx-auto bg-gray-900  p-6">
            <div className="flex items-center justify-center mb-8">
                <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white">Summary</h2>

                </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 space-y-6 shadow-lg">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">User Details</h3>
                    <div className="space-y-3">
                        <div>
                            <span className="text-sm font-medium text-gray-400">Name</span>
                            <p className="mt-1 text-gray-300">{selectedUser.name}</p>
                        </div>
                        <div>
                            <span className="text-sm font-medium text-gray-400">Email</span>
                            <p className="mt-1 text-gray-300">{selectedUser.email}</p>
                        </div>
                        <div>
                            <span className="text-sm font-medium text-gray-400">Address</span>
                            <p className="mt-1 text-gray-300">{formattedAddress}</p>
                        </div>
                        <div>
                            <span className="text-sm font-medium text-gray-400">Company</span>
                            <p className="mt-1 text-gray-300">{selectedUser.company.name}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Custom Note</h3>
                    <p className="text-gray-300 whitespace-pre-wrap">{customNote}</p>
                </div>
            </div>

            <button
                onClick={handleReset}
                className="mt-6 w-full inline-flex items-center justify-center bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
                <RefreshCw className="h-5 w-5 mr-2" />
                Start Over
            </button>
        </div>
    );
};

export default Summary;
