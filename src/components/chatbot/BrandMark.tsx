'use client';

import React from 'react';

/** The ContexQ "Q" (the site favicon), used for the launcher, header and answer avatar. */
export const BRAND_MARK_SRC = '/assets/icons/favicon.png';

export const BrandMark: React.FC<{ size?: number }> = ({ size = 22 }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={BRAND_MARK_SRC} alt="" width={size} height={size} decoding="async" draggable={false} />
);
