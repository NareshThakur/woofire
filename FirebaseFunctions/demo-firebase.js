const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// Set up nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail, // Your Gmail email address
    pass: gmailPassword, // Your Gmail password or an app-specific password
  },
});

exports.dailySalesSummary = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventsSnapshot = await admin.firestore().collection('events')
      .where('eventName', '==', 'purchase')
      .where('timestamp', '>=', today)
      .get();

    const totalSales = eventsSnapshot.size;
    const topSellingProducts = processTopSellingProducts(eventsSnapshot);
    const totalRevenue = calculateTotalRevenue(eventsSnapshot);

    const summary = `
      Daily Sales Summary (${today.toDateString()}):
      - Total Sales: ${totalSales}
      - Top Selling Products: ${topSellingProducts.join(', ')}
      - Total Revenue: $${totalRevenue.toFixed(2)}
    `;

    // Send email
    await sendEmail('admin@example.com', 'Daily Sales Summary', summary);

    return null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
});

function processTopSellingProducts(snapshot) {
  // Logic to process top-selling products based on the purchase events
  // (You need to adapt this based on your data structure)
  const productCounts = {};
  snapshot.forEach((doc) => {
    const productId = doc.data().productId;
    productCounts[productId] = (productCounts[productId] || 0) + 1;
  });

  // Sort products by count in descending order
  const sortedProducts = Object.keys(productCounts).sort((a, b) => productCounts[b] - productCounts[a]);

  // Return the top 3 selling products (customize as needed)
  return sortedProducts.slice(0, 3);
}

function calculateTotalRevenue(snapshot) {
  // Logic to calculate total revenue based on the purchase events
  // (You need to adapt this based on your data structure)
  let totalRevenue = 0;
  snapshot.forEach((doc) => {
    const price = doc.data().price || 0;
    totalRevenue += price;
  });
  return totalRevenue;
}

async function sendEmail(to, subject, text) {
  // Send email using nodemailer
  const mailOptions = {
    from: 'your@gmail.com',
    to: to,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions);
}
