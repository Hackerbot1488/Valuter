import { createContext } from "react";
interface queryContext {
	fetchQuery: () => Promise<any>;
}
export const QueryContext = createContext<queryContext>({
	fetchQuery: async () => {},
});
