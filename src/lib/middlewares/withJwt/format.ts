interface CheckFormattingProps {
  authorization: string | undefined
}

interface CheckFormattingResolveProps {
  token: string
}

interface GetTokenPartsResolveProps {
  parts: string[]
  scheme: string
  token: string
}

const getTokenParts = (authorization: string): GetTokenPartsResolveProps => {
  const parts = authorization.split(' ')
  const [scheme, token] = parts

  return { parts, scheme, token }
}

const checkFormatting = ({
  authorization
}: CheckFormattingProps): CheckFormattingResolveProps => {
  const { parts, scheme, token } = getTokenParts(authorization)

  if (!/^Bearer$/i.test(scheme) || !authorization || parts.length !== 2) {
    throw 'Unauthorized'
  }

  return { token }
}

export { checkFormatting }
