export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    borders?:     string[];
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    TOP?: Aed;
    EUR?: Aed;
    BWP?: Aed;
    GMD?: Aed;
    PLN?: Aed;
    XPF?: Aed;
    DJF?: Aed;
    GBP?: Aed;
    IMP?: Aed;
    SLL?: Aed;
    AUD?: Aed;
    XCD?: Aed;
    KRW?: Aed;
    TWD?: Aed;
    USD?: Aed;
    PEN?: Aed;
    JPY?: Aed;
    SEK?: Aed;
    JMD?: Aed;
    XAF?: Aed;
    PYG?: Aed;
    HTG?: Aed;
    MXN?: Aed;
    VUV?: Aed;
    LYD?: Aed;
    MYR?: Aed;
    QAR?: Aed;
    VND?: Aed;
    XOF?: Aed;
    HUF?: Aed;
    FKP?: Aed;
    COP?: Aed;
    BRL?: Aed;
    TND?: Aed;
    MNT?: Aed;
    MDL?: Aed;
    GGP?: Aed;
    ALL?: Aed;
    BGN?: Aed;
    ERN?: Aed;
    SAR?: Aed;
    SGD?: Aed;
    MGA?: Aed;
    AWG?: Aed;
    BBD?: Aed;
    TTD?: Aed;
    YER?: Aed;
    SHP?: Aed;
    AED?: Aed;
    LBP?: Aed;
    CHF?: Aed;
    NZD?: Aed;
    CDF?: Aed;
    WST?: Aed;
    KZT?: Aed;
    NOK?: Aed;
    RON?: Aed;
    TVD?: Aed;
    KES?: Aed;
    MVR?: Aed;
    KMF?: Aed;
    IDR?: Aed;
    STN?: Aed;
    GHS?: Aed;
    MUR?: Aed;
    ANG?: Aed;
    BHD?: Aed;
    NAD?: Aed;
    ZAR?: Aed;
    CAD?: Aed;
    UZS?: Aed;
    SBD?: Aed;
    AFN?: Aed;
    BND?: Aed;
    CNY?: Aed;
    DKK?: Aed;
    MAD?: Aed;
    CKD?: Aed;
    PHP?: Aed;
    NPR?: Aed;
    DZD?: Aed;
    MRU?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    JOD?: Aed;
    BSD?: Aed;
    ZWL?: Aed;
    KGS?: Aed;
    RUB?: Aed;
    BOB?: Aed;
    JEP?: Aed;
    SOS?: Aed;
    ZMW?: Aed;
    GIP?: Aed;
    THB?: Aed;
    KHR?: Aed;
    LRD?: Aed;
    GTQ?: Aed;
    SDG?: BAM;
    INR?: Aed;
    AZN?: Aed;
    BDT?: Aed;
    KWD?: Aed;
    LSL?: Aed;
    SYP?: Aed;
    MOP?: Aed;
    PKR?: Aed;
    HRK?: Aed;
    UYU?: Aed;
    TJS?: Aed;
    KPW?: Aed;
    IQD?: Aed;
    LAK?: Aed;
    KYD?: Aed;
    UAH?: Aed;
    UGX?: Aed;
    ARS?: Aed;
    AOA?: Aed;
    OMR?: Aed;
    PGK?: Aed;
    ETB?: Aed;
    DOP?: Aed;
    CVE?: Aed;
    MWK?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    FOK?: Aed;
    GYD?: Aed;
    VES?: Aed;
    ISK?: Aed;
    GNF?: Aed;
    TMT?: Aed;
    FJD?: Aed;
    CLP?: Aed;
    PAB?: Aed;
    SRD?: Aed;
    TZS?: Aed;
    RWF?: Aed;
    CRC?: Aed;
    MKD?: Aed;
    SZL?: Aed;
    SSP?: Aed;
    BYN?: Aed;
    LKR?: Aed;
    AMD?: Aed;
    KID?: Aed;
    GEL?: Aed;
    BAM?: BAM;
    BIF?: Aed;
    NGN?: Aed;
    HKD?: Aed;
    CZK?: Aed;
    BMD?: Aed;
    MMK?: Aed;
    NIO?: Aed;
    IRR?: Aed;
    HNL?: Aed;
    RSD?: Aed;
    BTN?: Aed;
    MZN?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
