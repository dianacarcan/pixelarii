import {Stack, Chip} from '@mui/material'
import {Label} from "./articles.ts";

interface CategoryPillProps {
    activeLabel?: string
    onSelect?: (label: string) => void
}

export const CategoryPill = ({ activeLabel, onSelect }: CategoryPillProps) => {
    return (
        <Stack direction="row" spacing={2}>
            {Label.map((label, index) => (
                <Chip
                    key={index}
                    label={label}
                    color={activeLabel === label ? 'primary' : 'default'}
                    variant={activeLabel === label ? 'filled' : 'outlined'}
                    onClick={onSelect ? () => onSelect(label) : undefined}
                    clickable={!!onSelect}
                />
            ))}
        </Stack>
    );
}