import Wrapper from "@/layout/wrapper/Wrapper";
import styles from "@/styles/pages/home.module.scss";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NextPageContext } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export default function Home() {

  return (
    <Wrapper>
      <Box className={styles.home}>
        <Container fixed>
          <h1>Home page</h1>
        </Container>
      </Box>
    </Wrapper>
  );
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const Cookie = parseCookies(ctx)
  const dummyToken = Cookie.DummyToken
  if (dummyToken && typeof dummyToken === 'string') {
    setCookie(ctx, "ActualToken", dummyToken, {
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: true,
      priority: "high"
    })
  }

  destroyCookie(ctx, "DummyToken")

  return ({
    props: {}
  })
}