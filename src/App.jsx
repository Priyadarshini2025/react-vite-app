import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt="Hero"
          />
          <img src={reactLogo} className="framework" alt="React Logo" />
          <img src={viteLogo} className="vite" alt="Vite Logo" />
        </div>

        <div>
          <h1>React CI/CD Pipeline Successfully Deployed 🚀</h1>

          <p>
            This React application has been automatically built, containerized,
            pushed to Amazon ECR, and deployed to Amazon EKS using a Jenkins
            CI/CD Pipeline.
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Project Technologies</h2>

          <ul>
            <li>⚛️ React + Vite</li>
            <li>🐳 Docker</li>
            <li>☁️ Amazon ECR</li>
            <li>☸️ Amazon EKS</li>
            <li>🔧 Jenkins CI/CD</li>
            <li>🚀 Kubernetes Deployment</li>
          </ul>
        </div>

        <div id="social">
          <h2>Deployment Status</h2>

          <ul>
            <li>✅ Source Code Pulled from GitHub</li>
            <li>✅ React Application Built</li>
            <li>✅ Docker Image Created</li>
            <li>✅ Docker Image Pushed to Amazon ECR</li>
            <li>✅ Application Deployed to Amazon EKS</li>
            <li>✅ Continuous Deployment Successful</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
