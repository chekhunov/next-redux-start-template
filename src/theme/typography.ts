import type { TypographyOptions } from '@mui/material/styles/createTypography'

export const fonts = {
  inter: 'Inter',
  libreBaskerville: 'Libre Baskerville',
  caveat: 'Caveat'
}

const typography: TypographyOptions = {
  fontFamily: fonts.inter,

  h1: {
    fontFamily: fonts.libreBaskerville,
    fontSize: 48,
    lineHeight: '60px'
  },
  h2: {
    fontFamily: fonts.libreBaskerville,
    fontSize: 36,
    lineHeight: '45px'
  },
  h3: {
    fontFamily: fonts.libreBaskerville,
    fontSize: 24,
    lineHeight: '32px'
  },
  h4: {
    fontFamily: fonts.libreBaskerville,
    fontSize: 22,
    lineHeight: '27px'
  },
  h5: {
    fontFamily: fonts.libreBaskerville,
    fontSize: 18,
    lineHeight: '24px'
  },
  h6: {
    fontFamily: fonts.libreBaskerville,
    fontSize: 16,
    lineHeight: '20px'
  },
  body1: {
    fontSize: 18,
    lineHeight: '28px'
  },
  body2: {
    fontSize: 16,
    lineHeight: '24px'
  },
  subtitle1: {
    fontSize: 14,
    lineHeight: '18px'
  },
  subtitle2: {
    fontSize: 12,
    lineHeight: '15px'
  }
}

export default typography
