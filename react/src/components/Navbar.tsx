import { Link as RouterLink } from 'react-router-dom'
import { Link, Box } from '@mui/material'

function Navbar() {
  return (
    <Box component="nav" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Link component={RouterLink} to="/">Food Ninja</Link>
      <Box component="div" sx={{display: 'flex', gap: 5}}>
        <Link component={RouterLink} to="/">Blog</Link>
        <Link component={RouterLink} to="/about">About</Link>
        <Link component={RouterLink} to="/contact">Contact</Link>
      </Box>
    </Box>
  )
}

export default Navbar
