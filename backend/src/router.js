import RouterBuilder from "./router-builder.js";
import { exampleAction } from "./controllers/example.js";

const router = new RouterBuilder();

router.addGetEndpoint('/api/example', exampleAction);

export default router.router;
