import {Stack, Chip} from '@mui/material'
interface CategoryPillProps {
    label: string;
    selected: boolean;
    onClick: () => void;
}

export default function CategoryPill({ 
    label,
    selected, 
    onClick 
}: CategoryPillProps) {
    return (
        <Stack direction="row" spacing={2}>
            <Chip key={label} label={label} onClick={onClick} /><Chip
      label={label}
      onClick={onClick}
      color={selected ? "primary" : "default"}
      variant={selected ? "filled" : "outlined"}
    />
        </Stack>
    );
}