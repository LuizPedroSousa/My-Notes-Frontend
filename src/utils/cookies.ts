import { GetServerSidePropsContext } from 'next'

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

function deleteCookieSSR(name: string, ctx: GetServerSidePropsContext) {
  ctx.res.setHeader('Set-Cookie', [`${name}=deleted; Max-Age=0`])
}

export { deleteCookie, deleteCookieSSR }
