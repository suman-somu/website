import Image from 'next/image'
import ProfilePicture from 'assets/images/krshkodes.png'
import Link from 'next/link'
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiBook,
} from 'react-icons/fi'
import { useSpring, animated } from 'react-spring'
import { useEffect, useRef, useState } from 'react'

function Hero() {
  const [xys, set] = useState([0, 0, 1])

  const props = useSpring({ xys, config: { mass: 1, tension: 280, friction: 120 } })

  const ref = useRef(null)

  const calc = (x: number, y: number, rect: any, onlyImg: Boolean) => [
    -(y - rect.top - rect.height / 2) / (onlyImg ? 4 : 20),
    (x - rect.left - rect.width / 2) / (onlyImg ? 4 : 20),
    onlyImg ? 1.05 : 1.01,
  ]

  const trans = (x: number, y: number, s: number | string) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  return (
    <header
      className={[
        /** Font & Text */
        `font-display text-gray-300`,
        /** Flex */
        `flex w-full items-center justify-evenly`,
        /** Spacing */
        `my-8 px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20`,
        /** Overflow */
        `relative overflow-hidden`,
      ].join(' ')}
      style={{ height: 'calc(100vh - 6rem)' }}
    >
      <div className="w-full">
        <div
          className={[
            `max-w-full md:max-w-max`,
            `relative`,
            `md:py-4 md:pr-2`,
            `visibility-assist`,
            `text-center md:text-left`,
          ].join(' ')}
        >
          <h1
            className={[
              /** Font & Text */
              `text-4xl xl:text-6xl font-black leading-[1.2em] max-w-4xl`,
              /** Spacing */
              `mb-6`,
              `block`,
            ].join(' ')}
          >
            Professionalism is a Passion.
          </h1>
          <p
            className={[
              /** Container */
              `lg:max-w-lg xl:max-w-4xl`,
              /** Spacing */
              `mb-6`,
              /** Font & Text */
              `md:text-lg`,
              `block mx-auto md:mx-0`,
            ].join(' ')}
          >
            Helping organisations build unforgettable seamless application. I
            focus on the frontend, and build exceptionally performant and
            accessible sites.
          </p>
          <Link href="mailto:hi@krshkodes.co">
            <div ref={ref}>
              <animated.div
                style={{ transform: props.xys.to(trans) }}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                  //@ts-ignore
                  const rect = ref.current.getBoundingClientRect()
                  set(calc(e.clientX, e.clientY, rect, false))
                }}
              >
                <a
                  className="flex items-center justify-center w-full mb-8 md:block"
                >
                  <button
                    className={[
                      `text-lg`,
                      `block w-max px-4 py-2`,
                      `bg-gray-900`,
                      /** Custom Classes */
                      'gradient-border',
                    ].join(' ')}
                  >
                    hi@krshkodes.co
                  </button>
                </a>
              </animated.div>
            </div>
          </Link>
          <div
            className={[
              `flex items-center`,
              `text-gray-200 text-xl lg:text-2xl`,
              `my-6 space-x-6`,
            ].join(' ')}
          >
            <Link href="https://twitter.com/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#1DA1F2] hover:rotate-12 transition-all"
              >
                <FiTwitter />
              </a>
            </Link>
            <Link href="https://github.com/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#fff] hover:rotate-12 transition-all"
              >
                <FiGithub />
              </a>
            </Link>
            <Link href="https://linkedin.com/in/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#0A66C2] hover:rotate-12 transition-all"
              >
                <FiLinkedin />
              </a>
            </Link>
            <Link href="https://instagram.com/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#C13584] hover:rotate-12 transition-all"
              >
                <FiInstagram />
              </a>
            </Link>
            <Link href="https://blog.krshkodes.co">
              <a
                target="_blank"
                className="hover:text-[#fff] hover:rotate-12 transition-all"
              >
                <FiBook />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={[
          `bg-gray-800 opacity-10 lg:opacity-30`,
          `p-4`,
          `rounded-lg`,
          `max-w-xs lg:max-w-sm xl:max-h-md`,
          `absolute -z-10 -right-20 -bottom-80 md:right-12 md:top-0 overflow-hidden`,
          `animate-none`,
        ].join(' ')}
        style={{
          animation: 'flying-pulse 8s linear infinite',
          transform: 'scale(70%)',
        }}
      >
        <Image src={ProfilePicture} layout="intrinsic"></Image>
      </div>
    </header>
  )
}

export default Hero
