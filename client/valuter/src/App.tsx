import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { valutes } from "./queries/query";
import { QueryContext } from "./context/context";
import { ThemeButton } from "./components/ThemeButton";
const client = new ApolloClient({
	uri: "http://localhost:1488/graphql",
});
async function fetchQuery(): Promise<any> {
	const data = await client.query({
		query: valutes,
	});
	delete data.data.values.__typename;
	data.data.values.RUB = {
		Value: 1,
		Previous: 1,
		CharCode: "RUB",
		Name: "Российский Рубль",
		Nominal: 1,
	};
	return data.data.values;
}
export const App: React.FC = (props: any) => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Navbar />
				<QueryContext.Provider value={{ fetchQuery }}>
					<Router />
				</QueryContext.Provider>
				<ThemeButton />
				<Footer />
			</BrowserRouter>
		</ApolloProvider>
	);
};
