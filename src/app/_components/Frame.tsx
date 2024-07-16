'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface FrameProps {
  title: string
  certificate: string
}

export function Frame({ title, certificate }: FrameProps) {
  const [frameIndex, setFrameIndex] = useState<number | null>(null)
  const frames = [
    '/frames/frame-01.png',
    '/frames/frame-02.png',
    '/frames/frame-03.png',
    '/frames/frame-04.png',
  ]

  useEffect(() => {
    setFrameIndex(generateRandomFrameIndex())
  }, [])

  function generateRandomFrameIndex() {
    return Math.floor(Math.random() * 4)
  }

  if (frameIndex === null) {
    return null
  }

  return (
    <div className="relative w-[200px] h-[158px] mb-9">
      <div className="absolute top-0 left-0 w-full h-[138px] flex justify-center items-center">
        <div className="relative w-[90%] h-[85%] z-20">
          <Image
            src={certificate}
            alt="Certificado"
            layout="fill"
            objectFit="cover"
            className="z-20"
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <Image
        src={frames[frameIndex]}
        alt="Moldura"
        width={200}
        height={138}
        className="absolute top-0 left-0 z-30"
        priority={true}
      />
      <div className="absolute -bottom-4 left-0 w-full text-center text-foreground p-1 z-40">
        <h3 className="text-sm font-bold truncate whitespace-nowrap">
          {title}
        </h3>
      </div>
    </div>
  )
}
