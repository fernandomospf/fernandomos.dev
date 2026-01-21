class GithubApi {
    private baseUrl: string;
    private token: string;
    private user: string = 'fernandomospf';

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://api.github.com/users';
        this.token = process.env.NEXT_PUBLIC_GITHUB_PAT || '';
    }

    public async getRepos() {
        const response = await fetch(`${this.baseUrl}${this.user}/repos`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                'X-GitHub-Api-Version': '2022-11-28',
                Accept: 'application/vnd.github+json',
            },
        });
        return response.json();
    }
}

export default new GithubApi();