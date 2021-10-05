import githubApi from 'services/githubApi'

interface CheckGithubTokenProps {
  token: string
}

const checkGithubToken = async ({
  token
}: CheckGithubTokenProps): Promise<void> => {
  try {
    await githubApi.post(
      `/applications/${process.env.GITHUB_CLIENT_ID}/token`,
      {
        access_token: token
      },
      {
        auth: {
          username: process.env.GITHUB_CLIENT_ID,
          password: process.env.GITHUB_CLIENT_SECRET
        }
      }
    )
  } catch (error) {
    throw 'Bad token request'
  }
}

export { checkGithubToken }
