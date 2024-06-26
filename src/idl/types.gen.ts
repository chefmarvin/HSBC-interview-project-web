// This file is auto-generated by @hey-api/openapi-ts

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type ICompanyOfficers = {
    maxAge?: number | null;
    name?: string | null;
    age?: number | null;
    title?: string | null;
    yearBorn?: number | null;
    fiscalYear?: number | null;
    totalPay?: number | null;
    exercisedValue?: number | null;
    unexercisedValue?: number | null;
};

export type IGenAIReport = {
    report: string;
};

export type IYFinanceGenericData = {
    metadata?: IYFinanceGenericHistoryMetadata | null;
    info?: IYFinanceGenericInfo | null;
};

export type IYFinanceGenericHistoryMetadata = {
    symbol?: string | null;
    isin?: string | null;
    exchange?: string | null;
    currency?: string | null;
    regularMarketTime?: number | null;
    gmtoffset?: number | null;
    timezone?: string | null;
    exchangeTimezoneName?: string | null;
    regularMarketPrice?: number | null;
    chartPreviousClose?: number | null;
    previousClose?: number | null;
    scale?: number | null;
    priceHint?: number | null;
    currentTradingPeriod?: {
    [key: string]: unknown;
} | null;
    dataGranularity?: string | null;
    range?: string | null;
    validRanges?: Array<(string)> | null;
};

export type IYFinanceGenericInfo = {
    quoteType?: string | null;
    maxAge?: number | null;
    priceHint?: number | null;
    previousClose?: number | null;
    regularMarketPreviousClose?: number | null;
    fiftyTwoWeekLow?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyDayAverage?: number | null;
    twoHundredDayAverage?: number | null;
    currency?: string | null;
    exchange?: string | null;
    symbol?: string | null;
    underlyingSymbol?: string | null;
    shortName?: string | null;
    longName?: string | null;
    firstTradeDateEpochUtc?: number | null;
    timeZoneFullName?: string | null;
    timeZoneShortName?: string | null;
    uuid?: string | null;
    messageBoardId?: string | null;
    gmtOffSetMilliseconds?: number | null;
    trailingPegRatio?: number | null;
    address1?: string | null;
    lastDividendValue?: number | null;
    longBusinessSummary?: string | null;
    address2?: string | null;
    address3?: string | null;
    yield?: number | null;
    ytdReturn?: number | null;
    totalAssets?: number | null;
    morningStarOverallRating?: number | null;
    morningStarRiskRating?: number | null;
    annualReportExpenseRatio?: number | null;
    beta3Year?: number | null;
    fundInceptionDate?: number | null;
    lastCapGain?: number | null;
    annualHoldingsTurnover?: number | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    country?: string | null;
    phone?: string | null;
    website?: string | null;
    industry?: string | null;
    industryKey?: string | null;
    industryDisp?: string | null;
    sector?: string | null;
    sectorKey?: string | null;
    sectorDisp?: string | null;
    fullTimeEmployees?: number | null;
    companyOfficers?: Array<ICompanyOfficers> | null;
    auditRisk?: number | null;
    boardRisk?: number | null;
    compensationRisk?: number | null;
    shareHolderRightsRisk?: number | null;
    overallRisk?: number | null;
    governanceEpochDate?: number | null;
    compensationAsOfEpochDate?: number | null;
    irWebsite?: string | null;
    open?: number | null;
    dayLow?: number | null;
    dayHigh?: number | null;
    regularMarketOpen?: number | null;
    regularMarketDayLow?: number | null;
    regularMarketDayHigh?: number | null;
    dividendRate?: number | null;
    dividendYield?: number | null;
    exDividendDate?: number | null;
    payoutRatio?: number | null;
    fiveYearAvgDividendYield?: number | null;
    beta?: number | null;
    trailingPE?: number | null;
    forwardPE?: number | null;
    volume?: number | null;
    regularMarketVolume?: number | null;
    averageVolume?: number | null;
    averageVolume10days?: number | null;
    averageDailyVolume10Day?: number | null;
    bid?: number | null;
    ask?: number | null;
    bidSize?: number | null;
    askSize?: number | null;
    marketCap?: number | null;
    priceToSalesTrailing12Months?: number | null;
    trailingAnnualDividendRate?: number | null;
    trailingAnnualDividendYield?: number | null;
    enterpriseValue?: number | null;
    profitMargins?: number | null;
    floatShares?: number | null;
    sharesOutstanding?: number | null;
    sharesShort?: number | null;
    sharesShortPriorMonth?: number | null;
    sharesShortPreviousMonthDate?: number | null;
    dateShortInterest?: number | null;
    sharesPercentSharesOut?: number | null;
    heldPercentInsiders?: number | null;
    heldPercentInstitutions?: number | null;
    shortRatio?: number | null;
    shortPercentOfFloat?: number | null;
    impliedSharesOutstanding?: number | null;
    bookValue?: number | null;
    lastFiscalYearEnd?: number | null;
    nextFiscalYearEnd?: number | null;
    mostRecentQuarter?: number | null;
    earningsQuarterlyGrowth?: number | null;
    netIncomeToCommon?: number | null;
    trailingEps?: number | null;
    forwardEps?: number | null;
    pegRatio?: number | null;
    lastSplitFactor?: string | null;
    lastSplitDate?: number | null;
    enterpriseToRevenue?: number | null;
    enterpriseToEbitda?: number | null;
    '52WeekChange'?: number | null;
    SandP52WeekChange?: number | null;
    lastDividendDate?: number | null;
    currentPrice?: number | null;
    targetHighPrice?: number | null;
    targetLowPrice?: number | null;
    targetMeanPrice?: number | null;
    targetMedianPrice?: number | null;
    recommendationMean?: number | null;
    recommendationKey?: string | null;
    numberOfAnalystOpinions?: number | null;
    totalCash?: number | null;
    totalCashPerShare?: number | null;
    ebitda?: number | null;
    totalDebt?: number | null;
    quickRatio?: number | null;
    debtToEquity?: number | null;
    currentRatio?: number | null;
    totalRevenue?: number | null;
    revenuePerShare?: number | null;
    returnOnAssets?: number | null;
    freeCashflow?: number | null;
    operatingCashflow?: number | null;
    earningsGrowth?: number | null;
    revenueGrowth?: number | null;
    grossMargins?: number | null;
    ebitdaMargins?: number | null;
    operatingMargins?: number | null;
    financialCurrency?: string | null;
    fax?: string | null;
    priceToBook?: number | null;
    returnOnEquity?: number | null;
};

