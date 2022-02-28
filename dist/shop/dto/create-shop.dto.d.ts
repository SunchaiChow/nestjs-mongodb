export declare class CreateShopDto {
    readonly title: string;
    readonly description: string;
    readonly imgPath: string;
    readonly products: Array<[{
        category: string;
        name: string;
    }]>;
}
