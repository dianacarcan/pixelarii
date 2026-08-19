import {Stack, Chip} from '@mui/material'
import {Label} from "./articles.ts";

export const CategoryPill = () => {
    return (
        <Stack direction="row" spacing={2}>
            {Label.map((label, index) => (
                <Chip key={index} label={label} />
            ))}
        </Stack>
    );
}