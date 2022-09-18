import React from "react"


import { useEthers} from '@usedapp/core'
import styles from './styles'
import { logo, kasha} from './assets'
import { Exchange, Loader, WalletButton } from "./components"

import { usePools } from './hooks'



const App = () => {

const { account } = useEthers();
const [loading, pools] = usePools();


  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img src={logo} alt="uniswap logo" className="w-16 h-16 object-contain" />
          <div className="flex relative">
            <img src={kasha} alt="kasha" className="w-[100px] h-[100px] hidden md:flex md:ml-[100px] top-3 relative z-10" />
            <div className="kasha_gradient z-1 w-[100px] absolute h-[100px] -right-0 " />
          </div>

          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>KashaSwap 2.0</h1>
          <p className={styles.subTitle}> Exchange tokens in seconds </p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>{account ? loading ? <Loader title="Loading pools, please wait !" /> : <Exchange pools={pools} /> : <Loader title="Please connect your wallet !" />}</div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;