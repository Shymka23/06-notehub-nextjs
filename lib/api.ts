import axios from "axios";
import { FormValues, Note, NotesResponse } from "@/types/note";

const API_BASE_URL = "https://notehub-public.goit.study/api/notes";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
});

export const fetchNotes = async (
  search: string,
  page: number
): Promise<NotesResponse> => {
  try {
    const params = {
      ...(search && { search }),
      page,
      perPage: 12,
    };

    const response = await axios.get<NotesResponse>(API_BASE_URL, {
      params,
      headers: getAuthHeaders(),
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch notes: ${error.response?.data?.message || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while fetching notes");
  }
};

export const createNote = async (note: FormValues): Promise<Note> => {
  try {
    const response = await axios.post<Note>(API_BASE_URL, note, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to create note: ${error.response?.data?.message || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while creating note");
  }
};

export const deleteNote = async (id: string): Promise<Note> => {
  try {
    const response = await axios.delete<Note>(`${API_BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to delete note: ${error.response?.data?.message || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while deleting note");
  }
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  try {
    const response = await axios.get<Note>(`${API_BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch note details: ${error.response?.data?.message || error.message}`
      );
    }
    throw new Error("An unexpected error occurred while fetching note details");
  }
};
