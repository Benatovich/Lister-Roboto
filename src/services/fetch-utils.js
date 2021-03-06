import { client, checkError } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export async function addToWatchlist(movie) {
  const response = await client
    .from('watchlist_items')
    .insert(movie);

  return checkError(response);
}

export async function getWatchlist() {
  const response = await client
    .from('watchlist_items')
    .select()
    .order('id');

  return checkError(response);
}

export async function watchMovie(id) {
  const response = await client
    .from('watchlist_items')
    .update({ watched: true })
    .match({ id })
    .single();

  return checkError(response);
}
export async function unwatchMovie(id) {
  const response = await client
    .from('watchlist_items')
    .update({ watched: false })
    .match({ id })
    .single();

  return checkError(response);
}

export async function searchMovies(query) {
  const response = await fetch(`/.netlify/functions/movies-endpoint?searchQuery=${query}`);

  const json = await response.json();

  return json.data.results;
}