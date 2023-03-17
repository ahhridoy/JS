// synchronous behavior //
// const processOrder = () => {
//   console.log("processing order for customer 1");
//   var currentTime = new Date().getTime();
//   while (currentTime + 3000 >= new Date().getTime());
//   console.log("order processed for customer 1");
// };
// console.log("take order for customer 1");
// processOrder();
// console.log("complete order for customer 1");

// asynchronous behavior //
// const processOrder = () => {
//   console.log("processing order for customer 1");
//   setTimeout(() => {
//     console.log("cooking Completed");
//   }, 3000);
//   console.log("order processed for customer 1");
// };
// console.log("take order for customer 1");
// processOrder();
// console.log("complete order for customer 1");

// asynchronous behavior perfect practice
const takeOrder = (customer, callback) => {
  console.log(`take order from ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`process order for ${customer}`);
  setTimeout(() => {
    console.log("cooking completed");
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completedOrder = (customer) => {
  console.log(`order completed for ${customer}`);
};

takeOrder("customer 1", (customer) => {
   processOrder(customer, (customer) => {
     completedOrder(customer);
   });
 });
