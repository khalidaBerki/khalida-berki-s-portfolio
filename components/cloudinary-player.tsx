"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

interface CloudinaryPlayerProps {
  cloudName: string
  publicId: string
  title?: string
  description?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (
        element: HTMLVideoElement,
        options: Record<string, unknown>
      ) => { dispose: () => void }
    }
  }
  // eslint-disable-next-line no-var
  var cloudinary: Window["cloudinary"]
}

export function CloudinaryPlayer({
  cloudName,
  publicId,
  title,
  description,
  className,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
}: Readonly<CloudinaryPlayerProps>) {
  // React owns the container div — Cloudinary owns everything inside
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<ReturnType<typeof globalThis.cloudinary.videoPlayer> | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(
    () => globalThis.cloudinary !== undefined
  )

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || playerRef.current) return
    if (!globalThis.cloudinary) return

    const container = containerRef.current

    const raf = requestAnimationFrame(() => {
      if (!container.isConnected || playerRef.current) return

      // Create the video element ourselves and append it to the container
      // so Cloudinary never moves a React-managed node
      const videoEl = document.createElement("video")
      videoEl.className = "cld-video-player w-full h-full"
      container.appendChild(videoEl)

      const player = globalThis.cloudinary.videoPlayer(videoEl, {
        cloudName,
        fontFace: "Inter",
        colors: {
          base: "#000000",
          text: "#FFFFFF",
          accent: "#0D9AFF",
        },
        logo: {
          logoImageUrl:
            "https://res.cloudinary.com/demos/image/upload/cloudinary_icon_white.png",
          logoOnclickUrl: "https://cloudinary.com/",
        },
        fill: true,
        controls,
        muted,
        autoplay: autoPlay,
        loop,
      })
      playerRef.current = player

      ;(
        player as unknown as {
          source: (
            id: string,
            opts?: { info?: { title?: string; description?: string } }
          ) => void
        }
      ).source(publicId, {
        info: {
          ...(title ? { title } : {}),
          ...(description ? { description } : {}),
        },
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      if (playerRef.current) {
        playerRef.current.dispose()
        playerRef.current = null
      }
      // Clear container so React finds it empty on next render
      container.innerHTML = ""
    }
  }, [scriptLoaded, cloudName, publicId, title, description, autoPlay, muted, loop, controls])

  return (
    <>
      <Script
        src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
      <div
        ref={containerRef}
        className={["w-full h-full", className].filter(Boolean).join(" ")}
      />
    </>
  )
}
