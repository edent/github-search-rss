/**
 * IT IS DEFINITION FOR RSS FEED
 * If you want to get more feed, please add it
 **/
import { RSSItem } from "./index";

const BASE_URL = "https://edent.github.io/github-search-rss";
// Query references
// https://docs.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax
// https://docs.github.com/en/github/searching-for-information-on-github/about-searching-on-github
// TYPE references
// https://docs.github.com/en/graphql/reference/queries#searchresultitemconnection
export const SEARCH_ITEMS: RSSItem[] = [
    // Issue
    {
        title: "Blog",
        query: "shkspr.mobi",
        TYPE: "ISSUE",
        link: `${BASE_URL}/shkspr.json`,
        homepage: "https://github.com/search?q=%22shkspr.mobi%22"
    },
    {
        title: "Blog PR",
        query: "shkspr.mobi is:pullrequest",
        TYPE: "PULLREQUEST",
        link: `${BASE_URL}/shkspr-pr.json`,
        homepage: "https://github.com/search?q=%22shkspr.mobi%22&type=pullrequests"
    }
];
