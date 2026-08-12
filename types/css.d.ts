import 'react'

/* Several converted pages set CSS custom properties inline
   (e.g. style={{ '--btn-hover': '#C94700' }}), which React supports
   but the default CSSProperties type does not describe. */
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
