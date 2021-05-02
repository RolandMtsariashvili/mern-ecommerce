export default function generateErrorMessage(error) {
  return error.response && error.response.data
    ? error.response.data.message
    : error.message;
}
