export const changeUsername = ({ username }) => ({
  type: 'CHANGE_USERNAME',
  username
});

export function updateStatus({ status }) {
  return {
    type: 'UPDATE_STATUS',
    status
  };
}
