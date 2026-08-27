import NextLink from "next/link"
import { Link, Box } from '@mui/material'

function Navbar() {
  return (
    <Box component="nav" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Link component={NextLink} href="/">Food Ninja</Link>
      <Box component="div" sx={{display: 'flex', gap: 5}}>
        <Link component={NextLink} href="/">Blog</Link>
        <Link component={NextLink} href="/about">About</Link>
        <Link component={NextLink} href="/contact">Contact</Link>
      </Box>
    </Box>
  )
}

export default Navbar
