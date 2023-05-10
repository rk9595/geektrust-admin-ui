export const searchHelper = (search, users) => {
  let searchInput = search.toLowerCase();
  return users.filter((user) => {
    if (
      user.name.toLowerCase().includes(searchInput) ||
      user.email.toLowerCase().includes(searchInput) ||
      user.role.toLowerCase().includes(searchInput)
    ) {
      user.show = true;
      return user;
    }
    user.show = false;
    return user;
  });
};
