import dayjs from "dayjs";

/**
 * Check if the window object exists.
 * @returns A function that checks if the window is undefined.
 */
export function checkWindow() {
  return typeof window !== "undefined";
}

export function isInServer() {
  return typeof document === "undefined";
}

export function isApple() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const platformExpression = /Mac|iPhone|iPod|iPad/i;
  const agent = navigator.userAgent;
  return platformExpression.test(agent);
}

export function isAppleSafari() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const rejectedExpression = /Chrome|Android|CriOS|FxiOS|EdgiOS/i;
  const expectedExpression = /Safari/i;

  const agent = navigator.userAgent;
  if (rejectedExpression.test(agent)) {
    return false;
  }
  return isApple() && expectedExpression.test(agent);
}

export const truncateString = (str: string, length: number) => {
  if (str?.length) {
    if (str?.length < length) {
      return str;
    }

    return `${str.substring(0, length)}...`;
  }

  return str;
};

export const isWithin20Seconds = (date: string) => {
  const currentTime = dayjs();
  const lastMessageDate = dayjs.unix(date);
  return currentTime.diff(lastMessageDate, "second") < 20;
};
