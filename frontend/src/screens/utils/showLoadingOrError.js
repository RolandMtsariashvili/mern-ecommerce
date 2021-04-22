export default function ShowLoadingOrMessage(
  loading,
  error,
  loadingComponent,
  errorComponent,
) {
  if (loading) return loadingComponent;
  if (error) return errorComponent;
}
