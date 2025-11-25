import { port } from "./src/utils/key.js";
import { app } from "./src/main.js";

app.listen(port, () => {
    console.log(`El servidor ha iniciado en el puerto: ${port}`)
});