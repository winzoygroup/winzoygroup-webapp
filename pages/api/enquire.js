import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, phone, message, country, nationality, service } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, // Replace this with your Gmail email address
      pass: process.env.MAIL_PASSWORD, // Replace this with your Gmail password
    },
  });
  try {
    await transporter.sendMail({
      from: `"WinzoyGroup Web" <info@the7owners.com>`,
      to: 'the7owners.company@gmail.com,info@winzoygroup.com',
      subject: `New Enquire submission | ${name}`,
      html: `<div style="width: 100%; background-color: #f2f2f2;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
          <div style="max-width: 500px;margin: auto;">
              <table style="width: 100%; background-color: #223A66; padding: 1rem 1.5rem;">
                  <tr>
                      <td style="color:#FFF; text-transform: capitalize;font-weight: 700; font-size: 1rem;">Enquire Form</td>
                      <td style="float: right;"><a href="https://www.winzoygroup.com/" target="_blank" style="text-decoration: none;color:#fff; text-transform: uppercase;font-size: 1.2rem; font-weight: 700;">Winzoy<span style="color: rgb(225,36,84);">Group</span></a></td>
                  </tr>
              </table>
              <div style="background-color: #fff;padding: 1rem 1.5rem;">
                  <table style="width: 100%;">
                      <tr>
                          <td style="padding-bottom: 0.4rem;">Name:</td>
                          <td style="padding-bottom: 0.4rem;">${name}</td>
                      </tr>
                      <tr>
                          <td style="padding-bottom: 0.4rem;">Phone No:</td>
                          <td style="padding-bottom: 0.4rem;">${phone}</td>
                      </tr>
                      <tr >
                          <td style="padding-bottom: 0.4rem;">Email:</td>
                          <td style="padding-bottom: 0.4rem;">${email}</td>
                      </tr>
                      <tr >
                          <td style="padding-bottom: 0.4rem;">Country:</td>
                          <td style="padding-bottom: 0.4rem;">${country}</td>
                      </tr>
                      <tr >
                          <td style="padding-bottom: 0.4rem;">Nationality:</td>
                          <td style="padding-bottom: 0.4rem;">${nationality}</td>
                      </tr>
                      <tr >
                          <td style="padding-bottom: 0.4rem;">Service:</td>
                          <td style="padding-bottom: 0.4rem;">${service}</td>
                      </tr>
                      
                      <tr><td style="padding-bottom: 0.4rem;" colspan="2">Message:</td></tr>
                      <tr><td  colspan="2" style="border: 1px solid #eee; padding: 0.8rem; color: #585858; font-size: 14px; font-style: italic; border-radius: 5px;">
                              ${message}
                      </td>
                  </table>
              </div>
              <div style="padding: 1rem; text-align: center;">
                  Design by <a href="https://onlineindias.com" target="_blank">onlineindias.com</a>
              </div>
          </div>
      </div>`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: '' });
}
