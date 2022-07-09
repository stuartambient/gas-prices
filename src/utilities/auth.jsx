const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },

  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
