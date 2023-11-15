import useAxios from "./ApiServise";

// export const admins = ({ filterData, status }) => {
//   let queryArray = [];
//   if (filterData) {
//     queryArray.push(`search=${filterData}`);
//   }
//   if (status) {
//     queryArray.push(`status=${status}`);
//   }
//   queryArray = queryArray.join("&");

//   return useAxios.get(`/admins${queryArray === "" ? "" : `?${queryArray}`}`);
// };

export const userData = (id: string | null) => {
  return useAxios.get(`/user/${id}`);
};
export const signinUser = (body: object) => {
  return useAxios.post(`/signin`, body);
};
