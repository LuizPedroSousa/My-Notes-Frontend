import githubApi from 'services/githubApi'

interface GetGithubUserProps {
  token: string
}

interface GithubUserData {
  id: number
  name: string
  // eslint-disable-next-line camelcase
  bio?: string
  email?: string
  avatar_url: string
}

async function getGithubUser({ token }: GetGithubUserProps) {
  try {
    const { data } = await githubApi.get<GithubUserData>('/user', {
      headers: { authorization: `Bearer ${token}` }
    })

    return {
      idGithub: data.id,
      name: data.name,
      avatar: data.avatar_url,
      bio: data?.bio,
      email: data?.email
    }
  } catch (error) {
    throw 'Failed to get github user'
  }
}

export { getGithubUser }
