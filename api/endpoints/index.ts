export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = process.env.NEXT_APP_BASE_URL;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const endpoints = {
  auth: {
    signup: "user/signup",
    profileUpdate: "user/profile/update",
    login: "login",
    me : "me"
  },
  cms: {
    about: "aboutpolicy/details"
  },
  agent: {
    list: "agent/list",
    details: (id: string | string[] | undefined) => `agent/${id}`
  },
  nextApi: {
    taskDetailsAll: "/api/taskalldetails"
  },
  chat: {
    chatList: "chat/list",
    details: (id: string) => `chat/${id}`,
    postMessage: (id: string) => `chat/${id}/message`,
    postFile: (id: string) => `chat/${id}/file`,
    newchat: "/chat"
  },
  model: {
    list: "v1/Model/list",
    details: (id: string) => `v1/Model/${id}`
  },
  accountModel: {
    list: "v1/AccountModel/list",
    details: (id: string) => `v1/AccountModel/${id}`
  },
  people: {
    list: "v1/AccountUser/list"
  }
};