// utils = Funções auxiliares para manipulação de datas e outras operações comuns.
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}
