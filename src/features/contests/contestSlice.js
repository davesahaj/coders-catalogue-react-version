import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contestApi from "../../common/api";
import moment from "moment";

export const fetchAsyncContests = createAsyncThunk(
  "contests/fetchAsyncContests",
  async () => {
    const response = await contestApi.get();
    return response.data;
  }
);

const initialState = { contests: [], loading: true };

const contestSlice = createSlice({
  name: "contests",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncContests.pending]: (state) => {
      return { ...state, loading: true };
    },
    [fetchAsyncContests.fulfilled]: (state, data) => {
      let contests = [];
      let upcomingContests = [];

      for (let i of data.payload) {
        const site = i.site.replace(/ /g, "").toLowerCase();
        const contest = i.name;
        const duration = moment.duration({ seconds: i.duration }).humanize();
        const url = i.url;
        let date = moment.utc(i.start_time).local().format("Do MMMM : hA");
        const upcoming = i.in_24_hours === "Yes";

        if (date === "Invalid date") {
          date = "N/A";
        }

        upcoming
          ? upcomingContests.push({ site, contest, duration, url, date })
          : contests.push({ site, contest, duration, url, date });
      }

      return {
        ...state,
        contests: [...upcomingContests, ...contests],
        loading: false,
      };
    },

    [fetchAsyncContests.rejected]: (state) => {
      return { ...state, loading: false };
    },
  },
});

export const getContests = (state) => {
  const data = [];
  const storedContests = localStorage.getItem("enabledSites");
  for (let i of state.contests.contests) {
    if (storedContests.includes(i.site)) {
      data.push(i);
    }
  }

  return data;
};

export const isLoading = (state) => state.contests.loading;

export default contestSlice.reducer;
