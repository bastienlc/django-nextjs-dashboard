/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PieChartDataService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public pieChartDataRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/pie-chart-data/',
        });
    }

}
