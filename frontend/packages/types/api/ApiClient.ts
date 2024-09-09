/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { BarChartDataService } from './services/BarChartDataService';
import { CandlestickDataService } from './services/CandlestickDataService';
import { LineChartDataService } from './services/LineChartDataService';
import { PieChartDataService } from './services/PieChartDataService';
import { SchemaService } from './services/SchemaService';
import { TokenService } from './services/TokenService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly barChartData: BarChartDataService;
    public readonly candlestickData: CandlestickDataService;
    public readonly lineChartData: LineChartDataService;
    public readonly pieChartData: PieChartDataService;
    public readonly schema: SchemaService;
    public readonly token: TokenService;
    public readonly users: UsersService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.barChartData = new BarChartDataService(this.request);
        this.candlestickData = new CandlestickDataService(this.request);
        this.lineChartData = new LineChartDataService(this.request);
        this.pieChartData = new PieChartDataService(this.request);
        this.schema = new SchemaService(this.request);
        this.token = new TokenService(this.request);
        this.users = new UsersService(this.request);
    }
}

