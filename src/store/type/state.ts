export interface GithubState {
    repos: GithubRepo[];
    loading: boolean;
    error: string | null;
}