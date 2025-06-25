import React from 'react'

export default  function Paragraph({paragraph, className}) {
  return (
    <>
    <p className={`${className}`}>{paragraph}</p>
    </>
  )
}