import { lazy, Suspense } from 'react';

const LazyImage = lazy(() => import('@/components/LazyImage'));

interface PlaceholderPageProps {
  title: string;
  content: string;
  image: string;
}

const PlaceholderPage = ({ title, content, image }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="mb-8">
          <Suspense 
            fallback={
              <div className="w-full h-64 bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <LazyImage 
              src={image} 
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          </Suspense>
          <p className="text-gray-300 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;