import React from 'react'
import ContentLoader from 'react-content-loader'

export const MenuSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 289 370"
      backgroundColor="#ccc"
      foregroundColor="#A8A6A6FF"
    >
      <rect x="0" y="0" width="100%" height="215" />
      <rect x="0" y="231" width="100%" height="28" />
      <rect x="0" y="280" width="100%" height="44" />
      <rect x="0" y="340" width="100%" height="24" />
    </ContentLoader>
  )
}
