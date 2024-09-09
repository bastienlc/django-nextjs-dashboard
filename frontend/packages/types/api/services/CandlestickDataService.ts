/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type CandlestickDataElement = {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
};

export type CandlestickData = {
    data: CandlestickDataElement[];
};

export class CandlestickDataService {

    constructor(public readonly httpRequest: BaseHttpRequest) { }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public candlestickDataRetrieve(): CancelablePromise<CandlestickData> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/candlestick-data/',
        });
    }

}
