import {List, ListItem} from '@mui/material'
import {Label} from "./CategoryPill.tsx";

export const CategoryPill = () => {
    return (
        <List>
         {Label.map((label, index) => (
            <ListItem key={index}>{label}</ListItem>
         ))}
        </List>
    );
}