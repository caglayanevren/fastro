import React, { useState, useCallback } from 'react'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
    img: ImageMetadata
    inView: boolean
    index: number
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
    const { img, inView } = props
    const [hasLoaded, setHasLoaded] = useState(false)

    const setLoaded = useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])

    return (
        <div className="embla__slide">
            <div
                className={'embla__lazy-load'.concat(
                    hasLoaded ? ' embla__lazy-load--has-loaded' : ''
                )}
            >
                {!hasLoaded && <span className="embla__lazy-load__spinner" />}
                <img
                    className="embla__slide__img embla__lazy-load__img my-0"
                    onLoad={setLoaded}
                    src={inView ? img.src : PLACEHOLDER_SRC}
                    alt={`${props.index}`}
                    data-src={img.src}
                    width={img.width}
                    height={img.height}
                />
            </div>
        </div>
    )
}
