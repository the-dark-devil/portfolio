import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Military Discipline',
    category: 'military',
    image: 'https://res.cloudinary.com/dbrwyyagv/image/upload/v1770489561/SAVE_20250608_180529_cempdi.jpg',
    description: 'Cultivating discipline and commitment'
  },
  {
    id: 2,
    title: 'Tech Innovation',
    category: 'tech',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Building robust digital solutions'
  },
  {
    id: 3,
    title: 'Strategic Planning',
    category: 'military',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Planning and execution excellence'
  },
  {
    id: 4,
    title: 'Code Development',
    category: 'tech',
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    description: 'Clean code, great results'
  },
  {
    id: 5,
    title: 'Team Leadership',
    category: 'military',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Leading with integrity'
  },
  {
    id: 6,
    title: 'System Design',
    category: 'tech',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Architecting scalable systems'
  },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'military' | 'tech'>('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section
      id="gallery"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Portfolio Gallery
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-navy-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 animate-slide-up">
          {(['all', 'military', 'tech'] as const).map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-navy-600 dark:bg-emerald-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-navy-600 dark:hover:border-emerald-500'
              }`}
            >
              {category === 'all' ? 'All' : category === 'military' ? 'Military' : 'Tech'}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                onClick={() => setSelectedImage(item.id)}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full animate-scale-in"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white dark:bg-slate-800 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <X size={24} className="text-slate-900 dark:text-white" />
              </button>
              <img
                src={galleryItems.find(item => item.id === selectedImage)?.image}
                alt="Selected"
                className="w-full rounded-xl"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <p className="text-slate-400 mt-2">
                  {galleryItems.find(item => item.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
