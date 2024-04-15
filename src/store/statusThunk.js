import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

export const fetchStatuses = createAsyncThunk(
  'status/fetchAll',
  async () => {
    const { data } = await axiosApi('status');
    return data;
  }
);