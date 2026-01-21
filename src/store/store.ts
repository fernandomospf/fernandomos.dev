import { create } from "zustand";
import type { GithubState, GithubActions } from "./type";

export const useGithubStore = create<GithubState & GithubActions>((set) => ({
    repos: [],
    loading: false,
    error: null,
    setRepos: (repos) => set({ repos }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));