import type { GithubRepo } from "./type";

export interface GithubActions {
    setRepos: (repos: GithubRepo[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}