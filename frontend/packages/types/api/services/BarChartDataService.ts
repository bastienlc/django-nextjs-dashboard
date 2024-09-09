/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type BarChartDataElement = {
    x: number;
    label: string;
};

export type BarChartData = {
    data: BarChartDataElement[];
};

export class BarChartDataService {

    constructor(public readonly httpRequest: BaseHttpRequest) { }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public barChartDataRetrieve(): CancelablePromise<BarChartData> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/bar-chart-data/',
        });
    }

}
