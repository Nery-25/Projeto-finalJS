// render = Funções para renderizar os posts e comentários.
import { Post, Comment, User } from './types';
import { formatDate } from './utils';

export function renderPost(post: Post, users: User[]): string {
    // Encontrar o usuário associado ao post, se existir
    const user = post.userId ? users.find(u => u.id === post.userId) : null;

    return `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <div class="post-footer">
                <span>${post.likes} likes</span>
                <span>${formatDate(post.date)}</span>
                ${user ? `<span>by ${user.name}</span>` : ''}
            </div>
            ${post.comments.map(comment => renderComment(comment, users)).join('')}
        </div>
    `;
}

export function renderComment(comment: Comment, users: User[]): string {
    // Encontrar o usuário associado ao comentário
    const user = users.find(u => u.id === comment.userId);

    if (!user) {
        throw new Error(`User with ID ${comment.userId} not found`);
    }

    return `
        <div class="comment">
            <img src="${user.avatarUrl}" alt="${user.name}" />
            <div>
                <strong>${user.name}</strong>
                <p>${comment.body}</p>
                <span>${formatDate(comment.date)}</span>
            </div>
        </div>
    `;
}
