export default function Button({ label }) {
  return (
    <>
      <button
        type="button"
        className=" w-full text-white bg-gray-800 hover:bg-gray-900 py-2 rounded-lg font-medium"
      >
        {label}
      </button>
    </>
  );
}
