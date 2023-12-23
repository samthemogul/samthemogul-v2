import '@styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Socials from '@components/Socials';


export const metadata  = {
    title : "Sam Themogul",
    description : "Portfolio"
}

const Rootlayout = ({ children }) => {
    return (
      <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={metadata.description} />
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/favicon_profile.ico" />
                <title>{metadata.title}</title>
            </head>
          <body>
              <div className="main">
                  <div className="gradient" />
              </div>
              <main className="app">
                  <Nav/>
                  <Socials/>
                  {children}
                  <Footer/> 
              </main>
          </body>
      </html>
    )
  }
  

export default Rootlayout;