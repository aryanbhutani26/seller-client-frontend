import { Construction } from 'lucide-react';

export default function UnderDevelopmentCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mt-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <Construction className="h-16 w-16 text-gray-400" />
        <h2 className="text-xl font-semibold text-gray-700">Page Under Development</h2>
        <p className="text-gray-500 max-w-md">
          We're working hard to bring you this feature. Please check back later!
        </p>
        <div className="mt-4 w-full max-w-xs bg-gray-100 rounded-full h-4">
          <div className="bg-blue-500 h-4 rounded-full w-3/4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 