import { ROUTE_API } from "../utils/routes";
import API from "./axiosClient";
import { convertParams } from "../utils/index";

export const getList = async (params) =>
  await API.get(ROUTE_API.NEW, {
    params: convertParams(params),
  });

export const getOne = async (id, params) =>
  await API.get(`${ROUTE_API.NEW}/${id}`, {
    params: convertParams(params),
  });

export const create = async (body) => await API.post(`${ROUTE_API.NEW}`, body);
export const edit = async (id, body) =>
  await API.put(`${ROUTE_API.NEW}/${id}`, body);
export const Delete = async (id) => await API.delete(`${ROUTE_API.NEW}/${id}`);
