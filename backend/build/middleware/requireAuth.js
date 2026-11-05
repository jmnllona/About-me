export function requireAuth(request, response, next) {
    if (!request.session.user) {
        response.status(401).json({ message: "Please sign in to continue." });
        return;
    }
    next();
}
//# sourceMappingURL=requireAuth.js.map