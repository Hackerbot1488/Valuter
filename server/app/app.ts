import express = require("express");
const cors = require("cors");
import { graphqlHTTP } from "express-graphql";

const app: express.Application = express();
const PORT: number = 1488;

import { schema } from "../graphql/schema";

app.use(cors());
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);
app.get("/", (req: express.Request, res: express.Response) => {
	res.end("GraphQl");
});

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`);
});
