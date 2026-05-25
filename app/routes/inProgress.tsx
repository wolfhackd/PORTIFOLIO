

export function meta() {
    return [
      { title: "Mauro Leal" },
      { name: "description", content: "In Progress" },
    ];
  }


export default function InProgress() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">In Progress</h1>
            <p className="text-lg text-gray-600">This page is currently under construction. Please check back later!</p>
        </div>
        
    );
}