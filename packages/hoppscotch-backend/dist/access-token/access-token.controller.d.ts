import { AccessTokenService } from './access-token.service';
import { CreateAccessTokenDto } from './dto/create-access-token.dto';
import { AuthUser } from 'src/types/AuthUser';
import { TeamEnvironmentsService } from 'src/team-environments/team-environments.service';
import { TeamCollectionService } from 'src/team-collection/team-collection.service';
export declare class AccessTokenController {
    private readonly accessTokenService;
    private readonly teamCollectionService;
    private readonly teamEnvironmentsService;
    constructor(accessTokenService: AccessTokenService, teamCollectionService: TeamCollectionService, teamEnvironmentsService: TeamEnvironmentsService);
    createPAT(user: AuthUser, createAccessTokenDto: CreateAccessTokenDto): Promise<import("./helper").CreateAccessTokenResponse>;
    deletePAT(id: string): Promise<boolean>;
    listAllUserPAT(user: AuthUser, offset: number, limit: number): Promise<any>;
    fetchCollection(user: AuthUser, id: string): Promise<import("../team-collection/helper").GetCollectionResponse>;
    fetchEnvironment(user: AuthUser, id: string): Promise<any>;
}
