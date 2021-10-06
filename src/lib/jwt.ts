import jwt, { Decoded } from 'jsonwebtoken'

interface CheckSignatureProps {
  token: string
}

interface GenerateTokenProps {
  payload: any
  customExpires?: number | string
}

interface CheckSignatureResolveProps<T> {
  decoded: Decoded<T>
}

const getRSAKey = (key: 'public' | 'private'): string => {
  const formatRsaKey = (keyToFormat: string | undefined) => {
    return JSON.parse(JSON.stringify(keyToFormat?.replace(/\\n/g, '\n')))
  }

  const keys = {
    private() {
      return formatRsaKey(process.env.PRIVATE_KEY)
    },
    public() {
      return formatRsaKey(process.env.PUBLIC_KEY)
    }
  }

  return keys[key]()
}

const generateJWT = ({ payload, customExpires }: GenerateTokenProps) => {
  return jwt.sign(payload, getRSAKey('private'), {
    expiresIn: customExpires || '1h',
    algorithm: 'RS256'
  })
}

const checkSignature = <T>({
  token
}: CheckSignatureProps): CheckSignatureResolveProps<T> => {
  const { decoded }: any = jwt.verify(
    token,
    getRSAKey('public'),
    (err: any, decoded: Decoded<T>) => {
      if (err) {
        throw 'Invalid token'
      }
      return { decoded }
    }
  )
  return { decoded }
}

export { checkSignature, generateJWT }
