export class AuthTokenError extends Error {
    constructor() {
        super('Error witth authentification token.');
    }
}