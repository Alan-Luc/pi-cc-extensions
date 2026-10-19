export const KANAGAWA_PAPER_INK_THEME = {
	name: "kanagawa-paper-ink",
	type: "dark" as const,
	fg: "#DCD7BA",
	bg: "#0a0c0d",
	tokenColors: [
		{
			scope: ["comment", "punctuation.definition.comment"],
			settings: { foreground: "#727169", fontStyle: "italic" },
		},
		{
			scope: ["comment.block.documentation", "string.quoted.docstring"],
			settings: { foreground: "#717e67", fontStyle: "italic" },
		},
		{ scope: ["variable"], settings: { foreground: "#DCD7BA" } },
		{
			scope: [
				"source.js variable.other.readwrite",
				"source.js variable.other.constant",
				"source.jsx variable.other.readwrite",
				"source.jsx variable.other.constant",
				"source.ts variable.other.readwrite",
				"source.ts variable.other.constant",
				"source.tsx variable.other.readwrite",
				"source.tsx variable.other.constant",
			],
			settings: { foreground: "#b6927b" },
		},
		{ scope: ["variable.parameter"], settings: { foreground: "#a6a69c" } },
		{
			scope: ["variable.other.property", "variable.other.object.property"],
			settings: { foreground: "#c4746e" },
		},
		{
			scope: ["variable.language"],
			settings: { foreground: "#b6927b", fontStyle: "italic" },
		},
		{ scope: ["keyword", "storage"], settings: { foreground: "#a292a3" } },
		{
			scope: ["keyword.control.conditional", "keyword.control.loop"],
			settings: { foreground: "#8992a7" },
		},
		{
			scope: [
				"keyword.control.import",
				"keyword.control.from",
				"keyword.import",
				"meta.preprocessor",
			],
			settings: { foreground: "#c4746e" },
		},
		{ scope: ["keyword.operator"], settings: { foreground: "#c4746e" } },
		{ scope: ["punctuation", "meta.brace"], settings: { foreground: "#9e9b93" } },
		{
			scope: ["entity.name.function", "variable.function", "support.function"],
			settings: { foreground: "#859fac" },
		},
		{
			scope: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
			settings: { foreground: "#8ea49e" },
		},
		{
			scope: ["entity.name.tag", "entity.other.attribute-name"],
			settings: { foreground: "#c4b28a" },
		},
		{ scope: ["constant"], settings: { foreground: "#b6927b" } },
		{ scope: ["constant.numeric"], settings: { foreground: "#a292a3" } },
		{
			scope: ["constant.language.boolean"],
			settings: { foreground: "#b6927b", fontStyle: "bold" },
		},
		{
			scope: ["string", "punctuation.definition.string"],
			settings: { foreground: "#8a9a7b" },
		},
		{
			scope: ["string.regexp", "constant.other.symbol"],
			settings: { foreground: "#c4746e" },
		},
		{
			scope: ["constant.character.escape"],
			settings: { foreground: "#c4746e", fontStyle: "bold" },
		},
	],
};
