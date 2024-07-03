import { useState } from 'react'
import * as styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Calendar from '@/assets/calendar.svg'

function TODO() {
  TODO2()
}
function TODO2() {
  throw new Error()
}


export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    TODO()
  }
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>
  // }
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>
  // }
  return (
    <div data-testid={'App.DataTestId'}>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100}  height={100} src={avatarPng} alt='photo' />
        <img width={100}  height={100} src={avatarJpg} alt='photo' />
      </div>
      <div>
        <Calendar fill={'red'} height={100} width={100}/>
      </div>
      <Link to={'/about'}>About</Link>
      <Link to={'/shop'}>Shop</Link>
      <h1 className={styles.value}>{count}</h1>
      <button className={styles.button} onClick={increment}>inc</button>
      <About />
    </div>
  )
}

