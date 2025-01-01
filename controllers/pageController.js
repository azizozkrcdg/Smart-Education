// index
const getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

// about
const getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

// register
const getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

// login
const getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

// contact
const getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};


export { getIndexPage, getAboutPage, getRegisterPage, getLoginPage, getContactPage };
