'use client';

import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    season: string;
    certifications: string[];
    exportMarkets: string[];
    minOrder: string;
    imageColor: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={`${product.imageColor} rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="text-right">
            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
            <span className="text-sm text-gray-600 block mt-1">{product.category}</span>
          </div>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-2xl"
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
        
        <p className="text-gray-600 mb-4 text-right">{product.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-green-700">{product.price}</span>
            <span className="text-sm text-gray-500">📅 {product.season}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {product.certifications.map((cert, index) => (
              <span key={index} className="bg-white text-blue-600 text-xs px-3 py-1 rounded-full border">
                {cert}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-right">
              <div className="text-gray-500">الأسواق:</div>
              <div className="font-medium truncate">{product.exportMarkets.join('، ')}</div>
            </div>
            <div>
              <div className="text-gray-500">الحد الأدنى:</div>
              <div className="font-medium">{product.minOrder}</div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            عرض التفاصيل
          </button>
          <button className="flex-1 border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50 transition">
            إضافة للسلة
          </button>
        </div>
      </div>
    </div>
  );
}