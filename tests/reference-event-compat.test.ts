import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import sessionReferenceExtension from "../extensions/feature/reference/index.ts";
import subagentReferenceExtension from "../extensions/feature/reference/subagent.ts";

type BeforeAgentStartHandler = (event: unknown, ctx: unknown) => unknown;

function captureBeforeAgentStart(register: (pi: ExtensionAPI) => void): BeforeAgentStartHandler {
	let handler: BeforeAgentStartHandler | undefined;
	const pi = {
		events: { on: () => () => {} },
		on(event: string, candidate: BeforeAgentStartHandler) {
			if (event === "before_agent_start") handler = candidate;
			return () => {};
		},
		registerMessageRenderer() {},
	} as unknown as ExtensionAPI;

	register(pi);
	assert.ok(handler);
	return handler;
}

test("reference handlers ignore custom-message-triggered runs", async () => {
	const agentHome = mkdtempSync(join(tmpdir(), "pi-cc-reference-"));
	const previousAgentDir = process.env.PI_CODING_AGENT_DIR;
	const agentsDir = join(agentHome, ".pi", "agent", "agents");
	mkdirSync(agentsDir, { recursive: true });
	writeFileSync(join(agentsDir, "coder.md"), "---\ndisplay_name: Coder\n---\n");
	process.env.PI_CODING_AGENT_DIR = agentHome;

	try {
		const event = {
			type: "before_agent_start",
			messageType: "custom",
			message: { customType: "subagent_result", content: "done", display: true },
		};

		await captureBeforeAgentStart(sessionReferenceExtension)(event, {});
		await captureBeforeAgentStart(subagentReferenceExtension)(event, {});
	} finally {
		if (previousAgentDir === undefined) delete process.env.PI_CODING_AGENT_DIR;
		else process.env.PI_CODING_AGENT_DIR = previousAgentDir;
		rmSync(agentHome, { recursive: true, force: true });
	}
});
