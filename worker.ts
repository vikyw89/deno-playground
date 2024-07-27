const worker = new Worker(import.meta.resolve("./worker.js"), {
    type: "module",
  });
  
  worker.postMessage({ filename: "./log.txt" });