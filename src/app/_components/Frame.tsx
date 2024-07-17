'use client'

import { DialogTitle } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../components/ui/dialog'

interface FrameProps {
  title: string
  certificate: string
}

export function Frame({ title, certificate }: FrameProps) {
  const [frameIndex, setFrameIndex] = useState<number | null>(null)
  const frames = [
    '/frames/frame-02.png',
    '/frames/frame-03.png',
    '/frames/frame-04.png',
  ]

  useEffect(() => {
    setFrameIndex(generateRandomFrameIndex())
  }, [])

  function generateRandomFrameIndex() {
    return Math.floor(Math.random() * 3)
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
            priority
            fill
            className="z-20"
            sizes="(max-width: 200px)"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Image
            src={frames[frameIndex]}
            alt="Moldura"
            width={200}
            height={158}
            priority
            className="absolute top-0 left-0 z-30 cursor-pointer w-auto h-auto "
          />
        </DialogTrigger>
        <DialogContent aria-describedby={undefined} className="max-w-[60vw]">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <Image
            src={certificate}
            alt={title}
            quality={85}
            width={1280}
            height={720}
          />
        </DialogContent>
      </Dialog>
      <div className="absolute -bottom-4 left-0 w-full text-center text-foreground p-1 z-40">
        <h3 className="text-sm font-bold line-clamp-1">{title}</h3>
      </div>
    </div>
  )
}
