
import Documentation from './Documentation'
import './App.css'

function App() {
 

  return (



    <main className="flex flex-col min-h-screen">
    <div className="w-full h-[50vh] bg-primary/10 backdrop-blur-sm">
    <iframe src="https://slides.com/michaelfei/attheviewbox-demo/embed"  className="w-full h-full border-0 webkitallowfullscreen mozallowfullscreen allowfullscreen" title="AtTheViewBox Demo" scrolling="no" ></iframe>
  
    </div>
    <div className="flex flex-grow">
 
      <Documentation />
    </div>
  </main>

  )
}

export default App
