export type IndexToTabName = { [index: string]: number }
export type Tab = { tab: string };
export type Follower = {
    name: string,
    bio: string,
    url: string,
    id: number,
    login: string
}
export type Repository = {
    name: string,
    primaryLanguage: PrimaryLanguage,
    description?: string,
    url: string;
    id: number;
}
export type PrimaryLanguage = {
    name: string;
}