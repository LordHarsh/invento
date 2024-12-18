export const ERRORS = {
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: {
      error: 'Internal Server Error',
      error_description: 'Something went wrong',
    },
  },
  MISDIRECTED_REQUEST: {
    code: 421,
    success: false,
    message: {
      error: 'MISDIRECTED_REQUEST',
      error_description:
        'The request was directed at a server that is not able to produce a response.',
    },
  },
  USER_ALREADY_EXISTS_ERROR: {
    code: 409,
    success: false,
    message: {
      error: 'USER_ALREADY_EXISTS_ERROR',
      error_description: 'User already exists',
    },
  },
  USER_NOT_FOUND_ERROR: {
    code: 404,
    success: false,
    message: {
      error: 'USER_NOT_FOUND_ERROR',
      error_description: 'User not found',
    },
  },
  SAME_PASSWORD: {
    code: 400,
    success: false,
    message: {
      error: 'SAME_PASSWORD',
      error_description: 'Old password and new password cannot be the same',
    },
  },
  INCORRECT_PASSWORD: {
    code: 401,
    success: false,
    message: {
      error: 'INCORRECT_PASSWORD',
      error_description: 'Incorrect Password',
    }
  }
};
