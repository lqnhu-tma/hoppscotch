import { TeamRequest } from '@prisma/client';
export type SearchQueryReturnType = {
    id: string;
    title: string;
    type: 'collection' | 'request';
    method?: string;
};
export type ParentTreeQueryReturnType = {
    id: string;
    parentID: string;
    title: string;
};
export type GetCollectionResponse = {
    id: string;
    data: string | null;
    title: string;
    parentID: string | null;
    folders: GetCollectionResponse[];
    requests: TeamRequest[];
};
