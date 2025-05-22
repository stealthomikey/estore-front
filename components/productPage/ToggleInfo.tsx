import React, { useState } from 'react';
import StarRating from './StarRating'; // Adjust path as needed

interface ToggleInfoProps {
  description: string;
  additionalInfo: Record<string, string> | undefined;
  rating?: number;
}

const ToggleInfo: React.FC<ToggleInfoProps> = ({
  description,
  additionalInfo,
  rating = 0,
}) => {
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'reviews'>('description');

  return (
    <div className="mt-10 w-full max-w-4xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex gap-4 border-b border-gray-300 mb-4">
        <button
          className={`pb-2 ${activeTab === 'description' ? 'border-b-2 border-green-600 font-semibold' : 'text-gray-600'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`pb-2 ${activeTab === 'additional' ? 'border-b-2 border-green-600 font-semibold' : 'text-gray-600'}`}
          onClick={() => setActiveTab('additional')}
        >
          Additional Info
        </button>
        <button
          className={`pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-green-600 font-semibold' : 'text-gray-600'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'description' && (
          <p className="text-gray-700 whitespace-pre-line">{description}</p>
        )}

        {activeTab === 'additional' && additionalInfo && Object.keys(additionalInfo).length > 0 && (
          <ul className="list-disc list-inside space-y-1">
            {Object.entries(additionalInfo).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'reviews' && (
          <StarRating rating={rating} />
        )}
      </div>
    </div>
  );
};

export default ToggleInfo;
