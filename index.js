let currentUser = null;

userbase.init({appId: 'a72bec01-3177-442a-b8c9-2d7bd5f803fa'}).then(({user}) => {
  currentUser = user;

  if (!currentUser && window.location.href.includes('/app/')) {
    window.location.href = window.location.href.includes('file://')
      ? 'C:/Users/Max%20Baun/Projects/MidigatorPreview/index.html'
      : window.location.origin;
  }
});

class UserbaseForm {
  constructor(el, onSubmit) {
    this.el = el;
    this.onSubmit = onSubmit;
    this.elError = this.el.querySelector('[data-el="error"]');
    this.elSuccess = this.el.querySelector('[data-el="success"]');

    if (!this.elError) {
      console.warn('No error element found');
    }

    this.el.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.elError) {
      this.elError.style.display = 'none';
    }

    if (this.elSuccess) {
      this.elSuccess.style.display = 'none';
    }

    if (typeof this.onSubmit === 'function') {
      this.onSubmit(e);
    }
  }

  getValue(name) {
    const input = this.getInputByName(name);

    if (!input) {
      return;
    }

    return input.value;
  }

  getInputByName(name) {
    return this.el.querySelector(`[name=${name}]`);
  }

  setError(error) {
    if (this.elError) {
      this.elError.style.display = 'block';
      this.elError.innerHTML = typeof error === 'string' ? error : error.message;
    }
  }

  setSuccess(message) {
    if (this.elSuccess) {
      this.elSuccess.style.display = 'block';
      this.elSuccess.innerHTML = message;
    }
  }
}

class FormForgot {
  constructor(el) {
    this.el = el;
    console.log('formforgot');
    this.form = new UserbaseForm(el, this.handleSubmit.bind(this));
  }

  handleSubmit() {
    const email = this.form.getValue('email');

    userbase
      .forgotPassword({
        username: email
      })
      .then(user => {
        window.location = 'reset-success.html';
      })
      .catch(err => {
        this.form.setError(err);
      });
  }
}

class FormLogin {
  constructor(el) {
    this.el = el;

    this.form = new UserbaseForm(el, this.handleSubmit.bind(this));
  }

  handleSubmit() {
    const email = this.form.getValue('email');
    const password = this.form.getValue('password');

    const login = () => {
      userbase
        .signIn({
          username: email,
          password: password
        })
        .then(user => {
          userbase
            .updateUser({
              profile: {
                lastLogin: new Date().toString()
              }
            })
            .then(() => {
              window.location = 'app/index.html';
            });
        })
        .catch(err => {
          this.form.setError(err);
        });
    };

    userbase.signOut().then(login).catch(login);
  }
}

class FormResetPassword {
  constructor(el) {
    this.el = el;

    console.log(this.el);

    this.form = new UserbaseForm(el, this.handleSubmit.bind(this));
  }

  handleSubmit() {
    const email = this.form.getValue('email');
    const currentPassword = this.form.getValue('currentPassword');
    const newPassword = this.form.getValue('newPassword');

    userbase
      .updateUser({
        currentPassword,
        newPassword,
        username: currentUser.email
      })
      .then(user => {
        this.form.setSuccess('Your password has been reset.');
      })
      .catch(err => {
        console.log(err);
        this.form.setError(err);
      });
  }
}

class FormSignup {
  constructor(el) {
    this.el = el;

    this.form = new UserbaseForm(el, this.handleSubmit.bind(this));
  }

  handleSubmit() {
    const email = this.form.getValue('email');
    const password = this.form.getValue('password');

    userbase
      .signUp({
        email,
        username: email,
        password: password,
        profile: {
          lastLogin: new Date().toString()
        }
      })
      .then(user => {
        window.location = 'app/index.html';
      })
      .catch(err => {
        this.form.setError(err);
      });
  }
}

class Logout {
  constructor(el) {
    this.el = el;
    this.el.addEventListener('click', e => {
      console.log('logoutclicked');
      e.preventDefault();

      userbase.signOut().then(() => {
        window.location = '../index.html';
      });
    });
  }
}

const DataModules = {
  init: function () {
    const dataModules = document.querySelectorAll('[data-module]');
    for (const dataModule of dataModules) {
      const name = dataModule.dataset.module;
      const module = new this.modules[name](dataModule);
    }
  },
  modules: {
    FormForgot,
    FormLogin,
    FormResetPassword,
    FormSignup,
    Logout
  }
};

DataModules.init();
