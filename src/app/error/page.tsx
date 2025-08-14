export default async function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">500 - Internal Server Error</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! Something went wrong on our end. Please try again later.
        </p>
      </div>
    </div>
  );
}
