// tslint:disable: no-unsafe-any
import {
	IClient,
	IRequest,
	IResponse,
	RequestOptions,
} from "@konceiver/httpie";
import axios from "axios";

import { Request } from "./request";
import { Response } from "./response";

export class Client implements IClient {
	public async get(url: string, options?: RequestOptions): Promise<IResponse> {
		return this.sendRequest(
			new Request().withMethod("get").withUrl(url).withOptions(options)
		);
	}

	public async post(url: string, options?: RequestOptions): Promise<IResponse> {
		return this.sendRequest(
			new Request().withMethod("post").withUrl(url).withOptions(options)
		);
	}

	public async put(url: string, options?: RequestOptions): Promise<IResponse> {
		return this.sendRequest(
			new Request().withMethod("put").withUrl(url).withOptions(options)
		);
	}

	public async patch(
		url: string,
		options?: RequestOptions
	): Promise<IResponse> {
		return this.sendRequest(
			new Request().withMethod("patch").withUrl(url).withOptions(options)
		);
	}

	public async head(url: string, options?: RequestOptions): Promise<IResponse> {
		return this.sendRequest(
			new Request().withMethod("head").withUrl(url).withOptions(options)
		);
	}

	public async delete(
		url: string,
		options?: RequestOptions
	): Promise<IResponse> {
		return this.sendRequest(
			new Request().withMethod("delete").withUrl(url).withOptions(options)
		);
	}

	// @ts-ignore
	public async sendRequest(request: IRequest): Promise<IResponse> {
		try {
			// @ts-ignore
			const { data, headers, status } = await axios[request.getMethod()](
				// @ts-ignore
				request.getUrl().href,
				request.getOptions()
			);

			return new Response({ body: data, headers, statusCode: status });
		} catch (error) {
			return new Response({
				body: error.response.data,
				headers: error.response.headers,
				statusCode: error.response.status,
				statusMessage: error.response.statusText,
			});
		}
	}
}
