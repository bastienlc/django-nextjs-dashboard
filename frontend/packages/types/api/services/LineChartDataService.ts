/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type LineChartDataElement = {
    x: number;
    label: string;
};

export type LineChartData = {
    data: LineChartDataElement[];
};

export class LineChartDataService {

    constructor(public readonly httpRequest: BaseHttpRequest) { }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public lineChartDataRetrieve(): CancelablePromise<LineChartData> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/line-chart-data/',
        });
    }

}
