const prom = false;

const ourPromise = (timeout) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!prom) {
        reject("Some error 1");
        return;
      }
      resolve("Ok response");
    }, timeout);
  });

ourPromise(2000)
  .then(() => console.log("ok"))
  .catch(() => console.log("error"));
