import type { GithubRepo } from "./type";

export interface GithubState {
    repos: GithubRepo[];
    loading: boolean;
    error: string | null;
}