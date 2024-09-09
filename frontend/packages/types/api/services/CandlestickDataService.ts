/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CandlestickDataService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public candlestickDataRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/candlestick-data/',
        });
    }

}
