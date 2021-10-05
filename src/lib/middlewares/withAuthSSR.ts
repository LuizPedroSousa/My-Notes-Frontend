import Cookies from 'js-cookie'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'

function withAuthSSR<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = ctx.req.cookies
    if (!cookies.access_token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    try {
      return await fn(ctx)
    } catch (err) {
      if (err) {
        Cookies.remove('access_token')
        return {
          redirect: {
            destination: '/login',
            permanent: false
          }
        }
      }
    }
  }
}

export { withAuthSSR }
