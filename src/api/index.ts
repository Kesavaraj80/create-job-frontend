import axios from "axios";
import { config } from "../constants";
import { job } from "../types/types";

export const createJobApi = (data: job) =>
  axios
    .post(`${config.url}`, data)
    .then((res) => res)
    .catch((error) => console.error(error));

export const getJobsApi = () =>
  axios
    .get(`${config.url}`)
    .then((res) => res.data)
    .catch((error) => console.error(error));
