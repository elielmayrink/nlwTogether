import express, { request, response } from "express";

const app = express();

app.get("/test",(request, response) => {
  return response.json({
    mensagem: 'hello world',
  })
});

app.post("/test-post", (request, response) => {
  return response.json({
    mensagem: "test-post"
  })
})

app.listen(3000, () => console.log("Server is running"));

