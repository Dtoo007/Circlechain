import React from 'react';
import './App.css'
import logo from './assets/logo.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import discord from './assets/discord.svg'
import telegram from './assets/telegram.svg'
import desktopHeroImage from './assets/desktopHeroImage.svg'
import sectionImage from './assets/sectionImage.svg'
import btcicon from './assets/btcicon.svg'
import ethicon from './assets/ethicon.svg'
import bnbicon from './assets/bnbicon.svg'
import tethericon from './assets/tethericon.svg'
import arrow from './assets/arrow.svg'
import tetherchart from './assets/tetherchart.svg'
import bnbchart from './assets/tetherchart.svg'
import btcchart from './assets/tetherchart.svg'
import ethchart from './assets/tetherchart.svg'
import { useState } from 'react';



const navs = [
  {
    id: 7477474,
    how: 'How it works',
    blog: 'Blog',
    support: 'Support'
  }
]

const heroContent = [
  {
    id: 74474,
    head: 'Save, Buy and Sell Your blockchain asset',
    body: 'The easy to manage and trade your cryptocurrency asset',
  }
]

const articles = [
  {head: 'Access Token Market', body: 'Buy and sell token anytime and anywhere', id: 222},
  {head: 'User Friendly Interface ', body: 'Easy to navigate', id: 223},
  {head: 'Ownership Token control', body: 'Be in control and own as many asset as possible', id: 224},
]

const initialCards = [
  {coinIcon: btcicon, coinAbbr: 'BTC', coinName: 'BITCOIN', Price: '$56,623.54', pricePercent: '1.41%', chart: btcchart, arrow: arrow, id: 222},
  {coinIcon: ethicon, coinAbbr: 'ETH', coinName: 'ETHEREUM', Price: '$4,267.90', pricePercent: '2.22%', chart: ethchart, arrow: arrow, id: 252},
  {coinIcon: bnbicon, coinAbbr: 'BNB', coinName: 'BINANCE', Price: '$587.74', pricePercent: '0.82%', chart: bnbchart, arrow: arrow, id: 22},
  {coinIcon: tethericon, coinAbbr: 'USDT', coinName: 'TETHER', Price: '$0.9998', pricePercent: '0.03%', chart: tetherchart, arrow: arrow, id: 22432},
]

function App() {
  const [cards] = useState(
    Array.from({ length: 16 }, (_, i) => initialCards[i % initialCards.length])
  );

  return (
    <div>
    <Nav navs={navs}/>
    <Hero heroContent={heroContent}/>
    <Article articles={articles}/>
    <Card cards={cards}/>
    <Form/> 
    <Footer navs={navs}/>
    </div>
  )
}

function Nav ({navs}) {
  return (
    <nav>
      <div className='nav'>
        <div className='nav-links'>
          <img src={logo} alt='circlechain white logo'></img>
          <div className='links'>
            {navs.map(nav=>(
              <ul key={nav.id}>
                <li><a href='#how'>{nav.how}</a></li>
                <li><a href='#blog'>{nav.blog}</a></li>
                <li><a href='#how'>{nav.support}</a></li>
              </ul>
            ))}
          </div>
        </div>
        <div className='social-icon'>
        <img src={facebook} alt='facebook logo' className='social-link'></img>
        <img src={instagram} alt='instagram logo'></img>
        <img src={linkedin} alt='linkedin logo'></img>
        <img src={discord} alt='discord logo'></img>
        <img src={telegram} alt='telegram logo'></img>
        </div>
      </div>
    </nav>
  )
}


// Hero section

function Hero ({heroContent}) {
  return (
    <div className='container'>
      <header>
        <div className='hero-body'>
          <div className='hero-content'>
            {heroContent.map(heros=>(
              <div key={heros.id} className='hero-text'>
                <h1>{heros.head}</h1>
                <p>{heros.body}</p>
              </div>
            ))}
            <div className='hero-button'>
              <Button className='primary-button'>Connect wallet</Button>
              <Button className='secondary-button'>Start trading</Button>
            </div>
          </div>
          <div>
          <img src={desktopHeroImage} alt='desktop view port hero section image'></img>
          </div>
        </div>
      </header>
    </div>
  )
}


function Button ({children, className}) {
  return (
    <>
    <button className={`${className}`}>{children}</button>
    </>
  )
}


function Article ({articles}) {
  return (
    <article className='container'>
      <div className='article-head'>
        <h2><span>Global </span>Decentralize currency based on blockchain technology</h2>
        <p>Web3 is the latest efficient technology</p>
      </div>
      <div className='article-main'>
        <div className='article-image'>
          <img src={sectionImage} alt='web3 image' ></img>
          </div>
        <div className='article-body'>
          {articles.map(article=>(
          <div key={article.id} className='article-text'>
              <h3>{article.head}</h3>
              <p>{article.body}</p>
          </div>
              ))}
        </div>
      </div>
    </article>
  )
}



function Card({ cards }) {
  return (
    <div className='container'>
      <div className='card-container'>
        {cards.map(card => (
        <div key={card.id} className='card-body'>
          <div className='coin-detail'>
            <div className='coin-text'>
              <img src={card.coinIcon} alt={`${card.coinAbbr} icon`}/>
              <div className='coin-name'>
                <h1 className="coin-abbr text-xl font-bold">{card.coinAbbr}</h1>
                <span><p className="coin-name text-gray-600">{card.coinName}</p></span>
              </div>
              </div>
            <img src={arrow} alt="arrow icon"/>
          </div>
          <div className='price-body'>
            <div className='price'>
              <h1>{card.Price}</h1>
              <span><p>{card.pricePercent}</p></span>
            </div>
            <img src={card.chart} alt={`${card.coinAbbr} chart`}/>
          </div>
        </div>
           ))}
      </div>
    </div>
  );
}


function Form () {
  return(
    <div className='container'>
      <form>
        <div className='form-body'>
          <h2>Want to be aware of all update</h2>
          <div className='form'>
            <input type='email' className='form-input'></input>
            <button className='primary-button'>Subscribe</button>
          </div>
        </div>
      </form>
    </div>

  )
}

function Footer ({navs}) {
  return(
    <footer>
      <div className='footer-body'>
        <div className='footer-content'>
          <div><img src={logo} alt='circlechain white logo'></img></div>
          <p>Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.</p>
        </div>
      
        <div className='quick-link'>
          <h2>Quick Link</h2>
            {navs.map(nav=>(
              <ul key={nav.id}>
                <li><a href='#how'>{nav.how}</a></li>
                <li><a href='#blog'>{nav.blog}</a></li>
                <li><a href='#how'>{nav.support}</a></li>
              </ul>
            ))}
        </div>

        <div className='footer-social-body'>
          <div className='footer-social'>
            <h2>Social Media</h2>
            <div className='footer-social-icon'>
              <img src={facebook} alt='facebook logo' className='social-link'></img>
              <img src={instagram} alt='instagram logo'></img>
              <img src={linkedin} alt='linkedin logo'></img>
              <img src={discord} alt='discord logo'></img>
              <img src={telegram} alt='telegram logo'></img>
            </div>
          </div>
          <div>
            <p>&copy; 2022 Circlechain</p>
          </div>
        </div>
      </div>
    </footer>
  )
}





export default App
