export default function Balance({ value }) {
  return (
    <div className="flex px-8">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="fontsemibold ml-4 text-lg">Rs {value}</div>
    </div>
  );
}
