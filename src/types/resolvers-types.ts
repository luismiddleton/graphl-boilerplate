import { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type ChangePasswordResponse = {
    __typename?: 'ChangePasswordResponse'
    changedPassword: Scalars['Boolean']
}

export type LoginResponse = {
    __typename?: 'LoginResponse'
    loggedIn: Scalars['Boolean']
    token: Scalars['String']
}

export type Mutation = {
    __typename?: 'Mutation'
    createUser?: Maybe<User>
    deleteUser: User
    updateUser?: Maybe<UpdateResponse>
    loginUser?: Maybe<LoginResponse>
    changePassword?: Maybe<ChangePasswordResponse>
}

export type MutationCreateUserArgs = {
    firstName: Scalars['String']
    lastName: Scalars['String']
    username: Scalars['String']
    email: Scalars['String']
    password: Scalars['String']
    role: Roles
}

export type MutationDeleteUserArgs = {
    id: Scalars['ID']
}

export type MutationUpdateUserArgs = {
    id: Scalars['ID']
    firstName?: Maybe<Scalars['String']>
    lastName?: Maybe<Scalars['String']>
    username?: Maybe<Scalars['String']>
    email?: Maybe<Scalars['String']>
}

export type MutationLoginUserArgs = {
    email: Scalars['String']
    password: Scalars['String']
}

export type MutationChangePasswordArgs = {
    email: Scalars['String']
    currentPassword: Scalars['String']
    newPassword: Scalars['String']
}

export type Query = {
    __typename?: 'Query'
    users?: Maybe<Array<Maybe<User>>>
    user?: Maybe<User>
}

export type QueryUserArgs = {
    id: Scalars['ID']
}

export enum Roles {
    User = 'USER',
    Admin = 'ADMIN',
}

export type UpdateResponse = {
    __typename?: 'updateResponse'
    updated: Scalars['Boolean']
}

export type User = {
    __typename?: 'User'
    id: Scalars['ID']
    firstName?: Maybe<Scalars['String']>
    lastName?: Maybe<Scalars['String']>
    username: Scalars['String']
    email: Scalars['String']
    password: Scalars['String']
    role?: Maybe<Roles>
}
export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
    resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<
    TResult,
    TParent = {},
    TContext = {},
    TArgs = {}
> =
    | ((
          ...args: any[]
      ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
    TResult = {},
    TParent = {},
    TContext = {},
    TArgs = {}
> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Query: ResolverTypeWrapper<{}>
    User: ResolverTypeWrapper<User>
    ID: ResolverTypeWrapper<Scalars['ID']>
    String: ResolverTypeWrapper<Scalars['String']>
    Roles: Roles
    Mutation: ResolverTypeWrapper<{}>
    updateResponse: ResolverTypeWrapper<UpdateResponse>
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>
    LoginResponse: ResolverTypeWrapper<LoginResponse>
    ChangePasswordResponse: ResolverTypeWrapper<ChangePasswordResponse>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Query: {}
    User: User
    ID: Scalars['ID']
    String: Scalars['String']
    Roles: Roles
    Mutation: {}
    updateResponse: UpdateResponse
    Boolean: Scalars['Boolean']
    LoginResponse: LoginResponse
    ChangePasswordResponse: ChangePasswordResponse
}>

export type ChangePasswordResponseResolvers<
    ContextType = any,
    ParentType = ResolversParentTypes['ChangePasswordResponse']
> = ResolversObject<{
    changedPassword?: Resolver<
        ResolversTypes['Boolean'],
        ParentType,
        ContextType
    >
}>

export type LoginResponseResolvers<
    ContextType = any,
    ParentType = ResolversParentTypes['LoginResponse']
> = ResolversObject<{
    loggedIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type MutationResolvers<
    ContextType = any,
    ParentType = ResolversParentTypes['Mutation']
> = ResolversObject<{
    createUser?: Resolver<
        Maybe<ResolversTypes['User']>,
        ParentType,
        ContextType,
        MutationCreateUserArgs
    >
    deleteUser?: Resolver<
        ResolversTypes['User'],
        ParentType,
        ContextType,
        MutationDeleteUserArgs
    >
    updateUser?: Resolver<
        Maybe<ResolversTypes['updateResponse']>,
        ParentType,
        ContextType,
        MutationUpdateUserArgs
    >
    loginUser?: Resolver<
        Maybe<ResolversTypes['LoginResponse']>,
        ParentType,
        ContextType,
        MutationLoginUserArgs
    >
    changePassword?: Resolver<
        Maybe<ResolversTypes['ChangePasswordResponse']>,
        ParentType,
        ContextType,
        MutationChangePasswordArgs
    >
}>

export type QueryResolvers<
    ContextType = any,
    ParentType = ResolversParentTypes['Query']
> = ResolversObject<{
    users?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['User']>>>,
        ParentType,
        ContextType
    >
    user?: Resolver<
        Maybe<ResolversTypes['User']>,
        ParentType,
        ContextType,
        QueryUserArgs
    >
}>

export type UpdateResponseResolvers<
    ContextType = any,
    ParentType = ResolversParentTypes['updateResponse']
> = ResolversObject<{
    updated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
}>

export type UserResolvers<
    ContextType = any,
    ParentType = ResolversParentTypes['User']
> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    firstName?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >
    lastName?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >
    username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    role?: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
    ChangePasswordResponse?: ChangePasswordResponseResolvers<ContextType>
    LoginResponse?: LoginResponseResolvers<ContextType>
    Mutation?: MutationResolvers<ContextType>
    Query?: QueryResolvers<ContextType>
    updateResponse?: UpdateResponseResolvers<ContextType>
    User?: UserResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
