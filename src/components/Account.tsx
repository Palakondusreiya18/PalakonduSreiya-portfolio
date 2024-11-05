import { useUser } from '@clerk/clerk-react';
import { User, Mail, Calendar } from 'lucide-react';

export default function Account() {
  const { user } = useUser();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-4">
            <img
              src={user?.imageUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-2xl font-bold">{user?.fullName}</h1>
              <p className="text-blue-100">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{user?.fullName}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Joined</p>
                <p className="font-medium">
                  {new Date(user?.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <button
              onClick={() => user?.update({})}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}