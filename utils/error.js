const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.response && err.response.data && err.response.data.error
    ? err.response.data.error
    : err.message;
export { getError };
