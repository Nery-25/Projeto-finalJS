//main =  Arquivo principal que inicializa a aplicação.
import { fetchUsers, fetchPosts } from './api';
import { Post, User } from './types';
import { renderPost } from './render';

let users: User[] = [];
let posts: Post[] = [];

async function initializeApp() {
    try {
        users = await fetchUsers();
        posts = await fetchPosts();
        renderPosts(posts);
    } catch (error) {
        console.error('There was an error initializing the application:', error);
    }
}

function renderPosts(postsToRender: Post[]) {
    const postsContainer = document.getElementById('posts') as HTMLDivElement;
    postsContainer.innerHTML = postsToRender.map(post => renderPost(post, users)).join('');

    const postCount = document.getElementById('postCount') as HTMLDivElement;
    postCount.textContent = `${postsToRender.length} post(s) encontrado(s)`;
}

function searchPosts(keyword: string) {
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()));
    renderPosts(filteredPosts);
}

function submitNewPost(title: string, body: string) {
    const newPost: Post = {
        id: Math.max(0, ...posts.map(p => p.id)) + 1,
        title,
        body,
        likes: 0,
        date: new Date().toISOString(),
        comments: []
    };

    posts = [newPost, ...posts];
    renderPosts(posts);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();

    const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
    searchButton.addEventListener('click', () => {
        const searchBox = document.getElementById('searchBox') as HTMLInputElement;
        searchPosts(searchBox.value);
    });

    const submitButton = document.getElementById('submitPost') as HTMLButtonElement;
    submitButton.addEventListener('click', () => {
        const titleInput = document.getElementById('newPostTitle') as HTMLInputElement;
        const bodyInput = document.getElementById('newPostBody') as HTMLTextAreaElement;
        submitNewPost(titleInput.value, bodyInput.value);
    });
});
