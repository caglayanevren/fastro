import React, { useCallback, useEffect, useState } from "react";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { LazyLoadImage } from '~components/EmblaCarousel/LazyLoadImage'
import type { ImageMetadata } from "astro";
import "~/styles/embla.css";

type PropType = {
    slides: ImageMetadata[]
    options?: EmblaOptionsType
}

export const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [slidesInView, setSlidesInView] = useState<number[]>([])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
        setSlidesInView((slidesInView) => {
            if (slidesInView.length === emblaApi.slideNodes().length) {
                emblaApi.off('slidesInView', updateSlidesInView)
            }
            const inView = emblaApi
                .slidesInView()
                .filter((index) => !slidesInView.includes(index))
            return slidesInView.concat(inView)
        })
    }, []);

    useEffect(() => {
        if (!emblaApi) return

        updateSlidesInView(emblaApi)
        emblaApi.on('slidesInView', updateSlidesInView)
        emblaApi.on('reInit', updateSlidesInView)
    }, [emblaApi, updateSlidesInView])

    return (
        <section className="embla w-full my-4">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <LazyLoadImage
                            key={index}
                            index={index}
                            img={slide}
                            inView={slidesInView.indexOf(index) > -1}
                        />
                    ))}
                </div>
            </div>

            <div className="embla__buttons">
                <button className="embla__button embla__button--prev" onClick={scrollPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="20px" viewBox="0 0 64 20"><polygon points="9.1,0 10.6,1.5 3.4,9 64,9 64,11 3.4,11 10.7,18.5 9.1,20 0,10.7 0,9.3 " fill="#333" /></svg>
                </button>
                <button className="embla__button embla__button--next" onClick={scrollNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="20px" viewBox="0 0 64 20"><polygon points="64,9.3 64,10.7 54.9,20 53.3,18.5 60.6,11 0,11 0,9 60.6,9 53.4,1.5 54.9,0" fill="#333" /></svg>
                </button>
            </div>

            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
