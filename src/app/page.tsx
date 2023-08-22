import styles from './page.module.css'
import SideMenu from '@/components/Global/SideMenu/SideMenu'
import Main from '@/components/Main/Main'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <main style={{display: 'flex', border: '1px solid black', width: '100%', height: '100vh'}}>
          <SideMenu />
        <Box>
          <Main />
        </Box>
      </main>
    </main>
  )
}
