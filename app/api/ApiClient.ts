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

export const usersData = ({ limit, id }: { limit?: number; id?: string }) => {
  let queryArray = [];
  if (limit) {
    queryArray.push(`limit=${limit}`);
  }
  if (id) {
    queryArray.push(`_id=${id}`);
  }
  let queryArrayString = queryArray.join("&");

  return useAxios.get(
    `/user${queryArrayString === "" ? "" : `?${queryArrayString}`}`
  );
};
export const userData = (id: string | null) => {
  return useAxios.get(`/user/${id}`);
};
export const signinUser = (body: object) => {
  return useAxios.post(`/signin`, body);
};
export const updateUser = ({ _id, body }: { _id: string; body: object }) => {
  return useAxios.patch(`/user/${_id}`, body);
};
