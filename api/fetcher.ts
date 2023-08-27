import axios from 'axios';

export const fetcher = (url: string) => axios.get<PokemonResponse>(url).then(res => res.data);
