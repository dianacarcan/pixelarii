import { TextField } from "@mui/material";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export default function SearchBar({
  query,
  setQuery,
}: SearchBarProps) {
  return (
    <TextField
      fullWidth
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search articles..."
    />
  );
}