import * as graphql from "graphql";
import fetch from "node-fetch";
import { toFixed } from "../helpers/toFixed";
// import { Currency } from "../interfaces/currency";
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
} = graphql;

const fetchCur = async () => {
	const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
	const data = await response.json();
	return data;
};

const fetchValute = async () => {
	const data = await fetchCur();
	const valute = Object.entries(data.Valute).map(([key, el]: any) => el);
	const res = {};
	for (const {
		Value,
		Previous,
		Name,
		CharCode,
		ID,
		NumCode,
		Nominal,
	} of valute) {
		(res as any)[CharCode] = {
			ID,
			Name,
			CharCode,
			NumCode,
			Nominal: Number.parseInt(Nominal),
			Value: toFixed(Number.parseFloat(Value)),
			Previous: toFixed(Number.parseFloat(Previous)),
		};
	}
	return res;
};

const Currency = new GraphQLObjectType({
	name: "Currency",
	fields: () => ({
		ID: { type: GraphQLString },
		NumCode: { type: GraphQLString },
		CharCode: { type: GraphQLString },
		Nominal: { type: GraphQLInt },
		Name: { type: GraphQLString },
		Value: { type: GraphQLFloat },
		Previous: { type: GraphQLFloat },
	}),
});

const Valute = new GraphQLObjectType({
	name: "Valute",
	fields: () => ({
		AUD: { type: Currency },
		AZN: { type: Currency },
		GBP: { type: Currency },
		AMD: { type: Currency },
		BYN: { type: Currency },
		BGN: { type: Currency },
		BRL: { type: Currency },
		HUF: { type: Currency },
		HKD: { type: Currency },
		DKK: { type: Currency },
		USD: { type: Currency },
		EUR: { type: Currency },
		INR: { type: Currency },
		KZT: { type: Currency },
		CAD: { type: Currency },
		KGS: { type: Currency },
		CNY: { type: Currency },
		MDL: { type: Currency },
		NOK: { type: Currency },
		PLN: { type: Currency },
		RON: { type: Currency },
		XDR: { type: Currency },
		SGD: { type: Currency },
		TJS: { type: Currency },
		TRY: { type: Currency },
		TMT: { type: Currency },
		UZS: { type: Currency },
		UAH: { type: Currency },
		CZK: { type: Currency },
		SEK: { type: Currency },
		CHF: { type: Currency },
		ZAR: { type: Currency },
		KRW: { type: Currency },
		JPY: { type: Currency },
	}),
});

const CurrencyType = new GraphQLObjectType({
	name: "CurrencyType",
	fields: () => ({
		Date: { type: GraphQLString },
		PreviousDate: { type: GraphQLString },
		PreviousUrl: { type: GraphQLString },
		Timestamp: { type: GraphQLString },
		Valute: { type: Valute },
	}),
});

const Query = new GraphQLObjectType({
	name: "Query",
	fields: {
		valutes: {
			type: CurrencyType,
			resolve(parent, args) {
				return fetchCur();
			},
		},
		values: {
			type: Valute,
			resolve(parent, args) {
				return fetchValute();
			},
		},
	},
});

export const schema = new GraphQLSchema({
	query: Query,
});
