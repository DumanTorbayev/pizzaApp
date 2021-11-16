import React from 'react'
import ContentLoader from 'react-content-loader'

export const MenuSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={289}
      height={400}
      viewBox="0 0 289 460"
      backgroundColor="#ccc"
      foregroundColor="#A8A6A6FF"
    >
      <rect x="12" y="0" width="100%" height="215" />
      <rect x="12" y="231" width="100%" height="28" />
      <rect x="12" y="280" width="100%" height="44" />
      <rect x="12" y="340" width="100%" height="24" />
    </ContentLoader>
  )
}
