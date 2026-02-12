import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, confg) {
  const response = await fetch(url, confg);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, faild to send request.",
    );
  }

  return resData;
}

export default function useHttp(url, confg, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialValue);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsFetching(true);
      try {
        const resData = await sendHttpRequest(url, { ...confg, body: data });
        setData(resData);
      } catch (err) {
        setError({ error: err.message || "Faild to fetch!" });
      } finally {
        setIsFetching(false);
      }
    },
    [url, confg],
  );

  useEffect(() => {
    if ((confg && (confg.method === "GET" || !confg.method)) || !confg) {
      sendRequest();
    }
  }, [sendRequest, confg]);

  return {
    data,
    isFetching,
    error,
    sendRequest,
    clearData,
  };
}
