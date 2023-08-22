import styles from './page.module.css'
import SideMenu from '@/components/Global/SideMenu/SideMenu'
import ContentContainer from '@/components/Global/ContentContainer/ContentContainer'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <main style={{display: 'flex', border: '1px solid black', width: '100%', height: '100vh'}}>
          <SideMenu />
        <Box>
          <ContentContainer />
        </Box>
      </main>
    </main>
  )
}
