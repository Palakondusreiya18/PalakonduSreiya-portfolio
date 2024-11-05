import { Link, useLocation } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { MessageSquare, History, UserCircle, LogOut } from 'lucide-react';

export default function Sidebar() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const location = useLocation();

  const navigation = [
    { name: 'Chat', href: '/', icon: MessageSquare },
    { name: 'History', href: '/history', icon: History },
    { name: 'Account', href: '/account', icon: UserCircle },
  ];

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <img
          src={user?.imageUrl}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user?.fullName}
          </p>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg ${
                location.pathname === item.href
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 px-6 py-4 text-sm text-red-600 border-t hover:bg-red-50"
      >
        <LogOut className="w-5 h-5" />
        Sign out
      </button>
    </div>
  );
}