import { Request, Response, NextFunction } from 'express';

// Logger Middleware: Logs information about each incoming request
export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route handler
}

// Authentication Middleware: Authenticates the user before allowing access to protected routes
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // Perform authentication logic (e.g., check for authentication token)
    if (req.headers.authorization) {
        // Authentication successful
        next(); // Proceed to the next middleware or route handler
    } else {
        // Authentication failed
        res.status(401).send('Unauthorized'); // Send 401 Unauthorized response
    }
}

// Error Handling Middleware: Handles errors that occur during request processing
export function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err); // Log the error
    res.status(500).send('Internal Server Error'); // Send 500 Internal Server Error response
}

// Example Custom Middleware: Validates request parameters
export function validateMiddleware(req: Request, res: Response, next: NextFunction) {
    // Example validation: Check if a required query parameter exists
    if (!req.query.userId) {
        return res.status(400).send('userId is required');
    }
    next();
}

