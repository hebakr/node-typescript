
import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", async (x) => {
  x.body =  {foo: 'bar *********'}
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, async () => {
  console.log("App running on port 3000...");
});


