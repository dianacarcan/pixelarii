import { Link as RouterLink } from 'react-router-dom'
import { Link, Box, List, ListItem } from '@mui/material'

function Footer() {
  return (
    <Box component="footer">
      <Link component={RouterLink} to="/">Food Ninja</Link>

      <Box sx={{display: 'flex', gap: 5}}>
        <Link component={RouterLink} to="/">Blog</Link>
        <Link component={RouterLink} to="/about">About</Link>
        <Link component={RouterLink} to="/contact">Contact</Link>
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
