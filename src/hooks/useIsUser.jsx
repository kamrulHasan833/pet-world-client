import useAuth from "./useAuth";

function useIsUser() {
  const { user } = useAuth();
  const isUser = Object.keys(user).length === 0 ? false : true;
  return isUser;
}
export default useIsUser;
