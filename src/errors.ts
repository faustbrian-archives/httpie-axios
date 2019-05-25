import { IRequest, IRequestError } from "@httpack/httpack";

export class RequestError extends Error implements IRequestError {
	private readonly request: IRequest;

	constructor(error: Error, request: IRequest) {
		super(error.message);

		Object.defineProperty(this, "message", {
			enumerable: false,
			value: error.message,
		});

		Object.defineProperty(this, "name", {
			enumerable: false,
			value: this.constructor.name,
		});

		Object.defineProperty(this, "request", {
			enumerable: false,
			value: request,
		});

		this.request = request;

		Error.captureStackTrace(this, this.constructor);
	}

	public getRequest(): IRequest {
		return this.request;
	}
}
