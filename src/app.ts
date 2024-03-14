import express from 'express';
import routes from './routes';
import middleware from './middleware';
import {
	authMiddleware,
	errorHandlerMiddleware,
	loggerMiddleware,
} from './middleware';

const app = express();
const port = 3000;

app.use('/api', routes);
app.use(middleware);

app.get("/", (req, res) => {
	if (req) {
		res.send('Hello World!');
	}
});

app.listen(port, () => {
	return console.log("hit this part of the api")
});
