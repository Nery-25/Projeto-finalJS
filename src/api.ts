//api =  Funções para chamar os endpoints da API
import { Post, User } from './types';

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}