export type IYFinanceHistoryData = {
    Date?: string | null;
    Open?: number | null;
    High?: number | null;
    Low?: number | null;
    Close?: number | null;
    Volume?: number | null;
    Dividends?: number | null;
    'Stock Splits'?: number | null;
    'Capital Gains'?: number | null;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type RootGetResponse = unknown;

export type DefaultSymbolsListDefaultSymbolsListGetResponse = {
    [key: string]: IYFinanceGenericData;
};

export type SearchBySymbolSearchBySymbolSymbolGetData = {
    symbol: string;
};

export type SearchBySymbolSearchBySymbolSymbolGetResponse = {
    [key: string]: IYFinanceGenericData;
};

export type HistoryBySymbolHistoryBySymbolSymbolGetData = {
    period?: string;
    symbol: string;
};

export type HistoryBySymbolHistoryBySymbolSymbolGetResponse = Array<IYFinanceHistoryData>;

export type GenAiAnalysisAnalysisByGenAiSymbolGetData = {
    symbol: string;
};

export type GenAiAnalysisAnalysisByGenAiSymbolGetResponse = IGenAIReport;

export type $OpenApiTs = {
    '/': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: unknown;
            };
        };
    };
    '/default-symbols-list/': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: {
                    [key: string]: IYFinanceGenericData;
                };
            };
        };
    };
    '/search/by-symbol/{symbol}/': {
        get: {
            req: SearchBySymbolSearchBySymbolSymbolGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: {
                    [key: string]: IYFinanceGenericData;
                };
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/history/by-symbol/{symbol}/': {
        get: {
            req: HistoryBySymbolHistoryBySymbolSymbolGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: Array<IYFinanceHistoryData>;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/analysis/by-genAI/{symbol}/': {
        get: {
            req: GenAiAnalysisAnalysisByGenAiSymbolGetData;
            res: {
                /**
                 * Successful Response
                 */
                200: IGenAIReport;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
};