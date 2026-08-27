import NextLink from "next/link"
import { Link, Box, List, ListItem } from '@mui/material'

function Footer() {
  return (
    <Box component="footer">
      <Link component={NextLink} href="/">Food Ninja</Link>

      <Box sx={{display: 'flex', gap: 5}}>
        <Link component={NextLink} href="/">Blog</Link>
        <Link component={NextLink} href="/about">About</Link>
        <Link component={NextLink} href="/contact">Contact</Link>
      </Box>

      <Box>
        <span>Other ways to reach me:</span>
        <List sx={{listStyle: 'none',p: 0,m: 0,}}>
          <ListItem>Email: hello@foodninja.com</ListItem>
          <ListItem>Twitter: @foodninja</ListItem>
          <ListItem>Instagram: @foodninja.eats</ListItem>
        </List>
      </Box>

      <Box>
        <span>© 2026 Food Ninja</span>
      </Box>
    </Box>
  );
}

export default Footer;