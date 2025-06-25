import React from 'react'

export default  function SectionTitle({title, className}) {
  return (
    <>
    <h2 className={`section-title mb-2 ${className}`}>{title}</h2>
    </>
  )
}