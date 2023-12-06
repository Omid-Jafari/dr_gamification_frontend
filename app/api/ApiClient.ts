import useAxios from "./ApiServise";

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
export const finishedQuestions = ({
  _id,
  body,
}: {
  _id: string;
  body: object;
}) => {
  return useAxios.patch(`/finished/${_id}`, body);
};
export const finishAndResetGame = ({
  _id,
  reset = false,
  body,
}: {
  _id: string;
  reset?: boolean;
  body: object;
}) => {
  return useAxios.patch(
    `/finishAndResetGame/${_id}${reset ? "?reset=true" : ""}`,
    body
  );
};
