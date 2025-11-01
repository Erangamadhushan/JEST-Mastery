import { fetchUser } from './api';

describe('API functions', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('fetchUser returns user data on success', async () => {
    const mockUser = { id: 1, name: 'John Doe' };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    const user = await fetchUser(1);

    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    expect(user).toEqual(mockUser);
  });

  test('fetchUser throws error on failure', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchUser(1)).rejects.toThrow('Failed to fetch user');
  });
});