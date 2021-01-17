import qs from 'query-string';
import { Location } from 'history';

type Queries = {
    tab?: string,
    user?: string,
    userUrl?: string
}

export const updateQueries = (location: Location, query: Queries): string => {
    const queryParams = qs.parse(location.search);
    const newQueries = { ...queryParams, ...query };
    return qs.stringify(newQueries);
}

export const getQueries = (location: Location): Queries => {
    return qs.parse(location.search);
}