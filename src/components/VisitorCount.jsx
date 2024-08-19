import { useState, useEffect } from "react";

export default function VisitorCount() {
    const [viewerCount, setViewerCount] = useState(null);

    useEffect(() => {
        const fetchViewerCount = async () => {
          try {
            const response = await fetch('https://xxfjeq6l85.execute-api.us-west-1.amazonaws.com/visitor_count');
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setViewerCount(data.count);
          } catch (error) {
            console.error(error.message);
          }
        };

        fetchViewerCount();
      }, []);

    return (
        <div className="py-4 text-sm text-stone-500">{viewerCount} Unique Visitors</div>
    );
}