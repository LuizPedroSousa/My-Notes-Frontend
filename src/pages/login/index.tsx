import React, { Component } from 'react'
import { DefaultLayout } from 'components/layouts/DefaultLayout'
import Seo from 'components/Seo'
import { RiLockPasswordFill } from 'react-icons/ri'
import { InputIcon } from 'components/Inputs/InputIcon'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

import styles from 'styles/pages/login.module.css'
import { NoteIcon } from 'components/AnimatedSvgs/NoteIcon'

export default class Login extends Component {
  render(): JSX.Element {
    return (
      <DefaultLayout>
        <Seo
          title="Login"
          description="Faça login e comece a anotar"
          thumb=""
        />
        <main>
          <div className={styles.container}>
            <section className={styles.loginSection}>
              <h2>
                <span>
                  <NoteIcon />
                </span>
                Login
              </h2>
              <p>
                Transforme suas ideias em realidade <br />
                entre agora para criar novas notas.
              </p>
              <div className={styles.loginFormCard}>
                <form>
                  <InputIcon
                    icon={<AiOutlineMail />}
                    inputProps={{
                      type: 'email',
                      placeholder: 'Email',
                      id: 'email'
                    }}
                  />
                  <InputIcon
                    icon={<RiLockPasswordFill />}
                    isPasswordType
                    inputProps={{
                      placeholder: 'Senha',
                      name: 'password',
                      id: 'password'
                    }}
                  />
                  <button
                    type="submit"
                    name="Entrar"
                    aria-label="Entrar em sua conta"
                  >
                    Entrar
                  </button>
                </form>
                <div className={styles.registerOptionsFormCard}>
                  <strong>Não tem conta ainda?</strong>
                  <Link href="/register" passHref>
                    <a>Registre-se</a>
                  </Link>
                </div>
                <div className={styles.formLoginDivider}>
                  <span></span>
                  <strong>Ou</strong>
                  <span></span>
                </div>

                <div className={styles.formLoginWithGithub}>
                  <p>Entre com</p>
                  <Link href="/login/github" passHref>
                    <a>
                      Github{' '}
                      <span>
                        <AiFillGithub />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
            <section className={styles.heroSection}></section>
          </div>
        </main>
      </DefaultLayout>
    )
  }
}
