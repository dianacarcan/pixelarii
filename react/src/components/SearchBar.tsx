import {Container, TextField} from '@mui/material'
import { useState } from 'react'

const [Search, setSearch] = useState<string | null>(null)

export function SearchBar() {
  
  return (
    <Container>
      <TextField 
        value={Search || ''} 
        onChange={(e) => setSearch(e.target.value)} 
      />
    </Container>
  )
}