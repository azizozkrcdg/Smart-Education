const getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

const getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

const getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

export { getIndexPage, getAboutPage, getRegisterPage };
