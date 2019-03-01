require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const soldiers2019 = require('../bin/soldierData2019');
const soldiers2018 = require('../bin/soldierData2018');



router.get('/', (req, res, next) => {
  res.render('index', {soldiers2019, soldiers2018});
});

router.post('/host', (req, res, next) => {
  let { hostName, hostPhone, hostEmail, hostDay, breakfastCheck, dinnerCheck, workCheck, auctionCheck, driveCheck, hostMessage} = req.body;
  if(breakfastCheck === undefined){
    breakfastCheck = 'no';
  } else{
    breakfastCheck = 'yes';
  }
  if(dinnerCheck === undefined){
    dinnerCheck = 'no';
  } else{
    dinnerCheck = 'yes';
  }
  if(workCheck === undefined){
    workCheck = 'no';
  } else{
    workCheck = 'yes';
  }
  if(auctionCheck === undefined){
    auctionCheck = 'no';
  } else{
    auctionCheck = 'yes';
  }
  if(driveCheck === undefined){
    driveCheck = 'no';
  } else{
    driveCheck = 'yes';
  }
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.NODEMAILER_ADDRESS,
      pass: process.env.NODEMAILER_PASSWORD
    }
  
  });
  transporter.sendMail({
    from: '"Israel Heart2Heart" <jrfisch95@gmail.com>',
    to: 'rabbi@jewishfll.com ',
    cc:'jrfisch95@gmail.com',
    subject: 'Volunteer Form Submission',
    text: '',
    html: `
      <p>Host Name: ${hostName}</p>
      <p>Host Phone: ${hostPhone}</p>
      <p>Host Email: ${hostEmail}</p>
      <p>Host Day: ${hostDay}</p>
      <p>Host a few Soldiers for Breakfast: ${breakfastCheck}</p>
      <p>Host a few Soldiers for Dinner: ${dinnerCheck}</p>
      <p>Plan and Work Events: ${workCheck}</p>
      <p>Obtain Silent Auction Gifts/Donations: ${auctionCheck}</p>
      <p>Drive Soldiers When Needed: ${driveCheck}</p>
      <p>Message: ${hostMessage}</p>
      ` 
  })
    .then(info => {
      console.log(info);
      res.redirect('/');
    })
    .catch(err => {console.log(err);});
  
});

// router.post('/sponsor', (req, res, next) => {
//   let { corporateSponsorshipFirstName,
//      corporateSponsorshipLastName, 
//      corporateSponsorshipPersonalPhone, 
//      corporateSponsorshipPersonalEmail, 
//      corporateSponsorshipCompanyName, 
//      corporateSponsorshipCompanyPhone, 
//      corporateSponsorshipCompanyEmail, 
//      sponsorshipRadios,
//      sponsorshipMessage } = req.body;
//   let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.NODEMAILER_ADDRESS,
//       pass: process.env.NODEMAILER_PASSWORD
//     }
//   });
//   transporter.sendMail({
//     from: '"Belev Echad" <jrfisch95@gmail.com>',
//     to: 'jrfisch95@gmail.com',
//     subject: 'Corporate Sponsorship',
//     text: '',
//     html: `
//       <p>Full Name: ${corporateSponsorshipFirstName} ${corporateSponsorshipLastName}</p>
//       <p>Personal Phone: ${corporateSponsorshipPersonalPhone}</p>
//       <p>Personal Email: ${corporateSponsorshipPersonalEmail}</p>
//       <p>Company Name: ${corporateSponsorshipCompanyName}</p>
//       <p>Company Phone: ${corporateSponsorshipCompanyPhone}</p>
//       <p>Company Email: ${corporateSponsorshipCompanyEmail}</p>
//       <p>Sponsorship Level: ${sponsorshipRadios}</p>
//       <p>Message: ${sponsorshipMessage}</p>
//       ` 
//   })
//     .then(info => {
//       console.log(info);
//       res.redirect('/');
//     })
//     .catch(err => {console.log(err);});
  
// });

// router.post('/donate', (req, res, next) => {
//   let { donationFirstName,
//      donationLastName, 
//      donationPhone, 
//      donationEmail, 
//      donationRadios,
//      donationMessage } = req.body;
//   let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.NODEMAILER_ADDRESS,
//       pass: process.env.NODEMAILER_PASSWORD
//     }
//   });
//   transporter.sendMail({
//     from: '"Belev Echad" <jrfisch95@gmail.com>',
//     to: 'jrfisch95@gmail.com',
//     subject: 'Individual Donation',
//     text: '',
//     html: `
//       <p>Full Name: ${donationFirstName} ${donationLastName}</p>
//       <p>Personal Phone: ${donationPhone}</p>
//       <p>Personal Email: ${donationEmail}</p>
//       <p>Individual Donation: ${donationRadios}</p>
//       <p>Message: ${donationMessage}</p>
//       ` 
//   })
//     .then(info => {
//       console.log(info);
//       res.redirect('/');
//     })
//     .catch(err => {console.log(err);});
  
// });

module.exports = router;