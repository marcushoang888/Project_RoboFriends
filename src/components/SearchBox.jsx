export default function SearchBox({ onSearchChange }) {
  return (
    <div className="p-2">
      <input
        onChange={onSearchChange}
        className="p-2 border-[1px] border-green-600 bg-blue-200 "
        type="search"
        placeholder="search robots"
      />
    </div>
  );
}
