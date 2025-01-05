import nodemailer from "nodemailer";

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

const sendEmail = async (req, res) => {

try {
  const outputMessage = `
  <h1>Mail Details</h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email} </li>
  </ul>
  <h1>Message</h1>
  <p> ${req.body.message}</p>
  `

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "azizozkaracadaag@gmail.com",
      pass: "ntzgmpqqfhihzyfx",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'Smart EDU Contact Form <azizozkaracadaag@gmail.com>', // sender address
      to: "azizozkaracadagg@gmail.com", // list of receivers
      subject: "Smart EDU Contact Form New Message", // Subject line
      html: outputMessage, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  req.flash("Success", "We received your message successfully");

  res.status(200).redirect("/contact");
  
}catch(error) {
  req.flash("Error", error);
  res.status(200).redirect("/contact");
}
}

export { getIndexPage, getAboutPage, getRegisterPage, getLoginPage, getContactPage, sendEmail };
