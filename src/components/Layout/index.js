import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      {children}
    </>
  )
}
