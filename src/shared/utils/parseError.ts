export const parseError = (error: unknown) => {
  if (!(error instanceof Error)) {
    return 'Could not complete request. Please try again.';
  }

  let errorData;

  try {
    errorData = JSON.parse(error.message);
  } catch {
    errorData = {
      message: error.message,
    };
  }

  const status = errorData.status;
  const message = errorData.message.toLowerCase();

  if (status === 401) {
    return 'You are not authorized';
  }

  if (status === 403) {
    return 'You do not have permission for this project';
  }

  if (message.includes('invalid')) {
    return 'Invalid invitation token';
  }

  if (message.includes('expired')) {
    return 'Invitation expired';
  }

  return 'Could not complete request. Please try again.';
};
