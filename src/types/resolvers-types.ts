import { GraphQLResolveInfo } from 'graphql'
import { ApolloContext } from '../context'
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
    changedPassword: Scalars['Boolean']
}

export type LoginResponse = {
    loggedIn: Scalars['Boolean']
}

export type Mutation = {
    createUser: Maybe<User>
    deleteUser: User
    updateUser: Maybe<UpdateResponse>
    loginUser: Maybe<LoginResponse>
    logoutUser: Maybe<Scalars['String']>
    changePassword: Maybe<ChangePasswordResponse>
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
    firstName: Maybe<Scalars['String']>
    lastName: Maybe<Scalars['String']>
    username: Maybe<Scalars['String']>
    email: Maybe<Scalars['String']>
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
    users: Maybe<Array<Maybe<User>>>
    user: Maybe<User>
    currentUser: User
}

export type QueryUserArgs = {
    id: Scalars['ID']
}

export enum Roles {
    User = 'USER',
    Admin = 'ADMIN',
}

export type Subscription = {
    userAdded: User
    userDeleted: User
    userUpdated: User
    userLoggedIn: User
    userLoggedOut: User
}

export type UpdateResponse = {
    updated: Scalars['Boolean']
}

export type User = {
    id: Scalars['ID']
    firstName: Maybe<Scalars['String']>
    lastName: Maybe<Scalars['String']>
    username: Scalars['String']
    email: Scalars['String']
    password: Scalars['String']
    role: Maybe<Roles>
}

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
export type ResolversTypes = {
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
    Subscription: ResolverTypeWrapper<{}>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
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
    Subscription: {}
}

export type ChangePasswordResponseResolvers<
    ContextType = ApolloContext,
    ParentType = ResolversParentTypes['ChangePasswordResponse']
> = {
    changedPassword: Resolver<
        ResolversTypes['Boolean'],
        ParentType,
        ContextType
    >
}

export type LoginResponseResolvers<
    ContextType = ApolloContext,
    ParentType = ResolversParentTypes['LoginResponse']
> = {
    loggedIn: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
}

export type MutationResolvers<
    ContextType = ApolloContext,
    ParentType = ResolversParentTypes['Mutation']
> = {
    createUser: Resolver<
        Maybe<ResolversTypes['User']>,
        ParentType,
        ContextType,
        MutationCreateUserArgs
    >
    deleteUser: Resolver<
        ResolversTypes['User'],
        ParentType,
        ContextType,
        MutationDeleteUserArgs
    >
    updateUser: Resolver<
        Maybe<ResolversTypes['updateResponse']>,
        ParentType,
        ContextType,
        MutationUpdateUserArgs
    >
    loginUser: Resolver<
        Maybe<ResolversTypes['LoginResponse']>,
        ParentType,
        ContextType,
        MutationLoginUserArgs
    >
    logoutUser: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >
    changePassword: Resolver<
        Maybe<ResolversTypes['ChangePasswordResponse']>,
        ParentType,
        ContextType,
        MutationChangePasswordArgs
    >
}

export type QueryResolvers<
    ContextType = ApolloContext,
    ParentType = ResolversParentTypes['Query']
> = {
    users: Resolver<
        Maybe<Array<Maybe<ResolversTypes['User']>>>,
        ParentType,
        ContextType
    >
    user: Resolver<
        Maybe<ResolversTypes['User']>,
        ParentType,
        ContextType,
        QueryUserArgs
    >
    currentUser: Resolver<ResolversTypes['User'], ParentType, ContextType>
}

export type SubscriptionResolvers<
    ContextType = ApolloContext,
    ParentType = ResolversParentTypes['Subscription']
> = {
    userAdded: SubscriptionResolver<
        ResolversTypes['User'],
        ParentType,
        ContextType
    >
    userDeleted: SubscriptionResolver<
        ResolversTypes['User'],
        ParentType,
        ContextType
    >
    userUpdated: SubscriptionResolver<
        ResolversTypes['User'],
        ParentType,
        ContextType
    >
    userLoggedIn: SubscriptionResolver<
        ResolversTypes['User'],
        ParentType,
        ContextType
    >
    userLoggedOut: SubscriptionResolver<
        ResolversTypes['User'],
        ParentType,
        ContextType
    >
}

export type UpdateResponseResolvers<
    ContextType = ApolloContext,
    ParentType = ResolversParentTypes['updateResponse']
> = {
    updated: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
}

export type UserResolvers<
    ContextType = ApolloContext,
    ParentType = ResolversParentTypes['User']
> = {
    id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    firstName: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >
    lastName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    username: Resolver<ResolversTypes['String'], ParentType, ContextType>
    email: Resolver<ResolversTypes['String'], ParentType, ContextType>
    password: Resolver<ResolversTypes['String'], ParentType, ContextType>
    role: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType>
}

export type Resolvers<ContextType = ApolloContext> = {
    ChangePasswordResponse: ChangePasswordResponseResolvers<ContextType>
    LoginResponse: LoginResponseResolvers<ContextType>
    Mutation: MutationResolvers<ContextType>
    Query: QueryResolvers<ContextType>
    Subscription: SubscriptionResolvers<ContextType>
    updateResponse: UpdateResponseResolvers<ContextType>
    User: UserResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>
