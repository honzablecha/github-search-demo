import { updateQueries, getQueries } from './queryUtils';
import { Location } from 'history';

const location: Location = { pathname: "/", search: "?tab=repository&user=rohankumar997", hash: "", state: undefined, key: "s4zqn9" }

test('should return updated query by passed values', () => {
    const newUser = { user: 'Matrix' };
    const newTab = { tab: 'followers' };
    const updatedQuery = 'tab=followers&user=Matrix'
    expect(updateQueries(location, { ...newUser, ...newTab })).toBe(updatedQuery);
});

test('should return query parameters from selected location', () => {
    expect(getQueries(location)).toEqual({ tab: "repository", user: "rohankumar997" });
})