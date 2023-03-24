import type { Components } from '@mui/material'

import palette from './palette'

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden',
        webkitOverflowScrolling: ' touch'
      },

      // '#__next': {
      //   '@media (min-resolution: 2dppx) and (min-width: 900px)': {
      //     width: '110%',
      //     transform: 'scale(0.9) translateY(-6%)',
      //     marginBottom: '-16%',
      //     transformOrigin: 'left'
      //   }
      // },

      main: {
        flex: 1
      },

      '&::-webkit-scrollbar': {
        width: 5
      },
      '&::-webkit-scrollbar-track': {
        // boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        background: 'background.default'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#D0D4E7',
        borderRadius: '5px'
      }
    }
  },

  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: 16,
        padding: '13px 12px',
        lineHeight: 1.25,
        fontWeight: 600,
        textTransform: 'none',
        borderColor: (palette.stroke as any)?.main,
        borderRadius: 8,
        boxShadow: 'none',
        color: palette.text?.primary,

        '&:hover': {
          boxShadow: 'none',
          borderColor: (palette.stroke as any)?.main,
          backgroundColor: (palette.background as any)?.blueWhite
        },

        '&:disabled': {
          color: (palette.stroke as any)?.main
        }
      },

      containedPrimary: {
        color: palette.background?.default,

        '&:hover': {
          backgroundColor: (palette.background as any)?.blueDark
        },

        '&:disabled': {
          color: palette.background?.default,
          backgroundColor: (palette.stroke as any)?.main
        }
      },

      outlinedPrimary: {
        color: (palette.primary as any)?.main,

        '&:hover': {
          borderColor: (palette.stroke as any)?.main
        },

        '&:disabled': {
          borderColor: (palette.stroke as any)?.main
        }
      }
    }
  },

  MuiLink: {
    defaultProps: {
      color: 'text.primary'
    },
    styleOverrides: {
      root: {
        textDecoration: 'none'
      }
    }
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontSize: 15,
        color: palette.text?.secondary,
        backgroundColor: palette.background?.default,
        borderRadius: 8,

        '& .Mui-disabled+.MuiOutlinedInput-notchedOutline': {
          borderColor: (palette.stroke as any)?.main
        },

        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: (palette.stroke as any)?.dark
          }
        }
      },

      sizeSmall: {
        height: 46
      },

      input: {
        '&::placeholder': {
          opacity: 0.8
        }
      },

      notchedOutline: {
        borderColor: (palette.stroke as any)?.main
      }
    }
  },

  MuiInputLabel: {
    styleOverrides: {
      sizeSmall: {
        transform: 'translate(14px, 12px) scale(1)'
      },

      shrink: {
        fontSize: 12,
        transform: 'translate(14px, -10px) scale(1)'
      }
    }
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: 15,
        color: palette.text?.headline,
        fontWeight: 400,

        '&.Mui-focused': {
          color: palette.text?.headline,

          '&.Mui-error': {
            color: (palette.third as any)?.dark
          }
        }
      }
    }
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: 14
      }
    }
  },

  MuiPopover: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      paper: {
        marginTop: 5,
        borderRadius: '8px',
        boxShadow: '0px 4px 15px rgba(153, 153, 153, 0.25)'
      }
    }
  },

  MuiRadio: {
    styleOverrides: {
      root: {
        color: (palette.stroke as any)?.main
      }
    }
  },

  MuiRating: {
    styleOverrides: {
      iconFilled: {
        color: (palette.secondary as any).main
      }
    }
  },

  MuiPagination: {
    styleOverrides: {
      ul: {
        '& .MuiButtonBase-root': {
          fontSize: '16px'
        },
        '& .MuiPaginationItem-root': {
          color: palette.text?.stroke
        },
        '& .MuiPaginationItem-root.Mui-selected': {
          color: (palette.primary as any).main,
          backgroundColor: palette.background?.default
        },
        '& .MuiSvgIcon-root': {
          minWidth: '30px',
          minHeight: '30px',
          padding: '4px',
          margin: '0 5px',
          color: (palette.primary as any).main,
          border: '1px solid',
          borderColor: (palette.stroke as any).main,
          borderRadius: '50%'
        }
      }
    }
  },

  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 50,
        height: 28,
        borderRadius: '20px',
        padding: 0
      },
      switchBase: {
        padding: 0,
        '&.Mui-checked': {
          transform: 'translateX(22px)'
        },
        '&.Mui-checked+.MuiSwitch-track': {
          backgroundColor: 'primary.main',
          opacity: 1
        }
      },
      thumb: {
        boxSizing: 'border-box',
        width: 24,
        height: 24,
        margin: '2px',
        color: (palette.background as any).default
      },
      track: {
        backgroundColor: (palette.stroke as any).main,
        opacity: 1
      }
    }
  }
}

export default components
