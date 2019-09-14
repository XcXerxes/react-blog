import styled from 'styled-components'

function getWidthString (span: string): string {
  if (!span) return ''
  let width = Number(span) / 12 * 100
  return `flex: 0 0 ${width}%`
}

const Col = styled.div`
  ${({ xs }: any) => (xs ? getWidthString(xs) : 'flex: 0 0 100%')};
  @media only screen and (min-width: 768px) {
    ${({ sm }: any) => sm && getWidthString(sm)};
  }
  @media only screen and (min-width: 992px) {
    ${({ md }: any) => md && getWidthString(md)};
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }: any) => lg && getWidthString(lg)};
  }
`
export default Col
