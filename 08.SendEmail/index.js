const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Set to true if using port 465, and false for all other ports
  auth: {
    user: "codestudyjbad@gmail.com",
    pass: "edgq wlrf vzsn yawy", // Use your Gmail App Password here
  },
});

async function main() {
  try {
    const info = await transporter.sendMail({
      from: 'codestudyjbad@gmail.com',
      to: "sumitkumar785796@gmail.com, sumit.22scse2130023@galgotiasuniversity.edu.in",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello, this is send by node js mailer using nodemailer </b>",
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

main();
