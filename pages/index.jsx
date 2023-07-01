import React, { Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Head from 'next/head'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import * as THREE from 'three'
import { OrbitControls, Loader } from '@react-three/drei'
import Archie from '../components/models/Archie'
import Chair from '../components/models/Chair'
import Computer from '../components/models/Computer'
import DeskAndFloor from '../components/models/Deskandfloor'
import Ismael from '../components/models/Ismael'
import Printer from '../components/models/Printer'
import PrinterExtrusor from '../components/models/PrinterExtrusor'
import ProjectsBase from '../components/models/Projectsbase'
import Projects from '../components/models/Projectscarrusel'
import StaticObjects from '../components/models/Static'
import css from '../styles/Home.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

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
    [-Math.PI, Math.PI, -Math.PI],
    [-Math.PI, Math.PI * 1.28, -Math.PI],
    [-Math.PI, Math.PI * 1.57, -Math.PI],
    [-Math.PI, Math.PI * 1.86 , -Math.PI],
    [-Math.PI, Math.PI * 2.14, -Math.PI],
    [-Math.PI, Math.PI * 2.43, -Math.PI],
    [-Math.PI, Math.PI * 2.71, -Math.PI]
  ]
  const linksGit = [
    ['https://github.com/imolina218/Starter-r3f-Bliss'],
    ['https://github.com/imolina218/BeetleRose.git'],
    ['https://github.com/imolina218/Portfolio.git'],
    ['https://github.com/imolina218/Electrica_Citharae.git'],
    ['https://github.com/imolina218/FrikiWiki.git'],
    ['https://github.com/imolina218/RecipesSearcher.git'],
    ['https://github.com/imolina218/TeasAndCups.git'],
  ]
  const linksDeploy = [
    ['https://starter-r3f-bliss.vercel.app/'],
    ['https://beetle-rose.vercel.app/'],
    ['https://portfolio-git-main-imolina218.vercel.app/'],
    ['https://cosmic-griffin-52857c.netlify.app/'],
    ['https://friki-wiki.vercel.app/'],
    ['https://recipes-searcher.vercel.app/'],
    ['https://teas-and-cups.vercel.app/']
  ]

  const [position, setPosition] = useState(positions[0])
  const [target, setTarget] = useState(0)
  const [carouselSelect, setCarouselSelect] = useState(projectsRotation[0])
  const [rotationIndex, setRotationIndex] = useState(0)
  
  const handlePrev = () => {
    rotationIndex > 0 ? setRotationIndex(rotationIndex - 1) : setRotationIndex(6)
  }
  const handleNext = () => {
    rotationIndex < 6 ? setRotationIndex(rotationIndex + 1) : setRotationIndex(0) 
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
            {
              self.progress === 0 ? (setPosition(positions[0]), setTarget(0)) :
              self.progress <= 0.35 ? (setPosition(positions[1]), setTarget(0)) :
              self.progress <= 0.55 ? (setPosition(positions[2]), setTarget(1)) :
              self.progress <= 0.75 ? (setPosition(positions[3]), setTarget(0)) :
              self.progress <= 0.95 ? (setPosition(positions[4]), setTarget(2)) :
              self.progress >= 1 ? (setPosition(positions[5]), setTarget(0)):
              null
            }
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
      <Head>
        <title>Ismael Molina - Portfolio</title>
        <meta name="IsmaelMolina" content="portfolio"/>
      </Head>

      <div className={css.scene}>
        <Canvas 
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
        <Loader />
      </div>

      <main className={css.container}>

        <div className="wrap">
          <div className={css.overall}>
            <h1>Ismael Molina</h1>
            <div className={css.aptitudes}>
              <h2>Frontend Developer</h2>
              <h2>3D Artist</h2>
            </div>
          </div>

          <div className={css.aboutme}>
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
          
          <div className={css.skills}>
            <h3>Skills</h3>
            <p>
              My skills are broad-spectrum given the fact that I been involved in the
              software usage and programming community since I was 15 years old.
              I&apos;m engaged in the constant persuit of knowledge to develop skills that can 
              help me become a profesional problem solver.
            </p>
            <div className={css.skillsList}>
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
          
          <div className={css.experience}>
            <h3>Experience</h3>
            <p>
            I worked as a freelance 3D artist for over a year meeting and communicating
              with different clients from different parts of the world while I was
              studying software engineering and improving my programmer skills.
            </p>
          </div>
          
          <div className={css.projects}>
            <h3>Projects</h3>
            <div className={css.content}>
              <div className={css.goTo}>
                <a href={linksGit[rotationIndex]} target="_blank" rel="noopener noreferrer">Repository</a>
                <a href={linksDeploy[rotationIndex]} target="_blank" rel="noopener noreferrer">Website</a>
              </div>

              <div className={css.details}>
                <button onClick={handlePrev} >Prev</button>
                {
                  rotationIndex === 0 ?
                    <p>
                      BLISS is a website that presents a 3d experience of a fictional Intenet provider company,
                      with a polygon style, with baked simulations making it an experience. The Website is programmed with
                      React-Three-Fiber, Theatre.js, 3D models made in Blender and designed in Figma.
                    </p>
                  : rotationIndex === 1 ?
                    <p>
                      BeetleRose is an immersive presentation of a fictional perfume, that goes
                      through a minimal concept of the product. The Website is programmed with
                      React-Three-Fiber, 3D models made in Blender and designed in Figma.  
                    </p>
                  : rotationIndex === 2 ?
                    <p>
                      This is my portfolio where you can find information about me, my skills, my projects
                      and how to contact me. The website is programmed in React.js with Next.js,
                      React-Three-Fiber and Blender for the 3D models. 
                    </p>
                  : rotationIndex === 3 ?
                    <p>
                      Electrica Citharae is a single web application that gives a concise narrative 
                      about the two types of solid-body electric guitars that defined decades of music 
                      history. The website is programmed with three.js and the 3D models were made in Blender.  
                    </p>
                  : rotationIndex === 4 ?
                    <p>
                      Friki Wiki focuses on an index of 4 wikis worth it for any kind of friki that 
                      wants to expand the knowledge that defines him/her as a friki. The website 
                      is programmed with Next.js using CSS modules to consult
                      different APIs. 
                    </p>
                  : rotationIndex === 5 ?
                    <p>
                      Recipes Searcher is a single web application that searches different types 
                      of recipes by name, origin, category or ingredient. The website is programmed 
                      in React.js and react-bootstrap using context with the data provided from 
                      TheMealDB API.
                    </p>
                  : rotationIndex === 6 ?
                    <p>
                      Teas&Cups focuses on informing the user about the world of teas and cups and improving
                      their tea experience. The website is programmed in React.js with Next.js using 
                      CSS modules.
                    </p>
                  : null
                }
                <button onClick={handleNext}>Next</button>
              </div>
            </div>

          </div>

          <div className={css.contactme}>
            <h3>Contact me</h3>
            <ul>
              <li className={css.contactList}>
                <a href='https://github.com/imolina218' target="_blank" rel="noopener noreferrer">
                  <img src='/img/git.png' alt='GitHub image' />
                </a>
                <a href='https://www.linkedin.com/in/ismael-molina/' target="_blank" rel="noopener noreferrer">
                  <img src='/img/linkedin.png' alt='LinkedIng image' />
                </a>
                <a href='mailto:imolina218@gmail.com?subject=Job Opportunity&body=Hello!' target="_blank" rel="noopener noreferrer">
                  <img src='/img/email.png' alt='E-mail image' />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  )
}
