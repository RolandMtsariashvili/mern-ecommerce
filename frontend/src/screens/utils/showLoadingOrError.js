export default function ShowLoadingOrMessage(
  loading,
  error,
  loadingComponent,
  errorComponent,
) {
  // console.log(loading, '---', error);
  if (loading) {
    // console.log('i xreturned loading');
    return loadingComponent;
  }
  if (error) {
    // console.log('i returned an error');
    return errorComponent;
  }
}
