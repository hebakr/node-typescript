
import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", async (x) => {
  x.body =  {foo: 'bar *********'}
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(80, async () => {
  console.log("App running on port 80...");
});


