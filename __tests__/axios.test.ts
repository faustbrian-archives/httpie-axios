import { complianceTests } from "@konceiver/httpie-test-suite";
import { Client, Request, Response } from "../src";

complianceTests(
	() => new Client(),
	() => new Request(),
	(data) => new Response(data),
);
