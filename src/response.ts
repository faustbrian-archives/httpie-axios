import { IResponse, IResponseAttributes } from "@konceiver/httpie";
import { Primitive } from "type-fest";

export class Response implements IResponse {
	private readonly body: string | undefined;
	private readonly statusCode: number | undefined;
	private readonly statusMessage: string | undefined;
	private readonly headers: Record<string, Primitive>;

	public constructor({
		body,
		statusCode,
		statusMessage,
		headers,
	}: IResponseAttributes) {
		this.body = body || undefined;
		this.statusCode = statusCode || undefined;
		this.statusMessage = statusMessage || undefined;
		this.headers = headers;
	}

	public getBody(): string | undefined {
		return this.body;
	}

	public getStatusCode(): number | undefined {
		return this.statusCode;
	}

	public getStatusMessage(): string | undefined {
		return this.statusMessage;
	}

	public getHeaders(): Record<string, Primitive> {
		return this.headers;
	}

	public getHeader(name: string): Primitive | undefined {
		return this.headers[name];
	}
}
