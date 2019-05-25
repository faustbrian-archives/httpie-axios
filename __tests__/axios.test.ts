import { complianceTests } from "@httpack/test-suite";
import { Client, Request, Response } from "../src";

complianceTests(() => new Client(), () => new Request(), data => new Response(data));
