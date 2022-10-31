import React, { Fragment, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import Archie from '../models/Archie'
import Chair from '../models/Chair'
import Computer from '../models/Computer'
import DeskAndFloor from '../models/Deskandfloor'
import Ismael from '../models/Ismael'
import Printer from '../models/Printer'
import PrinterExtrusor from '../models/PrinterExtrusor'
import ProjectsBase from '../models/Projectsbase'
import Projects from '../models/Projectscarrusel'
import StaticObjects from '../models/Static'

export const App = () => {

  gsap.registerPlugin(ScrollTrigger)
  
  const targets = [
    [1.0, 0.8, -0.68], 
    [1.0, 1.0, 1.0],
    [1.92, 1, -0.67]
  ] 
  const positions = [
    [-0.5, 1.5, -2.75],
    [0.2, 1.4, 0.45], 
    [1.0, 1.3, -0.95], 
    [0.8, 1.3, 0.22],
    [1.4, 0.9, -0.67],
    [0.0, 8.0, 2.0]
  ]
  const projectsRotation = [
    [-Math.PI, 0, -Math.PI],
    [-Math.PI, Math.PI * 0.5, -Math.PI],
    [-Math.PI, Math.PI , -Math.PI],
    [-Math.PI, Math.PI * 1.5, -Math.PI]
  ]
  const linksGit = [
    ['https://github.com/imolina218/FrikiWiki.git'],
    ['https://github.com/imolina218/RecipesSearcher.git'],
    ['https://github.com/imolina218/TeasAndCups.git'],
    ['https://github.com/imolina218/Electrica_Citharae.git']
  ]
  const linksDeploy = [
    ['https://friki-wiki.vercel.app/'],
    ['https://recipes-searcher.vercel.app/'],
    ['https://teas-and-cups.vercel.app/'],
    ['https://cosmic-griffin-52857c.netlify.app/']
  ]

  const [position, setPosition] = useState(positions[0])
  const [target, setTarget] = useState(0)
  const [carouselSelect, setCarouselSelect] = useState(projectsRotation[0])
  const [rotationIndex, setRotationIndex] = useState(0)
  
  const handlePrev = () => {
    rotationIndex > 0 ? setRotationIndex(rotationIndex - 1) : setRotationIndex(3)
  }
  const handleNext = () => {
    rotationIndex < 3 ? setRotationIndex(rotationIndex + 1) : setRotationIndex(0) 
  }

  const UpdateObjects = () => {

    let container = [...document.querySelectorAll('.wrap')]
    let o = {a:0}

    setCarouselSelect(projectsRotation[rotationIndex])
  
    useFrame(({ camera }) => {

      gsap.to(o, {
        a:1,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          /* snap: 1/5, */
          onUpdate: (self) => {
            return(
              self.progress === 0 ? (setPosition(positions[0]), setTarget(0)) :
              self.progress <= 0.35 ? (setPosition(positions[1]), setTarget(0)) :
              self.progress <= 0.55 ? (setPosition(positions[2]), setTarget(1)) :
              self.progress <= 0.75 ? (setPosition(positions[3]), setTarget(0)) :
              self.progress <= 0.95 ? (setPosition(positions[4]), setTarget(2)) :
              self.progress >= 1 ? (setPosition(positions[5]), setTarget(0)):
              null
            )
          }
        }
      })
      gsap.to(camera.position, {
        duration: 6,
        x: position[0],
        y: position[1],
        z: position[2]
      })
    })
  }

  return (
    <>
      <div className='scene'>
        <Canvas 
          /* shadows */
          dpr={[1, 2]}
          gl={{ toneMapping: THREE.NoToneMapping }}
          camera={{position: positions[0]}}
        >
          <OrbitControls 
            target={targets[target]} 
            enablePan={false} 
            enableRotate={false}
            enableZoom={false}
          />
          <UpdateObjects />
          <ambientLight intensity={0.5}/>
          <spotLight 
            /* castShadow */
            position={[10, 15, -5]} 
            angle={0.5} 
            intensity={1.2}
          />
          <Suspense fallback={null}>
            <DeskAndFloor />
            <Chair />
            <Computer />
            <Ismael />
            <StaticObjects />
            <Archie />
            <ProjectsBase/>
            <Projects customRotations={{ rotation: carouselSelect }} />
            <Printer/>
            <PrinterExtrusor/>
          </Suspense>
        </Canvas>
      </div>

      <main className='container'>

        <div className="wrap">
          <div className='overall'>
            <h1>Ismael Molina</h1>
            <div className='aptitudes'>
              <h2>Frontend Developer</h2>
              <h2>3D Artist</h2>
            </div>
          </div>

          <div className='aboutme'>
            <h3>About Me</h3>
            <p>Hi, I&apos;m Ismael</p>
            <p>
              I&apos;m a 21 year old 3D artist and a frontend developer currently living in Argentina. 
              My goal is to combine 3D technology with different web frameworks
              to give the user the best interactive experience that new technologies 
              can offer.
            </p>
            <p>Thanks for visiting!</p>
          </div>
          
          <div className='skills'>
            <h3>Skills</h3>
            <p>
              My skills are broad-spectrum given the fact that I been involved in the
              software usage and programming community since I was 15 years old.
              I&apos;m engaged in the constant persuit of knowledge to develop skills that can 
              help me become a profesional problem solver.
            </p>
            <div className='skillsList'>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>C</p>
              <p>Python</p>
              <p>MySQL</p>
              <p>PHP</p>
              <p>React.js</p>
              <p>Next.js</p>
              <p>Three.js</p>
              <p>R3F</p>
              <p>Blender</p>
              <p>Photoshop</p>
              <p>Premiere Pro</p>
              <p>Figma</p>
            </div>
          </div>
          
          <div className='experience'>
            <h3>Experience</h3>
            <p>
            I worked as a freelance 3D artist for over a year meeting and communicating
              with different clients from different parts of the world while I was
              studying software engineering and improving my programmer skills.
            </p>
          </div>
          
          <div className='projects'>
            <h3>Projects</h3>
            <div className='content'>
              <div className='goTo'>
                <a href={linksGit[rotationIndex]} target="_blank" rel="noopener noreferrer">Repository</a>
                <a href={linksDeploy[rotationIndex]} target="_blank" rel="noopener noreferrer">Website</a>
              </div>

              <div className='details'>
                <button onClick={handlePrev} >Prev</button>
                {
                  rotationIndex === 0 ?
                    <p>
                      Friki Wiki focus on a index of 4 wikis worth it for any kind of friki that 
                      wants to expand the knowledge that defines him/her as a friki. The website 
                      is programmed with Next.js using CSS modules with the goal of consulting 
                      different APIs.
                    </p>
                  : rotationIndex === 1 ?
                    <p>
                      Recipes Searcher is a single web application that will search different types 
                      of recipes by name, origin, category or ingredient. The website is programmed 
                      in React.js and react-bootstrap using context with the data provided from 
                      TheMealDB API.
                    </p>
                  : rotationIndex === 2 ?
                    <p>
                      Teas&Cups focus on inform the user about the world of teas and cups and improve
                      their tea experience. The website is programmed with Next.js using CSS modules.
                    </p>
                  : rotationIndex === 3 ?
                    <p>
                      Electrica Citharae is a single web application that gives a concise narrative 
                      about the two types of solid body electric guitars that defined decades of music 
                      history. The website is programmed with three.js and the 3D models were made in Blender.  
                    </p>
                  : null
                }
                <button onClick={handleNext}>Next</button>
              </div>
            </div>

          </div>
          
          <div className='contactme'>
            <h3>Contact me</h3>
            <ul>
              <li className='contactList'>
                <a href='https://github.com/imolina218' target="_blank" rel="noopener noreferrer">
                  <img src='/img/git.png' alt='GitHub' />
                </a>
                <a href='https://www.linkedin.com/in/molina-ismael-6a5677250/' target="_blank" rel="noopener noreferrer">
                  <img src='/img/linkedin.png' alt='LinkedIn' />
                </a>
                <a href='mailto:imolina218@gmail.com?subject=Job Opportunity&body=Hello!' target="_blank" rel="noopener noreferrer">
                  <img src='/img/email.png' alt='E-mail' />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  )
}