import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const SkeletonLoader = () => {
  // Set a placeholder array for the skeleton loader (e.g., 4 products)
  const placeholderItems = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {placeholderItems.map((_, index) => (
        <Card key={index} className="max-w-sm animate-pulse">
          {/* Image skeleton */}
          
          <CardHeader>
          <div
            className="w-full h-48 bg-gray-300 rounded-md"
            aria-hidden="true"
          ></div>
            {/* Title skeleton */}
            <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4" aria-hidden="true"></div>

            {/* Description skeleton */}
            <div className="mt-2 h-4 bg-gray-300 rounded-md w-full" aria-hidden="true"></div>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Category skeleton */}
            <div className="h-4 bg-gray-300 rounded-md w-1/2" aria-hidden="true"></div>

            {/* Tags skeleton */}
            <div>
              <div className="h-4 bg-gray-300 rounded-md w-1/4" aria-hidden="true"></div>
              <div className="flex space-x-2 mt-1">
                <div className="h-4 bg-gray-300 rounded-md w-12" aria-hidden="true"></div>
                <div className="h-4 bg-gray-300 rounded-md w-12" aria-hidden="true"></div>
                <div className="h-4 bg-gray-300 rounded-md w-12" aria-hidden="true"></div>
              </div>
            </div>

            {/* Variants skeleton */}
            <div>
              <div className="h-4 bg-gray-300 rounded-md w-1/4" aria-hidden="true"></div>
              <div className="flex space-x-2 mt-1">
                <div className="h-4 bg-gray-300 rounded-md w-16" aria-hidden="true"></div>
                <div className="h-4 bg-gray-300 rounded-md w-16" aria-hidden="true"></div>
              </div>
            </div>

            {/* Price skeleton */}
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-300 rounded-md w-20" aria-hidden="true"></div>
              <div className="h-6 bg-gray-300 rounded-md w-12" aria-hidden="true"></div>
            </div>

            {/* Inventory skeleton */}
            <div className="h-4 bg-gray-300 rounded-md w-32" aria-hidden="true"></div>
          </CardContent>
          <CardFooter className="flex justify-end">
            {/* Button skeleton */}
            <div className="h-10 bg-gray-300 rounded-md w-24" aria-hidden="true"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SkeletonLoader;
