import { setAccessToken } from "@/api/enToken";
import { tokenCheck } from "@/api/functions/user.api";
import { checkWindow } from "@/lib/functions/_helpers.lib";
import { checkLoggedInServer } from "@/reduxtoolkit/slices/userSlice";
import { store } from "@/reduxtoolkit/store/store";
import "@/styles/calender.scss";
import "@/styles/global.scss";
import { userData } from "@/types/common.type";
import ToastifyProvider from "@/ui/toastify/ToastifyProvider";
import { NextPageContext } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { destroyCookie, parseCookies } from "nookies";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const MuiTheme = dynamic(() => import("@/themes/index"), { ssr: true });

/**
 * It suppresses the useLayoutEffect warning when running in SSR mode
 */
function fixSSRLayout() {
  // suppress useLayoutEffect (and its warnings) when not running in a browser
  // hence when running in SSR mode
  if (!checkWindow()) {
    React.useLayoutEffect = () => {
      // console.log("layout effect")
    };
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      // refetchOnMount: false,
      // staleTime: Infinity,
      // cacheTime: Infinity,
    },
  },
});

interface CustomAppProps extends AppProps {
  user: userData | null;
  hasToken?: boolean;
  token: string
}

export default function CustomApp({
  Component,
  pageProps,
  hasToken,
  user,
  token
}: CustomAppProps) {
  fixSSRLayout();

  store.dispatch(checkLoggedInServer({ pageProps }));
  if (!hasToken) {
    destroyCookie(undefined, "AccessToken")
  }
  setAccessToken(pageProps.token)
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ToastifyProvider>
            <MuiTheme>
              <Component {...pageProps} />
            </MuiTheme>
          </ToastifyProvider>
        </Hydrate>

        {/* {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )} */}
      </QueryClientProvider>
    </Provider>
  );
}

/* Getting the current user from the server and passing it to the client. */
export const getServerSideProps = async (context: NextPageContext) => {
  // // const client = initializeApollo({ headers: context.ctx.req?.headers });
  // const { data } = await client.query({
  //   query: CURRENT_USER_QUERY,
  // });
  // // resetServerContext();
  // return { user: data?.authenticatedItem, ...appProps };
  const cookies = parseCookies(context);
  let hasToken = false;
  let user = null;
  let token = null

  if (cookies?.ActualToken?.length) {
    try {
      const data = await queryClient.fetchQuery('loginCheckServer', () => tokenCheck(cookies.ActualToken))
      hasToken = true
      token = cookies.ActualToken
      user = data
    } catch (error) {
      destroyCookie(null, "AccessToken", undefined)
      destroyCookie(null, "ActualToken", undefined)
    }
  }

  return ({
    props: {
      hasToken,
      user,
      token
    }
  })
};
