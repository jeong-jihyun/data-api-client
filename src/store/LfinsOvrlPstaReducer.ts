import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {};

/**
 * createAsyncThunk API로 비동기 액션을 만들면 이 액션에 대해 pending, fulfilled, rejected 
 * 상태에 대한 액션이 자동으로 생성된다.
 * 먼저 비동기 액션은 아래와 같이 생성한다.
 * */
export const getLfinsOvrlPstaList = createAsyncThunk(
  "@API/GET_LFINS_OVRL_PSTA_LIST",
  async (page: number) => {
    try {      
      const serviceKey = process.env.REACT_APP_API_KEY;

      const postPerPage: number = 10; // 페이지 당 게시글 개수
      const host = "https://apis.data.go.kr/";
      const apiAddress = host + "B190017/GetInsurgFnltMngmtOvrlInfoService";
      const method = "getLfinsOvrlPstaList";

      let url = `${apiAddress}/${method}?serviceKey=${serviceKey}`;
      url += `&numOfRows=${postPerPage}`;
      url += `&pageNo=${page}`;
      url += `&resultType=json&baseYm=201812`;

      const response = await axios.get(url);
      const dataList = response.data.getLfinsOvrlPstaList;

      // 원격 서버에서 데이타를 추출을 했지만, 해당 데이타를 컴포넌트에게 전달이 되지 않는다.
      return dataList;
    } catch (error) {
      console.log(error);
    }
  }
);

export const LfinsOvrlPstaSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},

  // 만들어진 비동기 액션에 대한 리듀서는 아래와 같이 extraReducers로 작성할 수 있다.
  // extraReducers로 지정된 reducer는 외부 작업을 참조하기 위한 것이기 때문에 slice.actions에 생성되지 않는다.
  // 또한, ActionReducerMapBuilder를 수신하는 콜백으로 작성하는 것이 권장된다.
  extraReducers: (builder) => {
    // 위에 정의한 메소드를 참조
    builder.addCase(getLfinsOvrlPstaList.fulfilled, (state, action) => {
      return action;
    });
  },
});
