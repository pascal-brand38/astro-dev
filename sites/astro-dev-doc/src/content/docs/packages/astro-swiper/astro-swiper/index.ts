// Copyright (c) Pascal Brand
// MIT License

import type { SwiperOptions } from 'swiper/types'

import type { HTMLAttributes } from 'astro/types'

export interface AstroSwiperType extends HTMLAttributes<"div"> {
  options?: SwiperOptions,
}
