import { GraphQLSchemaHost } from '@nestjs/graphql';
import { ApolloServerPlugin, BaseContext, GraphQLRequestListener } from '@apollo/server';
export declare class GQLComplexityPlugin implements ApolloServerPlugin {
    private gqlSchemaHost;
    constructor(gqlSchemaHost: GraphQLSchemaHost);
    requestDidStart(): Promise<GraphQLRequestListener<BaseContext>>;
}
