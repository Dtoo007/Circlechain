
import './App.css'
import logo from './assets/logo.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import discord from './assets/discord.svg'
import telegram from './assets/telegram.svg'
import desktopHeroImage from './assets/desktopHeroImage.svg'
import sectionImage from './assets/sectionImage.svg'



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

function App() {
  return (
    <div>
    <Nav navs={navs}/>
    <Hero heroContent={heroContent}/>
    <Article articles={articles}/>
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
    <article>
      <>
      <div className='article-head text-secondary text-4xl'>
      <h2><span>Global </span>Decentralize currency based on blockchain technology</h2>
      <p>Web3 is the latest efficient technology</p>
      </div>
      <div className='article-main'>
      <div className='article-image'><img src={sectionImage} alt='web3 image' ></img></div>
      <div className='article-body'>
      {articles.map(article=>(
            <div key={article.id} className='article-text'>
              <h3>{article.head}</h3>
              <p>{article.body}</p>
            </div>
          ))}
      </div>
      </div>
      </>
    </article>
  )
}

export default App
