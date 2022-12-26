export const getUserDetailAction = () => {
  return {
    type: "GET_USER",
  };
};

export const setUserDetailAuction =(user) => {
    return{
        type:"SET_USER",
        user:user,
    }
}
