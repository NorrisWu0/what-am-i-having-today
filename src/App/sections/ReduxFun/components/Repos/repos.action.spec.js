import { reposRequested, reposFailed } from './repos.action';

describe('Test loadRepo', () => {
  it('should load something', () => {
    expect(reposRequested()).toEqual({
      type: 'REQUESTING_REPOS'
    });
  });

  it('should load something else', () => {
    const err = 'fake';
    expect(reposFailed(err)).toEqual({
      type: 'REPOS_FAILED',
      data: { err }
    });
  });
});
