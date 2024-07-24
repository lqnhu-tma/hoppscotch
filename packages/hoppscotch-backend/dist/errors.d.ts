export declare const INVALID_EMAIL: "invalid/email";
export declare const EMAIL_FAILED: "email/failed";
export declare const DUPLICATE_EMAIL: "email/both_emails_cannot_be_same";
export declare const ONLY_ONE_ADMIN_ACCOUNT: "admin/only_one_admin_account_found";
export declare const ADMIN_CAN_NOT_BE_DELETED: "admin/admin_can_not_be_deleted";
export declare const AUTH_FAIL = "auth/fail";
export declare const JSON_INVALID = "json_invalid";
export declare const AUTH_PROVIDER_NOT_SPECIFIED = "auth/provider_not_specified";
export declare const AUTH_PROVIDER_NOT_CONFIGURED = "auth/provider_not_configured_correctly";
export declare const ENV_NOT_FOUND_KEY_AUTH_PROVIDERS = "\"VITE_ALLOWED_AUTH_PROVIDERS\" is not present in .env file";
export declare const ENV_EMPTY_AUTH_PROVIDERS = "\"VITE_ALLOWED_AUTH_PROVIDERS\" is empty in .env file";
export declare const ENV_NOT_SUPPORT_AUTH_PROVIDERS = "\"VITE_ALLOWED_AUTH_PROVIDERS\" contains an unsupported auth provider in .env file";
export declare const USER_FB_DOCUMENT_DELETION_FAILED: "fb/firebase_document_deletion_failed";
export declare const USER_NOT_FOUND: "user/not_found";
export declare const USER_ALREADY_INVITED: "admin/user_already_invited";
export declare const USER_UPDATE_FAILED: "user/update_failed";
export declare const USER_SHORT_DISPLAY_NAME: "user/short_display_name";
export declare const USER_DELETION_FAILED: "user/deletion_failed";
export declare const USERS_NOT_FOUND: "user/users_not_found";
export declare const USER_IS_OWNER: "user/is_owner";
export declare const USER_IS_ADMIN: "user/is_admin";
export declare const USER_INVITATION_DELETION_FAILED: "user/invitation_deletion_failed";
export declare const TEAMS_NOT_FOUND: "user/teams_not_found";
export declare const USER_COLLECTION_NOT_FOUND: "user_collection/not_found";
export declare const USER_REQUEST_CREATION_FAILED: "user_request/creation_failed";
export declare const USER_REQUEST_INVALID_TYPE: "user_request/type_mismatch";
export declare const USER_REQUEST_NOT_FOUND: "user_request/not_found";
export declare const USER_REQUEST_REORDERING_FAILED: "user_request/reordering_failed";
export declare const TEAM_MEMBER_NOT_FOUND: "team/member_not_found";
export declare const TEAM_NOT_REQUIRED_ROLE: "team/not_required_role";
export declare const TEAM_NAME_INVALID = "team/name_invalid";
export declare const TEAM_USER_NO_FB_SYNCDATA = "team/user_no_fb_syncdata";
export declare const TEAM_FB_COLL_PATH_RESOLVE_FAIL = "team/fb_coll_path_resolve_fail";
export declare const TEAM_COLL_NOT_FOUND = "team_coll/collection_not_found";
export declare const TEAM_COLL_IS_PARENT_COLL = "team_coll/collection_is_parent_coll";
export declare const TEAM_COLL_NOT_SAME_TEAM = "team_coll/collections_not_same_team";
export declare const TEAM_COLL_DEST_SAME = "team_coll/target_and_destination_collection_are_same";
export declare const TEAM_COL_ALREADY_ROOT = "team_coll/target_collection_is_already_root_collection";
export declare const TEAM_COL_NOT_SAME_PARENT = "team_coll/team_collections_have_different_parents";
export declare const TEAM_COL_SAME_NEXT_COLL = "team_coll/collection_and_next_collection_are_same";
export declare const TEAM_COL_SEARCH_FAILED = "team_coll/team_collection_search_failed";
export declare const TEAM_COL_REORDERING_FAILED = "team_coll/reordering_failed";
export declare const TEAM_ONLY_ONE_OWNER = "team/only_one_owner";
export declare const TEAM_INVALID_ID: "team/invalid_id";
export declare const TEAM_INVALID_COLL_ID: "team/invalid_coll_id";
export declare const TEAM_INVALID_ID_OR_USER = "team/invalid_id_or_user";
export declare const TEAM_COLL_SHORT_TITLE = "team_coll/short_title";
export declare const TEAM_COLL_INVALID_JSON = "team_coll/invalid_json";
export declare const TEAM_NOT_OWNER: "team_coll/team_not_owner";
export declare const TEAM_COLL_DATA_INVALID: "team_coll/team_coll_data_invalid";
export declare const TEAM_COLL_PARENT_TREE_GEN_FAILED = "team_coll/team_coll_parent_tree_generation_failed";
export declare const TEAM_REQ_NOT_REQUIRED_ROLE = "team_req/not_required_role";
export declare const TEAM_REQ_NOT_FOUND: "team_req/not_found";
export declare const TEAM_REQ_INVALID_TARGET_COLL_ID: "team_req/invalid_target_id";
export declare const TEAM_REQ_REORDERING_FAILED: "team_req/reordering_failed";
export declare const TEAM_REQ_SEARCH_FAILED = "team_req/team_request_search_failed";
export declare const TEAM_REQ_PARENT_TREE_GEN_FAILED = "team_req/team_req_parent_tree_generation_failed";
export declare const SENDER_EMAIL_INVALID: "mailer/sender_email_invalid";
export declare const TEAM_REQ_NOT_MEMBER = "team_req/not_member";
export declare const TEAM_INVITE_MEMBER_HAS_INVITE: "team_invite/member_has_invite";
export declare const TEAM_INVITE_NO_INVITE_FOUND: "team_invite/no_invite_found";
export declare const TEAM_INVITE_ALREADY_MEMBER: "team_invite/already_member";
export declare const TEAM_INVITE_EMAIL_DO_NOT_MATCH: "team_invite/email_do_not_match";
export declare const TEAM_INVITE_NOT_VALID_VIEWER: "team_invite/not_valid_viewer";
export declare const TEAM_INVITATION_NOT_FOUND: "team_invite/invitations_not_found";
export declare const SHORTCODE_NOT_FOUND: "shortcode/not_found";
export declare const TEAM_ENVIRONMENT_NOT_FOUND: "team_environment/not_found";
export declare const TEAM_ENVIRONMENT_SHORT_NAME: "team_environment/short_name";
export declare const TEAM_ENVIRONMENT_NOT_TEAM_MEMBER: "team_environment/not_team_member";
export declare const USER_SETTINGS_NOT_FOUND: "user_settings/not_found";
export declare const USER_SETTINGS_ALREADY_EXISTS: "user_settings/settings_already_exists";
export declare const USER_SETTINGS_NULL_SETTINGS: "user_settings/null_settings";
export declare const USER_ENVIRONMENT_GLOBAL_ENV_DOES_NOT_EXISTS: "user_environment/global_env_does_not_exists";
export declare const USER_ENVIRONMENT_GLOBAL_ENV_EXISTS: "user_environment/global_env_already_exists";
export declare const USER_ENVIRONMENT_ENV_DOES_NOT_EXISTS: "user_environment/user_env_does_not_exists";
export declare const USER_ENVIRONMENT_GLOBAL_ENV_DELETION_FAILED: "user_environment/user_env_global_env_deletion_failed";
export declare const USER_ENVIRONMENT_IS_NOT_GLOBAL: "user_environment/user_env_is_not_global";
export declare const USER_ENVIRONMENT_UPDATE_FAILED: "user_environment/user_env_update_failed";
export declare const USER_ENVIRONMENT_INVALID_ENVIRONMENT_NAME: "user_environment/user_env_invalid_env_name";
export declare const USER_HISTORY_NOT_FOUND: "user_history/history_not_found";
export declare const USER_HISTORY_INVALID_REQ_TYPE: "user_history/req_type_invalid";
export declare const BUG_AUTH_NO_USER_CTX: "bug/auth/auth_no_user_ctx";
export declare const BUG_TEAM_NO_TEAM_ID = "bug/team/no_team_id";
export declare const BUG_TEAM_NO_REQUIRE_TEAM_ROLE = "bug/team/no_require_team_role";
export declare const BUG_TEAM_COLL_NO_COLL_ID = "bug/team_coll/no_coll_id";
export declare const BUG_TEAM_REQ_NO_REQ_ID = "bug/team_req/no_req_id";
export declare const BUG_TEAM_INVITE_NO_INVITE_ID: "bug/team_invite/no_invite_id";
export declare const BUG_TEAM_ENV_GUARD_NO_REQUIRE_ROLES: "bug/team_env/guard_no_require_roles";
export declare const BUG_TEAM_ENV_GUARD_NO_ENV_ID: "bug/team_env/guard_no_env_id";
export declare const INVALID_MAGIC_LINK_DATA: "auth/magic_link_invalid_data";
export declare const VERIFICATION_TOKEN_DATA_NOT_FOUND: "auth/verification_token_data_not_found";
export declare const TOKEN_EXPIRED: "auth/token_expired";
export declare const MAGIC_LINK_EXPIRED: "auth/magic_link_expired";
export declare const COOKIES_NOT_FOUND: "auth/cookies_not_found";
export declare const INVALID_ACCESS_TOKEN: "auth/invalid_access_token";
export declare const INVALID_REFRESH_TOKEN: "auth/invalid_refresh_token";
export declare const USER_COLL_SHORT_TITLE: "user_coll/short_title";
export declare const USER_COLL_NOT_FOUND: "user_coll/not_found";
export declare const USER_COLL_ALREADY_ROOT: "user_coll/target_user_collection_is_already_root_user_collection";
export declare const USER_COLL_DEST_SAME: "user_coll/target_and_destination_user_collection_are_same";
export declare const USER_COLL_NOT_SAME_USER: "user_coll/not_same_user";
export declare const USER_COLL_NOT_SAME_TYPE: "user_coll/type_mismatch";
export declare const USER_COLL_IS_PARENT_COLL: "user_coll/user_collection_is_parent_coll";
export declare const USER_COLL_REORDERING_FAILED: "user_coll/reordering_failed";
export declare const USER_COLL_SAME_NEXT_COLL: "user_coll/user_collection_and_next_user_collection_are_same";
export declare const USER_COLL_DATA_INVALID: "user_coll/user_coll_data_invalid";
export declare const USER_NOT_OWNER: "user_coll/user_not_owner";
export declare const USER_COLL_INVALID_JSON = "user_coll/invalid_json";
export declare const MAILER_SMTP_URL_UNDEFINED: "mailer/smtp_url_undefined";
export declare const MAILER_FROM_ADDRESS_UNDEFINED: "mailer/from_address_undefined";
export declare const MAILER_SMTP_USER_UNDEFINED: "mailer/smtp_user_undefined";
export declare const MAILER_SMTP_PASSWORD_UNDEFINED: "mailer/smtp_password_undefined";
export declare const SHORTCODE_INVALID_REQUEST_JSON: "shortcode/request_invalid_format";
export declare const SHORTCODE_INVALID_PROPERTIES_JSON: "shortcode/properties_invalid_format";
export declare const SHORTCODE_PROPERTIES_NOT_FOUND: "shortcode/properties_not_found";
export declare const INFRA_CONFIG_NOT_FOUND: "infra_config/not_found";
export declare const INFRA_CONFIG_UPDATE_FAILED: "infra_config/update_failed";
export declare const INFRA_CONFIG_NOT_LISTED: "infra_config/properly_not_listed";
export declare const INFRA_CONFIG_RESET_FAILED: "infra_config/reset_failed";
export declare const INFRA_CONFIG_INVALID_INPUT: "infra_config/invalid_input";
export declare const INFRA_CONFIG_SERVICE_NOT_CONFIGURED: "infra_config/service_not_configured";
export declare const INFRA_CONFIG_OPERATION_NOT_ALLOWED = "infra_config/operation_not_allowed";
export declare const DATABASE_TABLE_NOT_EXIST = "Database migration not found. Please check the documentation for assistance: https://docs.hoppscotch.io/documentation/self-host/community-edition/install-and-build#running-migrations";
export declare const POSTHOG_CLIENT_NOT_INITIALIZED = "posthog/client_not_initialized";
export declare const INVALID_PARAMS: "invalid_parameters";
export declare const ACCESS_TOKEN_LABEL_SHORT = "access_token/label_too_short";
export declare const ACCESS_TOKEN_EXPIRY_INVALID = "access_token/expiry_days_invalid";
export declare const ACCESS_TOKEN_NOT_FOUND = "access_token/access_token_not_found";
export declare const ACCESS_TOKEN_EXPIRED = "TOKEN_EXPIRED";
export declare const ACCESS_TOKEN_INVALID = "TOKEN_INVALID";
export declare const ACCESS_TOKENS_INVALID_DATA_ID = "INVALID_ID";
