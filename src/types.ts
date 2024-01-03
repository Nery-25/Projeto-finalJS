// types.ts
export interface User {
    id: number;
    name: string;
    avatarUrl: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    likes: number;
    date: string;
    comments: Comment[];
    userId?: number; // Inclui a possibilidade de um post estar associado a um usuário
}

export interface Comment {
    id: number;
    postId: number;
    body: string;
    userId: number; // Cada comentário está associado a um usuário
    date: string;
}
