import { ApiError } from '../utils/ApiError.js';

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            message: err.message,
            success: err.success,
            errors: err.errors,
        });
    }

    return res.status(500).json({
        statusCode: 500,
        message: 'Internal Server Error',
        success: false,
        errors: [],
    });
};

//export { errorHandler };
