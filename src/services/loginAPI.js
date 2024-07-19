import callApi from './apiClient';

/**
 * Asynchronous function to perform user login via API.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @returns {Promise<object>} - Promise resolving to the API response data.
 * @throws {Error} - Throws an error if email or password is missing or if login fails.
 */
export const postLogin = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Username and password are required');
  }
  return await callApi('post', '/user/login', { email, password });
};
