import React from 'react'
import Image from 'next/image'

export default function Patrocat ({ width = 300, height = 300, isSad }) {
  return (
    <>
      {isSad
        ? <Image src='/patronage-cat-error.svg' alt='Patrocat error' width={width} height={height} />
        : <Image src='/patronage-cat.svg' alt='Patrocat' width={width} height={height} />}
    </>
  )
};
