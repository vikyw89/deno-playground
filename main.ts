const worker = new Worker(
    new URL("./worker.ts", import.meta.url).href,
    {
      type: "module",
    },
  );
  worker.postMessage({ filename: "./log.txt" });
  const worker2 = new Worker(
    new URL("./worker.ts", import.meta.url).href,
    {
      type: "module",
      deno: {
        permissions: {
          read: [
            new URL("./file_1.txt", import.meta.url),
            new URL("./file_2.txt", import.meta.url),
          ],
        },
      },
    },
  );
  worker2.postMessage({ filename: "./log.txt" });