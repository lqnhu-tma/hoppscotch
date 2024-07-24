export type CollectionSearchNode = {
    path: CollectionSearchNode[];
} & ({
    type: 'request';
    title: string;
    method: string;
    id: string;
} | {
    type: 'collection';
    title: string;
    id: string;
});
