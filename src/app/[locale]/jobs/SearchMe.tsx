// import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
  initialValue?: string;
}

const SearchBarMe = ({ onSearch, initialValue = "" }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer)
  }, [searchTerm, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search for jobs (e.g., Java, JavaScript, Full Stack)"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBarMe;