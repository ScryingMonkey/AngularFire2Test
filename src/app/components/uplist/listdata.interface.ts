// Used to pass data to UpListComponent
export interface ListData {
    listTitle: string,
    liTitleKey: string, 
    liDetailKeys: Array<string>, 
    liItems: Array<Object>
}

export class ListData {
    constructor() {}
    // constructor( public this.listTitle: string, public this.liTitleKey: string,
    //              public this.liDetailKeys: Array<string>, public this.liItems: Array<Object> ) {}

    // createBlank() {
    //     return {'listTitle':'', 'liTitleKey':'', 'liDetailKeys':[], 'liItems':[] };
    // }
}