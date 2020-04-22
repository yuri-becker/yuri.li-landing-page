import React, {useEffect, useRef} from 'react'
import Rellax from 'rellax'

export const ParallaxImage: React.FC<{ className?: string, src: string, alt: string }> = ({className, src, alt}) => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    imgRef.current && new Rellax(imgRef.current, {center: true})
  }, [imgRef])

  return (
    <div className={`parallax-img-wrapper ${className ? className : ''}`}>
      <img ref={imgRef} src={src} alt={alt}/>
    </div>)
}
