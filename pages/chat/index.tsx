import { GetAccountModelList, GetModelList, IGetModelList } from "@/api/functions/model.api";
import ChatModule from "@/components/chatModule/ChatModule";
import { IAccountModelList } from "@/interface/modeapi.interface";
import WebWrapper from "@/layout/WebWrapper/WebWrapper";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await GetModelList()
  const accountModel = await GetAccountModelList()

  // console.log('===============', res?.data)

  return { props: { details: res?.data, accountModel: accountModel?.data } };
};

interface IChat {
  details: IGetModelList
  accountModel: IAccountModelList
}

const Index = ({ details, accountModel }: IChat) => {


  console.log(accountModel, 'accountModel')

  return (
    <>
      <NextSeo title='Chat' />
      <WebWrapper>
        <ChatModule details={accountModel} />
      </WebWrapper>
    </>

  );
};

export default Index;
