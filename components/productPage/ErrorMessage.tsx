import { useRouter } from 'next/navigation';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-100 rounded-lg max-w-md mx-auto my-10">
      <p className="text-red-700 font-semibold mb-4 text-center">{message}</p>
      <button
        onClick={() => router.push('/shop')}
        className="px-6 py-2 bg-shop_light_green hover:bg-shop_dark_green rounded text-white font-semibold transition"
      >
        Back to Shop
      </button>
    </div>
  );
};

export default ErrorMessage;
