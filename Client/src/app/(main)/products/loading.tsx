import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const SkeletonLoader = () => {
  return (
    <Card className="max-w-sm animate-pulse">
        <div className="w-full h-62 bg-green-300 rounded-md"></div>
      <CardHeader>
        {/* Image skeleton */}
        
        {/* Title skeleton */}
        <div className="mt-4 h-6 bg-red-300 rounded-md w-3/4"></div>
        
        {/* Description skeleton */}
        <div className="mt-2 h-4 bg-gray-300 rounded-md w-full"></div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Category skeleton */}
        <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
        
        {/* Tags skeleton */}
        <div>
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          <div className="flex space-x-2 mt-1">
            <div className="h-4 bg-gray-300 rounded-md w-12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-12"></div>
          </div>
        </div>

        {/* Variants skeleton */}
        <div>
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          <div className="flex space-x-2 mt-1">
            <div className="h-4 bg-gray-300 rounded-md w-16"></div>
            <div className="h-4 bg-gray-300 rounded-md w-16"></div>
          </div>
        </div>

        {/* Price skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-300 rounded-md w-20"></div>
          <div className="h-6 bg-gray-300 rounded-md w-12"></div>
        </div>

        {/* Inventory skeleton */}
        <div className="h-4 bg-gray-300 rounded-md w-32"></div>
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* Button skeleton */}
        <div className="h-10 bg-gray-300 rounded-md w-24"></div>
      </CardFooter>
    </Card>
  );
};

export default SkeletonLoader;


